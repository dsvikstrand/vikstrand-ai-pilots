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

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const dataSources = [
  { id: "google-drive", label: "Google Drive" },
  { id: "sharepoint", label: "SharePoint" },
  { id: "onedrive", label: "OneDrive" },
  { id: "sql", label: "SQL Database" },
  { id: "erp", label: "ERP System" },
  { id: "crm", label: "CRM" },
  { id: "slack-teams", label: "Slack/Teams" },
  { id: "other", label: "Other" },
];

const timelines = [
  { value: "1-2-weeks", label: "1–2 weeks" },
  { value: "1-month", label: "1 month" },
  { value: "3-months", label: "3+ months" },
];

const budgetRanges = [
  { value: "under-25k", label: "Under 25k SEK" },
  { value: "25k-50k", label: "25k–50k SEK" },
  { value: "50k-100k", label: "50k–100k SEK" },
  { value: "over-100k", label: "Over 100k SEK" },
  { value: "unsure", label: "Not sure yet" },
];

export function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const { toast } = useToast();
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
          title: "Request submitted!",
          description: result.message,
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
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
            <h3 className="text-2xl font-bold text-foreground mb-2">Thank you!</h3>
            <p className="text-muted-foreground mb-6">
              We've received your request and will be in touch within 24 hours.
            </p>
            <Button onClick={handleClose} className="rounded-xl">
              Close
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
          <DialogTitle className="text-2xl font-bold">Request a free AI pilot</DialogTitle>
          <DialogDescription>
            Tell us about your needs and we'll design a pilot that proves value fast.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="rounded-xl"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                required
                value={formData.company}
                onChange={e => setFormData(prev => ({ ...prev, company: e.target.value }))}
                className="rounded-xl"
                placeholder="Company name"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="rounded-xl"
                placeholder="you@company.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input
                id="role"
                value={formData.role}
                onChange={e => setFormData(prev => ({ ...prev, role: e.target.value }))}
                className="rounded-xl"
                placeholder="Your role"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="automationGoal">What do you want to automate? *</Label>
            <Textarea
              id="automationGoal"
              required
              value={formData.automationGoal}
              onChange={e => setFormData(prev => ({ ...prev, automationGoal: e.target.value }))}
              className="rounded-xl min-h-[100px]"
              placeholder="Describe the task or workflow you'd like to improve with AI..."
            />
          </div>

          <div className="space-y-3">
            <Label>Data sources you use</Label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {dataSources.map(ds => (
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
            <Label>Preferred timeline *</Label>
            <RadioGroup
              required
              value={formData.timeline}
              onValueChange={value => setFormData(prev => ({ ...prev, timeline: value }))}
              className="flex flex-wrap gap-4"
            >
              {timelines.map(tl => (
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
            <Label>Budget range (optional)</Label>
            <RadioGroup
              value={formData.budgetRange}
              onValueChange={value => setFormData(prev => ({ ...prev, budgetRange: value }))}
              className="flex flex-wrap gap-3"
            >
              {budgetRanges.map(br => (
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
            {isSubmitting ? "Submitting..." : "Submit request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}