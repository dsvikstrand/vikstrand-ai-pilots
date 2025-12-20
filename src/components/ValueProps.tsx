import { Clock, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Clock, Shield, TrendingUp];

export function ValueProps() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.valueProps.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.valueProps.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.valueProps.values.map((value, index) => {
            const Icon = icons[index];
            return (
              <Card key={value.title} className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}