import { Button } from "@/components/ui/button";
import { Calendar, FileText } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface MobileCTAProps {
  onBookCall: () => void;
  onRequestPilot: () => void;
}

export function MobileCTA({ onBookCall, onRequestPilot }: MobileCTAProps) {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-lg border-t border-border p-4">
      <div className="flex gap-3">
        <Button 
          className="flex-1 h-12 rounded-xl font-semibold"
          onClick={onBookCall}
        >
          <Calendar className="mr-2 h-4 w-4" />
          {t.mobileCta.bookCall}
        </Button>
        <Button 
          variant="outline"
          className="flex-1 h-12 rounded-xl font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          onClick={onRequestPilot}
        >
          <FileText className="mr-2 h-4 w-4" />
          {t.mobileCta.freePilot}
        </Button>
      </div>
    </div>
  );
}