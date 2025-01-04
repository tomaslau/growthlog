import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { DollarSign, Users, Activity, BarChart } from "lucide-react";

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
        example: "Marketing spend ÷ Number of new customers"
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
        name: "Daily/Monthly Active Users (DAU/MAU)",
        description: "Number of unique users who engage with your product",
        example: "500 DAU means 500 unique users used your product in a day"
      },
      {
        name: "Session Duration",
        description: "Average time users spend in your product per session",
        example: "Average time from login to logout or last activity"
      },
      {
        name: "Feature Adoption Rate",
        description: "Percentage of users who adopt key features",
        example: "Users using feature ÷ Total users × 100"
      }
    ]
  },
  {
    title: "Retention Metrics",
    icon: BarChart,
    description: "Metrics tracking customer retention and churn",
    metrics: [
      {
        name: "Churn Rate",
        description: "Rate at which customers cancel their subscription",
        example: "Churned customers ÷ Total customers at start of period"
      },
      {
        name: "Net Revenue Retention (NRR)",
        description: "Revenue retained from existing customers including expansions",
        example: "(Starting MRR + Expansion - Churn) ÷ Starting MRR × 100"
      },
      {
        name: "Customer Retention Rate",
        description: "Percentage of customers retained over time",
        example: "1 - Churn Rate (as a percentage)"
      }
    ]
  }
];

export default function SaasMetrics() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-8 pb-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Badge variant="secondary" className="mb-4">Reference Guide</Badge>
        <h1 className="text-4xl font-bold mb-4">SaaS Metrics Guide</h1>
        <p className="text-lg text-muted-foreground">
          Essential metrics for tracking and growing your SaaS business, with practical examples and explanations.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6"
      >
        {metricCategories.map((category, categoryIndex) => (
          <motion.div key={categoryIndex} variants={item}>
            <Card className="overflow-hidden hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{category.title}</h2>
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
    </motion.div>
  );
}
