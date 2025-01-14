
export type GrowthIdea = {
  id: string;
  title: string;
  description: string;
  category: 'Acquisition' | 'Activation' | 'Retention' | 'Revenue';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  impact: 'Low' | 'Medium' | 'High';
  tasks: {
    title: string;
    description: string;
    duration: number;
  }[];
  metrics: string[];
  source?: string;
  lastUpdated: string;
}

export const growthIdeas: GrowthIdea[] = [
  {
    id: "cold-email-campaign",
    title: "Cold Email Campaign",
    description: "Launch targeted cold email campaign for SaaS decision makers",
    category: "Acquisition",
    difficulty: "Medium", 
    impact: "High",
    tasks: [
      {
        title: "Research and create ICP list",
        description: "Define ideal customer profile and create initial prospect list",
        duration: 25
      },
      {
        title: "Draft initial email template",
        description: "Write and test initial email template variation",
        duration: 25
      },
      {
        title: "Set up email tracking system",
        description: "Configure tracking pixels and link monitoring",
        duration: 25
      },
      {
        title: "Create follow-up sequence",
        description: "Design multi-touch follow-up campaign",
        duration: 25
      }
    ],
    metrics: [
      "Email Open Rate",
      "Click-Through Rate", 
      "Meeting Booking Rate",
      "Customer Acquisition Cost (CAC)"
    ],
    lastUpdated: "2024-01-16"
  },
  {
    id: "loyalty-program",
    title: "Loyalty & Rewards Program",
    description: "Implement a loyalty program to increase retention and repeat purchases",
    category: "Retention",
    difficulty: "Medium",
    impact: "High",
    tasks: [
      {
        title: "Define reward structure",
        description: "Create points/rewards system and benefits tiers",
        duration: 25
      },
      {
        title: "Set up tracking system",
        description: "Implement system to track points and redemptions",
        duration: 25
      },
      {
        title: "Create promotional materials",
        description: "Design assets to promote program benefits",
        duration: 25
      }
    ],
    metrics: [
      "Program Participation Rate",
      "Repeat Purchase Rate",
      "Average Order Value",
      "Customer Lifetime Value"
    ],
    lastUpdated: "2024-01-16"
  }
];

export const getGrowthIdea = (id: string): GrowthIdea | undefined => {
  return growthIdeas.find(idea => idea.id === id);
};

export const getGrowthIdeasByCategory = (category: GrowthIdea['category']): GrowthIdea[] => {
  return growthIdeas.filter(idea => idea.category === category);
};
