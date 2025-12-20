import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { submitLead, type LeadPayload } from "@/lib/leadSubmission";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<LeadPayload>({
    name: "",
    company: "",
    email: "",
    role: "",
    automationGoal: "",
    dataSources: [],
    timeline: "",
    budgetRange: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitLead(formData);
      if (result.success) {
        setIsSuccess(true);
        toast({
          title: t.leadForm.toastSuccess,
          description: result.message,
        });
      }
    } catch (error) {
      toast({
        title: t.leadForm.toastError,
        description: t.leadForm.toastErrorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      company: "",
      email: "",
      role: "",
      automationGoal: "",
      dataSources: [],
      timeline: "",
      budgetRange: "",
    });
    onClose();
  };

  const toggleDataSource = (id: string) => {
    setFormData(prev => ({
      ...prev,
      dataSources: prev.dataSources.includes(id)
        ? prev.dataSources.filter(ds => ds !== id)
        : [...prev.dataSources, id]
    }));
  };

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-md rounded-2xl">
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{t.leadForm.successTitle}</h3>
            <p className="text-muted-foreground mb-6">
              {t.leadForm.successMessage}
            </p>
            <Button onClick={handleClose} className="rounded-xl">
              {t.leadForm.closeButton}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{t.leadForm.title}</DialogTitle>
          <DialogDescription>
            {t.leadForm.subtitle}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t.leadForm.nameLabel} *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="rounded-xl"
                placeholder={t.leadForm.namePlaceholder}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">{t.leadForm.companyLabel} *</Label>
              <Input
                id="company"
                required
                value={formData.company}
                onChange={e => setFormData(prev => ({ ...prev, company: e.target.value }))}
                className="rounded-xl"
                placeholder={t.leadForm.companyPlaceholder}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t.leadForm.emailLabel} *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="rounded-xl"
                placeholder={t.leadForm.emailPlaceholder}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">{t.leadForm.roleLabel}</Label>
              <Input
                id="role"
                value={formData.role}
                onChange={e => setFormData(prev => ({ ...prev, role: e.target.value }))}
                className="rounded-xl"
                placeholder={t.leadForm.rolePlaceholder}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="automationGoal">{t.leadForm.automationGoalLabel} *</Label>
            <Textarea
              id="automationGoal"
              required
              value={formData.automationGoal}
              onChange={e => setFormData(prev => ({ ...prev, automationGoal: e.target.value }))}
              className="rounded-xl min-h-[100px]"
              placeholder={t.leadForm.automationGoalPlaceholder}
            />
          </div>

          <div className="space-y-3">
            <Label>{t.leadForm.dataSourcesLabel}</Label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {t.leadForm.dataSources.map(ds => (
                <div key={ds.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={ds.id}
                    checked={formData.dataSources.includes(ds.id)}
                    onCheckedChange={() => toggleDataSource(ds.id)}
                  />
                  <label htmlFor={ds.id} className="text-sm text-muted-foreground cursor-pointer">
                    {ds.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label>{t.leadForm.timelineLabel} *</Label>
            <RadioGroup
              required
              value={formData.timeline}
              onValueChange={value => setFormData(prev => ({ ...prev, timeline: value }))}
              className="flex flex-wrap gap-4"
            >
              {t.leadForm.timelines.map(tl => (
                <div key={tl.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={tl.value} id={tl.value} />
                  <label htmlFor={tl.value} className="text-sm text-muted-foreground cursor-pointer">
                    {tl.label}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label>{t.leadForm.budgetLabel}</Label>
            <RadioGroup
              value={formData.budgetRange}
              onValueChange={value => setFormData(prev => ({ ...prev, budgetRange: value }))}
              className="flex flex-wrap gap-3"
            >
              {t.leadForm.budgetRanges.map(br => (
                <div key={br.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={br.value} id={br.value} />
                  <label htmlFor={br.value} className="text-sm text-muted-foreground cursor-pointer">
                    {br.label}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 text-base font-semibold rounded-xl"
            disabled={isSubmitting}
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isSubmitting ? t.leadForm.submitting : t.leadForm.submitButton}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}