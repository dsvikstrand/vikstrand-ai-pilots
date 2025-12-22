import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";

export function ProductsFAQ() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Product FAQ",
      subtitle: "Common questions about our products.",
      items: [
        {
          question: "Can I cancel anytime?",
          answer: "Yes, all our subscriptions can be cancelled with one click at any time. No cancellation fees, no questions asked. Your access continues until the end of your current billing period."
        },
        {
          question: "How does the free trial work?",
          answer: "Most products offer a 14-day free trial with full functionality. No credit card required to start. You can process real data during the trial to evaluate the product properly."
        },
        {
          question: "What integrations are included?",
          answer: "Each product comes with different integrations. Common ones include Google Workspace, Microsoft 365, Slack, and various CRMs. Check individual product pages for specific integrations."
        },
        {
          question: "Is my data secure?",
          answer: "Absolutely. All data is encrypted in transit and at rest. We process data but never use it for training AI models. You own your data and can export or delete it anytime."
        },
        {
          question: "Can I upgrade or downgrade later?",
          answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the next billing cycle. Need custom limits? Contact us for enterprise options."
        },
        {
          question: "Do you offer volume discounts?",
          answer: "Yes, for larger deployments we offer custom pricing. Contact us for enterprise plans with volume discounts, SLA guarantees, and dedicated support."
        },
      ],
    },
    sv: {
      title: "Produkt FAQ",
      subtitle: "Vanliga frågor om våra produkter.",
      items: [
        {
          question: "Kan jag avsluta när som helst?",
          answer: "Ja, alla våra prenumerationer kan avslutas med ett klick när som helst. Inga avslutningsavgifter, inga frågor. Din åtkomst fortsätter till slutet av din nuvarande faktureringsperiod."
        },
        {
          question: "Hur fungerar den gratis provperioden?",
          answer: "De flesta produkter erbjuder 14 dagars gratis provperiod med full funktionalitet. Inget kreditkort krävs för att börja. Du kan bearbeta riktig data under provperioden för att utvärdera produkten ordentligt."
        },
        {
          question: "Vilka integrationer ingår?",
          answer: "Varje produkt kommer med olika integrationer. Vanliga inkluderar Google Workspace, Microsoft 365, Slack och olika CRM-system. Kolla enskilda produktsidor för specifika integrationer."
        },
        {
          question: "Är min data säker?",
          answer: "Absolut. All data krypteras under överföring och i vila. Vi bearbetar data men använder den aldrig för att träna AI-modeller. Du äger din data och kan exportera eller radera den när som helst."
        },
        {
          question: "Kan jag uppgradera eller nedgradera senare?",
          answer: "Ja, du kan ändra din plan när som helst. Uppgraderingar träder i kraft omedelbart, och nedgraderingar gäller vid nästa faktureringscykel. Behöver du anpassade gränser? Kontakta oss för företagsalternativ."
        },
        {
          question: "Erbjuder ni volymrabatter?",
          answer: "Ja, för större implementeringar erbjuder vi anpassad prissättning. Kontakta oss för företagsplaner med volymrabatter, SLA-garantier och dedikerad support."
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.subtitle}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {t.items.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border/50 rounded-xl px-6 data-[state=open]:shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
