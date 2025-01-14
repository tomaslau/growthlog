import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { growthIdeas } from '@db/schema';
import { db } from '@db';
import { eq } from 'drizzle-orm';

export class SheetsService {
  private doc: GoogleSpreadsheet;
  private sheet: any;
  
  constructor(private spreadsheetId: string) {
    // Initialize with service account credentials
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    this.doc = new GoogleSpreadsheet(spreadsheetId, serviceAccountAuth);
  }

  async init() {
    await this.doc.loadInfo();
    this.sheet = this.doc.sheetsByIndex[0]; // Get the first sheet
  }

  async syncToSheets(userId: number) {
    // Get all growth ideas for the user
    const ideas = await db.query.growthIdeas.findMany({
      where: eq(growthIdeas.userId, userId)
    });

    // Prepare headers
    const headers = [
      'Title',
      'Description',
      'Category',
      'Sub Category',
      'Strategy Type',
      'Platform',
      'Difficulty',
      'Impact',
      'Status',
      'Tags',
      'Source URL'
    ];

    // Clear existing content and set headers
    await this.sheet.clear();
    await this.sheet.setHeaderRow(headers);

    // Convert ideas to rows
    const rows = ideas.map(idea => ({
      'Title': idea.title,
      'Description': idea.description,
      'Category': idea.category,
      'Sub Category': idea.subCategory,
      'Strategy Type': idea.strategyType,
      'Platform': idea.platform || '',
      'Difficulty': idea.difficulty,
      'Impact': idea.impact,
      'Status': idea.status,
      'Tags': idea.tags?.join(', ') || '',
      'Source URL': idea.sourceUrl || ''
    }));

    // Add rows to sheet
    await this.sheet.addRows(rows);

    // Update sync timestamp for all synced ideas
    await Promise.all(ideas.map(idea => 
      db.update(growthIdeas)
        .set({ 
          sheetsLastSync: new Date(),
          sheetsRowId: ideas.indexOf(idea) + 2 // +2 because row 1 is header
        })
        .where(eq(growthIdeas.id, idea.id))
    ));

    return rows.length;
  }

  async syncFromSheets(userId: number) {
    const rows = await this.sheet.getRows();
    let syncCount = 0;

    for (const row of rows) {
      const ideaData = {
        userId,
        title: row['Title'],
        description: row['Description'],
        category: row['Category'],
        subCategory: row['Sub Category'],
        strategyType: row['Strategy Type'],
        platform: row['Platform'],
        difficulty: row['Difficulty'],
        impact: row['Impact'],
        status: row['Status'],
        tags: row['Tags']?.split(',').map((tag: string) => tag.trim()) || [],
        sourceUrl: row['Source URL'],
        icon: '📈', // Default icon
        sheetsLastSync: new Date(),
        sheetsRowId: rows.indexOf(row) + 2
      };

      await db.insert(growthIdeas).values(ideaData)
        .onConflictDoUpdate({
          target: [growthIdeas.userId, growthIdeas.sheetsRowId],
          set: ideaData
        });

      syncCount++;
    }

    return syncCount;
  }
}
