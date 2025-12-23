import { type Product } from "@/data/products";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Target, Briefcase, Sparkles, Lightbulb, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { productTranslations } from "@/i18n/translations";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

// Product descriptions with use cases, applications, benefits, and tips
const productDescriptions = {
  en: {
    "invoice-ocr": {
      useCases: ["Monthly bookkeeping", "Expense reports", "Audit preparation", "VAT reconciliation"],
      applications: "Upload 100+ receipts and get structured data in minutes. Auto-extract vendor, amount, date, VAT, and more. Perfect for accountants and finance teams who want to eliminate manual data entry.",
      benefits: ["Eliminates manual data entry", "Reduces errors by 95%", "Saves 10+ hours per month", "Supports Swedish receipts with moms extraction"],
      idealFor: "Finance teams, accountants, small business owners, and anyone drowning in receipts and invoices."
    },
    "meeting-transcriber": {
      useCases: ["Board meetings", "Sales calls", "Team standups", "Customer interviews"],
      applications: "Record a 1-hour meeting and get a searchable transcript with AI-generated summary and action items in under 5 minutes. Never miss key decisions or forget who promised what.",
      benefits: ["Never miss key decisions", "Hold people accountable", "Create searchable meeting archive", "Auto-extract action items"],
      idealFor: "Project managers, team leads, sales professionals, and executives who attend multiple meetings daily."
    },
    "cv-screener": {
      useCases: ["Bulk hiring campaigns", "Graduate recruitment", "Internal mobility", "Contractor sourcing"],
      applications: "Upload 200 CVs and get a ranked shortlist in minutes, not days. Define custom criteria like '5+ years Python, leadership experience' and let AI do the heavy lifting.",
      benefits: ["Reduces time-to-hire by 70%", "Removes unconscious bias", "Focuses on skills, not formatting", "Handles any CV format"],
      idealFor: "HR teams, recruiters, hiring managers, and startups scaling their team quickly."
    },
    "email-classifier": {
      useCases: ["Customer support inbox", "Sales lead qualification", "Shared mailboxes", "Complaint handling"],
      applications: "Automatically categorize incoming emails by urgency and type. Route support tickets to the right team, prioritize hot sales leads, and get AI-drafted responses ready to send.",
      benefits: ["24/7 response capability", "Consistent brand tone", "Faster resolution times", "Reduced inbox overwhelm"],
      idealFor: "Support teams, sales departments, and anyone managing high-volume email communication."
    },
    "churn-predictor": {
      useCases: ["SaaS retention", "Subscription businesses", "B2B account management", "Customer success"],
      applications: "Identify at-risk customers before they leave. See which accounts show warning signs and trigger proactive retention campaigns. It's 5x cheaper to retain than acquire.",
      benefits: ["Early warning system", "Data-driven retention", "Prioritize outreach efforts", "Reduce churn by up to 30%"],
      idealFor: "Customer success managers, SaaS founders, and subscription business owners focused on retention."
    },
    "fortnox-chat": {
      useCases: ["Quick financial lookups", "Report generation", "Ad-hoc queries", "Month-end reviews"],
      applications: "Ask questions in plain Swedish or English like 'What were our sales last month?' or 'Show me unpaid invoices over 30 days' and get instant answers from your Fortnox data.",
      benefits: ["No more digging through reports", "Instant insights", "Natural language queries", "Always up-to-date answers"],
      idealFor: "CFOs, accountants, business owners, and anyone who needs quick answers from their Fortnox data."
    }
  },
  sv: {
    "invoice-ocr": {
      useCases: ["Månadsavslut", "Kvittohantering", "Revisionsförberedelse", "Momsavstämning"],
      applications: "Ladda upp 100+ kvitton och få strukturerad data på minuter. Auto-extrahera leverantör, belopp, datum, moms och mer. Perfekt för ekonomer och finansteam som vill eliminera manuell datainmatning.",
      benefits: ["Eliminerar manuell datainmatning", "Minskar fel med 95%", "Sparar 10+ timmar per månad", "Stöder svenska kvitton med momsutläsning"],
      idealFor: "Ekonomiteam, revisorer, småföretagare och alla som drunknar i kvitton och fakturor."
    },
    "meeting-transcriber": {
      useCases: ["Styrelsemöten", "Säljsamtal", "Dagliga standups", "Kundintervjuer"],
      applications: "Spela in ett 1-timmes möte och få en sökbar transkription med AI-genererad sammanfattning och åtgärdspunkter på under 5 minuter. Missa aldrig viktiga beslut.",
      benefits: ["Missa aldrig viktiga beslut", "Håll folk ansvariga", "Skapa sökbart mötesarkiv", "Auto-extrahera åtgärdspunkter"],
      idealFor: "Projektledare, teamledare, säljare och chefer som deltar i flera möten dagligen."
    },
    "cv-screener": {
      useCases: ["Massrekrytering", "Nyutexaminerade", "Intern rörlighet", "Konsultsökning"],
      applications: "Ladda upp 200 CV:n och få en rankad kortlista på minuter, inte dagar. Definiera egna kriterier som '5+ år Python, ledarerfarenhet' och låt AI göra jobbet.",
      benefits: ["Minskar tid-till-anställning med 70%", "Tar bort omedveten bias", "Fokuserar på kompetens", "Hanterar alla CV-format"],
      idealFor: "HR-team, rekryterare, anställande chefer och startups som skalar snabbt."
    },
    "email-classifier": {
      useCases: ["Kundsupport-inbox", "Säljleads-kvalificering", "Delade brevlådor", "Klagomålshantering"],
      applications: "Kategorisera inkommande mail automatiskt efter brådska och typ. Dirigera supportärenden till rätt team, prioritera heta säljleads och få AI-utkast till svar.",
      benefits: ["24/7 svarskapacitet", "Konsekvent varumärkeston", "Snabbare lösningstider", "Minskad inbox-överväldigande"],
      idealFor: "Supportteam, säljavdelningar och alla som hanterar högvolym e-postkommunikation."
    },
    "churn-predictor": {
      useCases: ["SaaS-retention", "Prenumerationsföretag", "B2B-kontohantering", "Kundframgång"],
      applications: "Identifiera riskfyllda kunder innan de lämnar. Se vilka konton som visar varningssignaler och trigga proaktiva behållningskampanjer.",
      benefits: ["Tidigt varningssystem", "Datadriven retention", "Prioritera uppsökande insatser", "Minska churn med upp till 30%"],
      idealFor: "Customer Success-chefer, SaaS-grundare och prenumerationsföretagare fokuserade på retention."
    },
    "fortnox-chat": {
      useCases: ["Snabba finansiella uppslag", "Rapportgenerering", "Ad-hoc-frågor", "Månadsavslut"],
      applications: "Ställ frågor på vanlig svenska som 'Vad var vår försäljning förra månaden?' eller 'Visa obetalda fakturor över 30 dagar' och få omedelbara svar från din Fortnox-data.",
      benefits: ["Slipp gräva i rapporter", "Omedelbara insikter", "Naturligt språk", "Alltid uppdaterade svar"],
      idealFor: "CFO:er, ekonomer, företagare och alla som behöver snabba svar från sin Fortnox-data."
    }
  }
};

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { t, language } = useLanguage();
  
  if (!product) return null;

  const pt = productTranslations[language];
  const productT = pt[product.slug as keyof typeof pt];
  const descriptions = productDescriptions[language][product.slug as keyof typeof productDescriptions.en];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <product.icon className="h-6 w-6" />
            </div>
            <Badge variant={product.category === "creative" ? "default" : "secondary"}>
              {product.category === "creative" ? "AI-Powered" : "Traditional"}
            </Badge>
          </div>
          <DialogTitle className="text-2xl font-bold">{productT?.title || product.title}</DialogTitle>
          <DialogDescription className="text-base">
            {productT?.tagline || product.tagline}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Use Cases */}
          <div>
            <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
              <Target className="h-4 w-4 text-primary" />
              {language === "en" ? "Use Cases" : "Användningsområden"}
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {descriptions?.useCases.map((useCase, i) => (
                <li key={i} className="text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
                  {useCase}
                </li>
              ))}
            </ul>
          </div>

          {/* Practical Applications */}
          <div>
            <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
              <Briefcase className="h-4 w-4 text-primary" />
              {language === "en" ? "How It Works" : "Så fungerar det"}
            </h4>
            <p className="text-muted-foreground">{descriptions?.applications}</p>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
              <Sparkles className="h-4 w-4 text-primary" />
              {language === "en" ? "Key Benefits" : "Viktiga fördelar"}
            </h4>
            <ul className="space-y-2">
              {descriptions?.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal For */}
          <div className="p-4 bg-muted/50 rounded-xl">
            <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
              <Users className="h-4 w-4 text-primary" />
              {language === "en" ? "Ideal For" : "Perfekt för"}
            </h4>
            <p className="text-sm text-muted-foreground">{descriptions?.idealFor}</p>
          </div>

          {/* Pricing */}
          <div className="p-4 border border-primary/20 bg-primary/5 rounded-xl text-center">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-3xl font-bold text-foreground">{product.pricing.price}</span>
              {product.pricing.period && (
                <span className="text-muted-foreground">{product.pricing.period}</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {product.pricing.type === "subscription" ? t.products.subscriptionNote : t.products.oneTimeNote}
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
              <Lightbulb className="h-4 w-4 text-primary" />
              {t.products.features}
            </h4>
            <ul className="space-y-2">
              {(productT?.features || product.features).map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <Button 
              className="w-full h-12 text-base font-semibold rounded-xl"
              onClick={onClose}
            >
              {t.products.buyNow}
            </Button>
            {product.tryFreeAvailable && (
              <Button 
                variant="outline"
                className="w-full h-12 text-base font-semibold rounded-xl"
                onClick={onClose}
              >
                {t.products.tryFree}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
