import { Zap, CreditCard, TestTube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Zap, CreditCard, TestTube];

export function ProductsValueProps() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Why choose our products",
      subtitle: "Built for teams who want results without the wait.",
      values: [
        {
          title: "Instant Setup",
          description: "No consultations, no waiting. Sign up and start using immediately. Most products are ready in under 5 minutes."
        },
        {
          title: "Transparent Pricing",
          description: "What you see is what you pay. No hidden fees, no surprise invoices. Cancel anytime with one click."
        },
        {
          title: "Free Trials",
          description: "Test with your real data before committing. No credit card required to start your trial."
        }
      ],
    },
    sv: {
      title: "Varför välja våra produkter",
      subtitle: "Byggda för team som vill ha resultat utan att vänta.",
      values: [
        {
          title: "Omedelbar setup",
          description: "Inga konsultationer, ingen väntan. Registrera dig och börja använda direkt. De flesta produkter är redo på under 5 minuter."
        },
        {
          title: "Transparent prissättning",
          description: "Det du ser är det du betalar. Inga dolda avgifter, inga överraskningsfakturor. Avsluta när som helst med ett klick."
        },
        {
          title: "Gratis provperioder",
          description: "Testa med din riktiga data innan du bestämmer dig. Inget kreditkort krävs för att starta din provperiod."
        }
      ],
    },
  };

  const t = content[language];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.values.map((value, index) => {
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
