
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

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
  const [changelog, setChangelog] = useState<ChangelogSection[]>([]);

  useEffect(() => {
    fetch('/changelog/CHANGELOG.md')
      .then(res => res.text())
      .then(text => {
        // Basic parser for the changelog format
        const sections = text.split('\n## ').slice(1);
        const parsed = sections.map(section => {
          const [header, ...content] = section.split('\n');
          const [version, date] = header.match(/\[(.*?)\].*?(\d{4}-\d{2}-\d{2})/)||[];
          
          const added = [], improved = [], fixed = [];
          let currentSection = '';
          
          content.forEach(line => {
            if (line.startsWith('### Added')) currentSection = 'added';
            else if (line.startsWith('### Improved')) currentSection = 'improved';
            else if (line.startsWith('### Fixed')) currentSection = 'fixed';
            else if (line.startsWith('- ')) {
              const update = {
                date: date,
                title: line.slice(2),
                description: line.slice(2),
                tag: currentSection === 'added' ? 'New' : 
                     currentSection === 'improved' ? 'Improved' : 'Fixed'
              };
              if (currentSection === 'added') added.push(update);
              if (currentSection === 'improved') improved.push(update);
              if (currentSection === 'fixed') fixed.push(update);
            }
          });

          return { version, date, added, improved, fixed };
        });
        setChangelog(parsed);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-[800px] mx-auto px-6">
        <div className="pt-36 pb-24">
          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground/80 mb-6">
              <span>Product updates</span>
              <ChevronRight className="h-4 w-4" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Latest Updates</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay updated with new features and improvements to help you grow your SaaS business more effectively.
            </p>
          </div>

          <div className="space-y-16">
            {changelog.map((section) => (
              <div key={section.version} className="space-y-8">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Version {section.version} - {section.date}
                </h2>
                <div className="space-y-4">
                  {[...section.added, ...section.improved, ...section.fixed].map((update, index) => (
                    <Card key={index} className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Badge variant={
                              update.tag === "New" ? "default" :
                              update.tag === "Improved" ? "secondary" : "destructive"
                            }>
                              {update.tag}
                            </Badge>
                            <h3 className="font-medium">{update.title}</h3>
                          </div>
                          <time className="text-sm text-muted-foreground">
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
    </div>
  );
}
