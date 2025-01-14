
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
    id: "saas-instagram-growth",
    title: "SaaS Instagram Organic Growth Strategy",
    description: "Launch organic growth initiatives on Instagram for SaaS decision makers",
    category: "Acquisition",
    difficulty: "Medium",
    impact: "High",
    tasks: [
      {
        title: "Define content strategy",
        description: "Create content calendar and themes for organic posting",
        duration: 25
      },
      {
        title: "Set up Instagram business profile",
        description: "Optimize profile for business outreach",
        duration: 25
      },
      {
        title: "Create engagement plan",
        description: "Define hashtag strategy and engagement tactics",
        duration: 25
      }
    ],
    metrics: [
      "Follower Growth Rate",
      "Engagement Rate",
      "Profile Visits",
      "Website Clicks"
    ],
    lastUpdated: "2024-01-16"
  },
  {
    id: "newsletter-growth",
    title: "SaaS Newsletter Growth Strategy",
    description: "Implement newsletter growth tactics to increase subscriber base",
    category: "Acquisition",
    difficulty: "Easy",
    impact: "Medium",
    tasks: [
      {
        title: "Design opt-in strategy",
        description: "Create compelling opt-in offers and placement strategy",
        duration: 25
      },
      {
        title: "Set up email automation",
        description: "Configure welcome sequence and tracking",
        duration: 25
      }
    ],
    metrics: [
      "Opt-in Rate",
      "Subscriber Growth Rate",
      "Email Open Rate",
      "Click-through Rate"
    ],
    lastUpdated: "2024-01-16"
  },
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
