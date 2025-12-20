import { type Service } from "@/data/services";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Users, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestPilot: () => void;
}

export function ServiceModal({ service, isOpen, onClose, onRequestPilot }: ServiceModalProps) {
  const { t, st } = useLanguage();
  
  if (!service) return null;

  const serviceT = st[service.slug as keyof typeof st];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <service.icon className="h-6 w-6" />
            </div>
            <Badge variant="outline">{service.timeline}</Badge>
          </div>
          <DialogTitle className="text-2xl font-bold">{serviceT?.title || service.title}</DialogTitle>
          <DialogDescription className="text-base">
            {serviceT?.oneLiner || service.oneLiner}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Outcomes */}
          <div>
            <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
              <Zap className="h-4 w-4 text-primary" />
              {t.serviceModal.outcomes}
            </h4>
            <ul className="space-y-2">
              {(serviceT?.outcomes || service.outcomes).map((outcome, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
              <Check className="h-4 w-4 text-primary" />
              {t.serviceModal.whatYouGet}
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {(serviceT?.deliverables || service.deliverables).map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Integrations */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">{t.serviceModal.integratesWith}</h4>
            <div className="flex flex-wrap gap-2">
              {service.integrations.map((integration, i) => (
                <Badge key={i} variant="secondary" className="font-normal">
                  {integration}
                </Badge>
              ))}
            </div>
          </div>

          {/* Ideal for */}
          <div className="p-4 bg-muted/50 rounded-xl">
            <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
              <Users className="h-4 w-4 text-primary" />
              {t.serviceModal.idealFor}
            </h4>
            <p className="text-sm text-muted-foreground">{serviceT?.idealFor || service.idealFor}</p>
          </div>

          {/* Timeline */}
          <div className="p-4 border border-primary/20 bg-primary/5 rounded-xl">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="h-4 w-4 text-primary" />
              <span className="font-semibold text-foreground">{t.serviceModal.typicalTimeline}</span>
            </div>
            <p className="text-muted-foreground">{service.timeline} {t.serviceModal.fromKickoff}</p>
          </div>

          {/* CTA */}
          <Button 
            className="w-full h-12 text-base font-semibold rounded-xl"
            onClick={() => {
              onClose();
              onRequestPilot();
            }}
          >
            {serviceT?.ctaLabel || service.ctaLabel}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}