import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";
import { Quote } from "lucide-react";

export function ProductsTestimonials() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "What customers say",
      subtitle: "Real results from real teams.",
      testimonials: [
        {
          quote: "The Invoice OCR tool saves our accounting team 15 hours per week. It paid for itself in the first month.",
          author: "Maria Lindström",
          role: "CFO",
          company: "Nordic Logistics AB",
          metric: "15h/week saved",
        },
        {
          quote: "We screened 500 CVs in an afternoon instead of a full week. The quality rankings were spot-on.",
          author: "Johan Bergman",
          role: "Head of HR",
          company: "TechStart Sweden",
          metric: "90% faster hiring",
        },
        {
          quote: "The Meeting Transcriber captures everything. Our sales team never misses an action item anymore.",
          author: "Anna Eriksson",
          role: "Sales Director",
          company: "SaaS Nordic",
          metric: "Zero missed follow-ups",
        },
      ],
    },
    sv: {
      title: "Vad kunderna säger",
      subtitle: "Verkliga resultat från verkliga team.",
      testimonials: [
        {
          quote: "Faktura-OCR-verktyget sparar vårt bokföringsteam 15 timmar per vecka. Det betalade sig själv första månaden.",
          author: "Maria Lindström",
          role: "CFO",
          company: "Nordic Logistics AB",
          metric: "15h/vecka sparad",
        },
        {
          quote: "Vi granskade 500 CV:n på en eftermiddag istället för en hel vecka. Kvalitetsrankningarna var pricksäkra.",
          author: "Johan Bergman",
          role: "HR-chef",
          company: "TechStart Sweden",
          metric: "90% snabbare rekrytering",
        },
        {
          quote: "Mötestranskriberaren fångar allt. Vårt säljteam missar aldrig en åtgärdspunkt längre.",
          author: "Anna Eriksson",
          role: "Säljchef",
          company: "SaaS Nordic",
          metric: "Inga missade uppföljningar",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 hover:shadow-soft transition-shadow">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-border/50 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-primary">{testimonial.metric}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
