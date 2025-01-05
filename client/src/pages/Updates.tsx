
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { MarketingTopNav } from "@/components/layout/MarketingTopNav";

type Update = {
  date: string;
  title: string;
  description: string;
  tag: "New" | "Improved" | "Fixed";
};

type ChangelogSection = {
  version: string;
  date: string;
  added: Update[];
  improved: Update[];
  fixed: Update[];
};

export default function Updates() {
  const CACHE_KEY = 'changelog_cache';
  const [changelog, setChangelog] = useState<ChangelogSection[]>(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : [];
  });

  useEffect(() => {
    const fetchChangelog = () => {
      fetch('/CHANGELOG.md')
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch changelog');
          return res.text();
        })
        .then(text => {
          // Parse the markdown content
          const sections = text.split('\n## ').slice(1);
          const parsed = sections.map(section => {
            const lines = section.split('\n');
            const headerLine = lines[0];
            
            // Extract version and date
            const versionMatch = headerLine.match(/\[(.*?)\]/);
            const dateMatch = headerLine.match(/(\d{4}-\d{2}-\d{2})/);
            
            const version = versionMatch ? versionMatch[1] : '';
            const date = dateMatch ? dateMatch[1] : '';
            
            const added: Update[] = [];
            const improved: Update[] = [];
            const fixed: Update[] = [];
            
            let currentSection = '';
            
            lines.forEach(line => {
              if (line.includes('### Added')) currentSection = 'added';
              else if (line.includes('### Improved')) currentSection = 'improved';
              else if (line.includes('### Fixed')) currentSection = 'fixed';
              else if (line.trim().startsWith('- ')) {
                const update = {
                  date,
                  title: line.trim().substring(2),
                  description: line.trim().substring(2),
                  tag: currentSection === 'added' ? 'New' : 
                       currentSection === 'improved' ? 'Improved' : 'Fixed' as Update['tag']
                };
                
                if (currentSection === 'added') added.push(update);
                if (currentSection === 'improved') improved.push(update);
                if (currentSection === 'fixed') fixed.push(update);
              }
            });

            return { version, date, added, improved, fixed };
          });
          
          setChangelog(parsed);
          localStorage.setItem(CACHE_KEY, JSON.stringify(parsed));
        })
        .catch(error => {
          console.error('Error loading changelog:', error);
        });
    };

    // If no cached data, fetch immediately
    if (changelog.length === 0) {
      fetchChangelog();
    } else {
      // If we have cached data, fetch in background
      fetchChangelog();
    }
  }, []); // Remove changelog.length dependency

  return (
    <div className="min-h-screen bg-background">
      <MarketingTopNav />
      <main className="max-w-[800px] mx-auto px-6">
        <div className="pt-36 pb-24">
          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground/80 mb-6">
              <span>Product updates</span>
              <ChevronRight className="h-4 w-4" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Latest Updates</h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Stay updated with new features and improvements to help you grow your SaaS business more effectively.
            </p>
          </div>

          <div className="space-y-8">
            {changelog.map((section) => (
              <div key={section.version} className="space-y-4">
                <h2 className="text-base font-semibold tracking-tight">
                  Version {section.version} - {section.date}
                </h2>
                <div className="space-y-2">
                  {[...section.added, ...section.improved, ...section.fixed].map((update, index) => (
                    <Card key={index} className="p-3">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant={
                              update.tag === "New" ? "default" :
                              update.tag === "Improved" ? "secondary" : "destructive"
                            } className="text-xs">
                              {update.tag}
                            </Badge>
                            <h3 className="text-sm">{update.title}</h3>
                          </div>
                          <time className="text-xs text-muted-foreground">
                            {update.date}
                          </time>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <MarketingFooter />
    </div>
  );
}
