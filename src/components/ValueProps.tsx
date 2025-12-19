import { Clock, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Clock,
    title: "Fast pilot, clear scope",
    description: "Production-ready in 1–3 weeks. We define success criteria upfront and deliver exactly what you need—no scope creep."
  },
  {
    icon: Shield,
    title: "Safe integration",
    description: "Least-privilege access, role-based permissions, and full audit trails. Your data stays under your control."
  },
  {
    icon: TrendingUp,
    title: "Measurable improvement",
    description: "Built-in evaluation metrics from day one. We measure quality, track usage, and iterate based on real results."
  }
];

export function ValueProps() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why companies choose us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not here to sell you a dream. We deliver working AI that proves its value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <Card key={value.title} className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}