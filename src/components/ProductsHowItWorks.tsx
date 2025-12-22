import { Search, CreditCard, Rocket, RefreshCw } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Search, CreditCard, Rocket, RefreshCw];

export function ProductsHowItWorks() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "How to get started",
      subtitle: "From signup to production in minutes. Self-serve, no sales calls required.",
      steps: [
        {
          title: "Choose",
          description: "Browse our products and select the one that fits your needs.",
          duration: "2 min"
        },
        {
          title: "Try Free",
          description: "Start your free trial with real data. No credit card required.",
          duration: "Instant"
        },
        {
          title: "Deploy",
          description: "One-click deployment. Integrates with your existing tools.",
          duration: "5 min"
        },
        {
          title: "Scale",
          description: "Upgrade anytime. Pay only for what you use.",
          duration: "Anytime"
        }
      ],
    },
    sv: {
      title: "Så kommer du igång",
      subtitle: "Från registrering till produktion på några minuter. Självbetjäning, inga säljsamtal krävs.",
      steps: [
        {
          title: "Välj",
          description: "Bläddra bland våra produkter och välj den som passar dina behov.",
          duration: "2 min"
        },
        {
          title: "Prova gratis",
          description: "Starta din gratis provperiod med riktig data. Inget kreditkort krävs.",
          duration: "Direkt"
        },
        {
          title: "Driftsätt",
          description: "Ett-klicks driftsättning. Integrerar med dina befintliga verktyg.",
          duration: "5 min"
        },
        {
          title: "Skala",
          description: "Uppgradera när som helst. Betala endast för det du använder.",
          duration: "När som helst"
        }
      ],
    },
  };

  const t = content[language];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-8">
              {t.steps.map((step, index) => {
                const Icon = icons[index];
                return (
                  <div 
                    key={step.title} 
                    className="relative flex items-start gap-6 md:gap-8"
                  >
                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-background border-2 border-primary/20 flex items-center justify-center shadow-soft">
                      <Icon className="h-7 w-7 text-primary" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
