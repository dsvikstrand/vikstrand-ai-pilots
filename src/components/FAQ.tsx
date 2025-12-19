import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you train AI models on our data?",
    answer: "No. We use AI models through secure APIs with strict data handling policies. Your data is processed to generate responses but is never stored or used to train models. We can provide detailed data processing agreements on request."
  },
  {
    question: "What systems can you integrate with?",
    answer: "We integrate with most common business tools: Google Workspace, Microsoft 365 (SharePoint, OneDrive, Teams), Slack, major CRMs (HubSpot, Salesforce), SQL databases, ERPs, and many more. If you have a specific system, just ask."
  },
  {
    question: "How long does a typical pilot take?",
    answer: "Most pilots are delivered in 1–3 weeks. Simple solutions (document chat, basic monitoring) take 1–2 weeks. More complex integrations (CRM automation, multi-source RAG) typically take 2–3 weeks."
  },
  {
    question: "How do you measure quality and success?",
    answer: "Every solution includes built-in evaluation metrics. For Q&A systems, we track answer accuracy and citation quality. For automation, we measure time saved and error rates. We review metrics weekly during the pilot and monthly after deployment."
  },
  {
    question: "Can we start with something small?",
    answer: "Absolutely. In fact, we recommend it. Start with a single use case, prove the value, then expand. Our Starter package is designed exactly for this—minimal risk, clear outcomes."
  },
  {
    question: "What happens after the pilot?",
    answer: "You own the solution. We provide documentation, training, and handoff to your team. We offer ongoing support packages for monitoring, updates, and expansion, but there's no lock-in."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about working with us.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
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