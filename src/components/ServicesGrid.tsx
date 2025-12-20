import { services, type Service } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface ServicesGridProps {
  onServiceClick: (service: Service) => void;
}

export function ServicesGrid({ onServiceClick }: ServicesGridProps) {
  const { t, st } = useLanguage();

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">{t.services.badge}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const serviceT = st[service.slug as keyof typeof st];
            return (
              <Card 
                key={service.slug}
                className="group cursor-pointer bg-card border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden"
                onClick={() => onServiceClick(service)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {service.timeline}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {serviceT?.title || service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {serviceT?.oneLiner || service.oneLiner}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {(serviceT?.outcomes || service.outcomes).slice(0, 2).map((outcome, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    {t.services.learnMore}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}