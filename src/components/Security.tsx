import { Shield, Lock, Eye, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const securityFeatures = [
  {
    icon: Lock,
    title: "Least privilege access",
    description: "AI only accesses the minimum data required. No blanket permissions."
  },
  {
    icon: Shield,
    title: "Role-based controls",
    description: "Granular permissions aligned with your existing organizational structure."
  },
  {
    icon: Eye,
    title: "Full auditability",
    description: "Complete logs of every query, response, and data access for compliance."
  },
  {
    icon: FileCheck,
    title: "Data handling",
    description: "Your data is processed but never used for training. Clear data retention policies."
  }
];

export function Security() {
  return (
    <section id="security" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Security & privacy first
            </h2>
            <p className="text-lg text-muted-foreground">
              Enterprise-grade security for SME budgets. We treat your data with the care it deserves.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {securityFeatures.map((feature) => (
              <Card key={feature.title} className="bg-background border-border/50 rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}