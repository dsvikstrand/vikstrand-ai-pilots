import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface PricingProps {
  onContact: () => void;
}

export function Pricing({ onContact }: PricingProps) {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.pricing.plans.map((plan, index) => {
            const isPopular = index === 1;
            return (
              <Card 
                key={plan.name} 
                className={`relative rounded-2xl ${
                  isPopular 
                    ? 'border-primary shadow-glow' 
                    : 'border-border/50'
                }`}
              >
                {isPopular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    {t.pricing.mostPopular}
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
                    className={`w-full rounded-xl ${isPopular ? '' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                    onClick={onContact}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          {t.pricing.customNote} <button onClick={onContact} className="text-primary hover:underline">{t.pricing.letsTalk}</button>.
        </p>
      </div>
    </section>
  );
}