import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, Activity, BarChart, Megaphone } from "lucide-react";
import { MarketingTopNav } from "@/components/layout/MarketingTopNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const metricCategories = [
  {
    title: "Revenue Metrics",
    icon: DollarSign,
    description: "Key metrics for tracking financial health and growth",
    metrics: [
      {
        name: "Monthly Recurring Revenue (MRR)",
        description: "Total revenue generated from all active subscriptions on a monthly basis",
        example: "If you have 100 customers paying $50/month, your MRR is $5,000"
      },
      {
        name: "Annual Recurring Revenue (ARR)",
        description: "Yearly value of recurring revenue from subscriptions",
        example: "MRR × 12, or sum of all yearly subscriptions"
      },
      {
        name: "Average Revenue Per User (ARPU)",
        description: "Average monthly revenue generated per customer",
        example: "MRR ÷ Total number of active customers"
      }
    ]
  },
  {
    title: "Acquisition Metrics",
    icon: Users,
    description: "Metrics that track customer acquisition effectiveness",
    metrics: [
      {
        name: "Customer Acquisition Cost (CAC)",
        description: "Total cost of acquiring a new customer",
        example: "Marketing & Sales spend ÷ Number of new customers"
      },
      {
        name: "Customer Lifetime Value (LTV)",
        description: "Predicted total revenue from a customer over time",
        example: "ARPU × Average customer lifespan (in months)"
      },
      {
        name: "LTV/CAC Ratio",
        description: "Relationship between customer value and acquisition cost",
        example: "LTV ÷ CAC (aim for 3:1 or higher)"
      }
    ]
  },
  {
    title: "Engagement Metrics",
    icon: Activity,
    description: "Metrics measuring product usage and engagement",
    metrics: [
      {
        name: "Daily/Weekly/Monthly Active Users",
        description: "Number of unique users who engage with your product in different time periods",
        example: "500 DAU means 500 unique users used your product in a day"
      },
      {
        name: "Feature Adoption Rate",
        description: "Percentage of users who adopt key features",
        example: "Users using feature ÷ Total users × 100%"
      },
      {
        name: "Time to Value (TTV)",
        description: "Time taken for users to realize the product's core value",
        example: "Median days from signup to achieving key success milestone"
      }
    ]
  },
  {
    title: "Retention Metrics",
    icon: BarChart,
    description: "Metrics tracking customer retention and satisfaction",
    metrics: [
      {
        name: "Customer Churn Rate",
        description: "Rate at which customers cancel their subscription",
        example: "Churned customers ÷ Total customers at start of period × 100%"
      },
      {
        name: "Net Promoter Score (NPS)",
        description: "Measure of customer satisfaction and loyalty",
        example: "% Promoters (9-10) - % Detractors (0-6) = NPS"
      },
      {
        name: "Customer Health Score",
        description: "Composite metric predicting likelihood of customer retention",
        example: "Score based on product usage, support tickets, NPS, and payment history"
      }
    ]
  },
  {
    title: "Marketing & Growth Metrics",
    icon: Megaphone,
    description: "Key metrics for tracking marketing and growth initiatives",
    metrics: [
      {
        name: "Email Marketing Performance",
        description: "Core metrics for email campaign effectiveness",
        example: "Open Rate: 25%, CTR: 3.2%, List Growth: +5%/month"
      },
      {
        name: "Ad Performance",
        description: "Key advertising metrics across platforms",
        example: "ROAS: 3.5x, CPC: $2.50, CPL: $50, Conversion Rate: 2.5%"
      },
      {
        name: "SEO Health",
        description: "Organic search performance indicators",
        example: "Organic Traffic Growth: +20% MoM, Domain Authority: 45"
      }
    ]
  }
];

export default function SaasMetrics() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingTopNav />

      <main className="max-w-[1200px] mx-auto px-6">
        <div className="pt-36 pb-24">
          <div className="max-w-[800px] mx-auto space-y-8">
            <div className="space-y-4 text-center">
              <Badge variant="secondary" className="mb-2">
                Core Feature
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight">SaaS Metrics Guide</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-[600px] mx-auto">
                Essential metrics for tracking and growing your SaaS business, with practical examples and formulas.
              </p>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-6"
            >
              {metricCategories.map((category, categoryIndex) => (
                <motion.div key={categoryIndex} variants={item}>
                  <Card className="overflow-hidden">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <category.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-xl font-medium">{category.title}</h2>
                          <p className="text-sm text-muted-foreground">{category.description}</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {category.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="pl-4 border-l-2 border-muted">
                            <h3 className="font-medium mb-2">{metric.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{metric.description}</p>
                            <div className="text-sm bg-muted/50 p-2 rounded-md">
                              <span className="font-medium">Example: </span>
                              {metric.example}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
