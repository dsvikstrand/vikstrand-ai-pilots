import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/i18n/LanguageContext";
import { 
  Upload, 
  FileText, 
  Play, 
  Pause, 
  Send,
  CheckCircle,
  User,
  Clock,
  Mail,
  AlertTriangle,
  TrendingDown,
  MessageSquare
} from "lucide-react";

interface ProductDemoProps {
  productSlug: string;
}

// Invoice OCR Demo
function InvoiceOCRDemo() {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  const { language } = useLanguage();

  const handleDrop = () => {
    setIsDragging(false);
    setIsProcessed(true);
  };

  const extractedData = {
    vendor: "IKEA AB",
    invoiceNo: "INV-2024-00847",
    date: "2024-01-15",
    amount: "4 590 SEK",
    vat: "918 SEK",
  };

  return (
    <div className="space-y-4">
      <div 
        className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors ${
          isDragging ? "border-primary bg-primary/5" : "border-border"
        }`}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => { e.preventDefault(); handleDrop(); }}
        onClick={() => setIsProcessed(true)}
      >
        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          {language === "en" ? "Drop invoice image or click to try demo" : "Släpp fakturabild eller klicka för demo"}
        </p>
      </div>

      {isProcessed && (
        <Card className="border-primary/20 bg-primary/5 animate-fade-in">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-foreground">
                {language === "en" ? "Data extracted!" : "Data extraherad!"}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {Object.entries(extractedData).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-muted-foreground capitalize">{key}:</span>
                  <span className="font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Meeting Transcriber Demo
function MeetingTranscriberDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const { language } = useLanguage();

  const handlePlay = () => {
    setIsPlaying(true);
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setIsPlaying(false);
          return 100;
        }
        return p + 20;
      });
    }, 500);
  };

  const transcript = [
    { speaker: "Anna", text: language === "en" ? "Let's discuss the Q4 budget..." : "Låt oss diskutera Q4-budgeten..." },
    { speaker: "Erik", text: language === "en" ? "I think we need to increase marketing spend." : "Jag tror vi behöver öka marknadsföringsbudgeten." },
  ];

  const actionItems = language === "en" 
    ? ["Review marketing budget proposal", "Schedule follow-up meeting"] 
    : ["Granska marknadsföringsbudgetförslag", "Boka uppföljningsmöte"];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
        <Button 
          size="sm" 
          variant="outline" 
          className="rounded-full w-10 h-10 p-0"
          onClick={handlePlay}
          disabled={isPlaying}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <div className="flex-1">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <span className="text-xs text-muted-foreground">0:30</span>
      </div>

      {progress > 0 && (
        <div className="space-y-3 animate-fade-in">
          <div className="space-y-2">
            {transcript.map((line, i) => (
              <div key={i} className="text-sm">
                <span className="font-medium text-primary">{line.speaker}:</span>{" "}
                <span className="text-muted-foreground">{line.text}</span>
              </div>
            ))}
          </div>
          
          {progress >= 100 && (
            <Card className="border-primary/20">
              <CardContent className="p-3">
                <h5 className="text-xs font-semibold text-foreground mb-2">
                  {language === "en" ? "Action Items" : "Åtgärdspunkter"}
                </h5>
                <ul className="space-y-1">
                  {actionItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}

// CV Screener Demo
function CVScreenerDemo() {
  const [isProcessed, setIsProcessed] = useState(false);
  const { language } = useLanguage();

  const candidates = [
    { name: "Maria Andersson", score: 94, skills: ["Python", "ML", "SQL"], match: "Excellent" },
    { name: "Johan Svensson", score: 82, skills: ["Java", "AWS", "Docker"], match: "Good" },
    { name: "Lisa Eriksson", score: 71, skills: ["JavaScript", "React"], match: "Fair" },
  ];

  return (
    <div className="space-y-4">
      <Button 
        variant="outline" 
        className="w-full"
        onClick={() => setIsProcessed(true)}
      >
        <Upload className="h-4 w-4 mr-2" />
        {language === "en" ? "Upload sample CVs" : "Ladda upp exempel-CV:n"}
      </Button>

      {isProcessed && (
        <div className="space-y-2 animate-fade-in">
          {candidates.map((candidate, i) => (
            <Card key={i} className="border-border/50">
              <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{candidate.name}</p>
                    <div className="flex gap-1">
                      {candidate.skills.slice(0, 2).map(skill => (
                        <Badge key={skill} variant="secondary" className="text-[10px] px-1 py-0">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary">{candidate.score}%</p>
                  <p className="text-[10px] text-muted-foreground">{candidate.match}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

// Email Classifier Demo
function EmailClassifierDemo() {
  const [selectedEmail, setSelectedEmail] = useState<number | null>(null);
  const { language } = useLanguage();

  const emails = [
    { 
      subject: language === "en" ? "Urgent: Server down!" : "Akut: Server nere!", 
      category: "Support", 
      priority: "High",
      response: language === "en" 
        ? "Thank you for reporting this. Our team is investigating..." 
        : "Tack för att du rapporterar detta. Vårt team undersöker..."
    },
    { 
      subject: language === "en" ? "Invoice #4521" : "Faktura #4521", 
      category: "Billing", 
      priority: "Medium",
      response: language === "en"
        ? "We've received your invoice inquiry. Processing time is 2-3 business days..."
        : "Vi har mottagit din fakturaförfrågan. Handläggningstiden är 2-3 arbetsdagar..."
    },
    { 
      subject: language === "en" ? "Partnership opportunity" : "Partnerskapsmöjlighet", 
      category: "Sales", 
      priority: "Low",
      response: language === "en"
        ? "Thank you for reaching out about a partnership. A team member will review..."
        : "Tack för att du hör av dig angående partnerskap. En teammedlem granskar..."
    },
  ];

  return (
    <div className="space-y-2">
      {emails.map((email, i) => (
        <Card 
          key={i} 
          className={`cursor-pointer transition-all ${
            selectedEmail === i ? "border-primary shadow-sm" : "border-border/50 hover:border-border"
          }`}
          onClick={() => setSelectedEmail(i)}
        >
          <CardContent className="p-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-foreground line-clamp-1">{email.subject}</span>
              </div>
              <div className="flex gap-1 flex-shrink-0">
                <Badge variant="outline" className="text-[10px] px-1">
                  {email.category}
                </Badge>
                <Badge 
                  variant={email.priority === "High" ? "destructive" : "secondary"} 
                  className="text-[10px] px-1"
                >
                  {email.priority}
                </Badge>
              </div>
            </div>
            
            {selectedEmail === i && (
              <div className="mt-3 pt-3 border-t border-border/50 animate-fade-in">
                <p className="text-xs text-muted-foreground mb-2">
                  {language === "en" ? "Auto-generated response:" : "Autogenererat svar:"}
                </p>
                <p className="text-xs text-foreground bg-muted/50 p-2 rounded">
                  {email.response}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Churn Predictor Demo
function ChurnPredictorDemo() {
  const { language } = useLanguage();

  const customers = [
    { name: "Acme Corp", risk: 85, factor: language === "en" ? "No login in 45 days" : "Ingen inloggning på 45 dagar", trend: "up" },
    { name: "TechStart AB", risk: 62, factor: language === "en" ? "Reduced usage -30%" : "Minskad användning -30%", trend: "up" },
    { name: "Nordic Solutions", risk: 23, factor: language === "en" ? "Active, engaged" : "Aktiv, engagerad", trend: "down" },
  ];

  return (
    <div className="space-y-2">
      {customers.map((customer, i) => (
        <Card key={i} className="border-border/50">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">{customer.name}</span>
              <div className="flex items-center gap-1">
                {customer.risk > 60 ? (
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                ) : (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                )}
                <span className={`text-sm font-bold ${customer.risk > 60 ? "text-destructive" : "text-green-500"}`}>
                  {customer.risk}%
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{customer.factor}</span>
              <TrendingDown className={`h-3 w-3 ${customer.trend === "up" ? "text-destructive rotate-180" : "text-green-500"}`} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Fortnox Chat Demo
function FortnoxChatDemo() {
  const [messages, setMessages] = useState<{role: string; text: string}[]>([]);
  const [inputValue, setInputValue] = useState("");
  const { language } = useLanguage();

  const suggestedQueries = language === "en" 
    ? ["What were my sales last month?", "Show unpaid invoices", "Profit margin this quarter?"]
    : ["Vad var min försäljning förra månaden?", "Visa obetalda fakturor", "Vinstmarginal detta kvartal?"];

  const handleSend = (query: string) => {
    const userMessage = { role: "user", text: query };
    const aiResponse = { 
      role: "ai", 
      text: language === "en" 
        ? `Based on your Fortnox data: Your total sales last month were 245,000 SEK, up 12% from the previous month.`
        : `Baserat på din Fortnox-data: Din totala försäljning förra månaden var 245 000 SEK, upp 12% från föregående månad.`
    };
    setMessages([userMessage, aiResponse]);
    setInputValue("");
  };

  return (
    <div className="space-y-3">
      <div className="min-h-[80px] bg-muted/30 rounded-xl p-3">
        {messages.length === 0 ? (
          <div className="flex flex-wrap gap-1">
            {suggestedQueries.map((query, i) => (
              <Button 
                key={i} 
                variant="outline" 
                size="sm" 
                className="text-xs h-7"
                onClick={() => handleSend(query)}
              >
                {query}
              </Button>
            ))}
          </div>
        ) : (
          <div className="space-y-2 animate-fade-in">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-2 rounded-lg text-xs ${
                  msg.role === "user" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-background border border-border"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={language === "en" ? "Ask about your finances..." : "Fråga om din ekonomi..."}
          className="flex-1 h-9 px-3 text-sm rounded-lg border border-input bg-background"
          onKeyDown={(e) => e.key === "Enter" && inputValue && handleSend(inputValue)}
        />
        <Button size="sm" className="h-9 px-3" onClick={() => inputValue && handleSend(inputValue)}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export function ProductDemo({ productSlug }: ProductDemoProps) {
  const { language } = useLanguage();
  
  const demoTitle = language === "en" ? "Try it yourself" : "Prova själv";

  const demoComponents: Record<string, JSX.Element> = {
    "invoice-receipt-ocr": <InvoiceOCRDemo />,
    "meeting-transcriber": <MeetingTranscriberDemo />,
    "cv-screener": <CVScreenerDemo />,
    "email-classifier": <EmailClassifierDemo />,
    "churn-predictor": <ChurnPredictorDemo />,
    "fortnox-chat": <FortnoxChatDemo />,
  };

  const DemoComponent = demoComponents[productSlug];

  if (!DemoComponent) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4 text-primary" />
        <h4 className="font-semibold text-foreground">{demoTitle}</h4>
        <Badge variant="outline" className="text-xs">Demo</Badge>
      </div>
      {DemoComponent}
    </div>
  );
}
