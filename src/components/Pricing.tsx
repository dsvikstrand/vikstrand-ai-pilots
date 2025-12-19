import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingProps {
  onContact: () => void;
}

const plans = [
  {
    name: "Starter",
    price: "From 25k SEK",
    description: "Single AI solution pilot",
    features: [
      "1 AI solution",
      "Basic integrations",
      "2-week delivery",
      "30 days support",
      "Documentation"
    ],
    cta: "Start pilot",
    popular: false
  },
  {
    name: "Growth",
    price: "From 50k SEK",
    description: "Multiple solutions with deeper integration",
    features: [
      "2–3 AI solutions",
      "Advanced integrations",
      "3-week delivery",
      "90 days support",
      "Training sessions",
      "Usage analytics"
    ],
    cta: "Talk to us",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full AI transformation package",
    features: [
      "Unlimited solutions",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantees",
      "On-site workshops",
      "Priority roadmap"
    ],
    cta: "Contact sales",
    popular: false
  }
];

export function Pricing({ onContact }: PricingProps) {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pay for outcomes, not promises. Start with a pilot and scale when you see results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative rounded-2xl ${
                plan.popular 
                  ? 'border-primary shadow-glow' 
                  : 'border-border/50'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most popular
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full rounded-xl ${plan.popular ? '' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                  onClick={onContact}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Need ongoing consulting or a custom arrangement? <button onClick={onContact} className="text-primary hover:underline">Let's talk</button>.
        </p>
      </div>
    </section>
  );
}