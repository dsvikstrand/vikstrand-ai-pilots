import { Button } from "@/components/ui/button";
import { ArrowDown, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface ProductsHeroProps {
  onBrowseProducts: () => void;
}

export function ProductsHero({ onBrowseProducts }: ProductsHeroProps) {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "6 AI Products",
      headline1: "Production-Ready",
      headline2: "AI Tools",
      subheadline: "Self-serve products with transparent pricing. Start using immediately with free trials—no consultation needed.",
      ctaBrowse: "Browse Products",
      ctaCompare: "Compare All",
    },
    sv: {
      badge: "6 AI-produkter",
      headline1: "Produktionsklara",
      headline2: "AI-verktyg",
      subheadline: "Självbetjäningsprodukter med transparent prissättning. Börja använda direkt med gratis provperiod—ingen konsultation krävs.",
      ctaBrowse: "Bläddra produkter",
      ctaCompare: "Jämför alla",
    },
  };

  const t = content[language];

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-hero-bg">
      {/* Gradient mesh background */}
      <div 
        className="absolute inset-0 opacity-30 animate-gradient"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, hsl(217, 91%, 60%, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, hsl(280, 70%, 50%, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, hsl(217, 91%, 70%, 0.2) 0%, transparent 70%)
          `,
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            <ShoppingBag className="w-4 h-4" />
            {t.badge}
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-in">
            {t.headline1}
            <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.headline2}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {t.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              className="h-14 px-8 text-base font-semibold rounded-2xl shadow-glow hover:shadow-soft transition-all duration-300"
              onClick={onBrowseProducts}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              {t.ctaBrowse}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-14 px-8 text-base font-semibold rounded-2xl border-2 hover:bg-primary/5 transition-all duration-300"
              onClick={() => document.getElementById("products-comparison")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.ctaCompare}
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
