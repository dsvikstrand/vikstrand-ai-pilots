import { 
  FileText, 
  Mic, 
  Users, 
  Mail, 
  TrendingDown, 
  MessageSquare,
  type LucideIcon
} from "lucide-react";

export interface Product {
  slug: string;
  title: string;
  tagline: string;
  features: string[];
  pricing: {
    type: "one-time" | "subscription";
    price: string;
    period?: string;
  };
  tryFreeAvailable: boolean;
  icon: LucideIcon;
  category: "traditional" | "creative";
}

export const products: Product[] = [
  {
    slug: "invoice-receipt-ocr",
    title: "Invoice & Receipt OCR",
    tagline: "Auto-extract data from invoices and receipts with 99% accuracy.",
    features: [
      "Batch upload support",
      "Multi-language recognition",
      "Export to Excel/CSV",
      "Fortnox integration ready",
      "99%+ accuracy guarantee"
    ],
    pricing: {
      type: "subscription",
      price: "990 SEK",
      period: "/month"
    },
    tryFreeAvailable: true,
    icon: FileText,
    category: "traditional"
  },
  {
    slug: "meeting-transcriber",
    title: "Meeting Transcriber",
    tagline: "Audio to transcript with AI-generated summaries and action items.",
    features: [
      "Swedish & English support",
      "Speaker identification",
      "Automatic action items",
      "Searchable archive",
      "Export to your tools"
    ],
    pricing: {
      type: "subscription",
      price: "1 490 SEK",
      period: "/month"
    },
    tryFreeAvailable: true,
    icon: Mic,
    category: "traditional"
  },
  {
    slug: "cv-screener",
    title: "CV Screener",
    tagline: "Ranked candidate summaries from batch CV uploads.",
    features: [
      "Bulk CV processing",
      "Custom criteria matching",
      "Ranking & scoring",
      "Skills extraction",
      "Bias-aware screening"
    ],
    pricing: {
      type: "subscription",
      price: "1 990 SEK",
      period: "/month"
    },
    tryFreeAvailable: true,
    icon: Users,
    category: "traditional"
  },
  {
    slug: "email-classifier",
    title: "Email Classifier & Auto-Responder",
    tagline: "Intelligent email categorization with smart auto-replies.",
    features: [
      "Multi-category classification",
      "Priority detection",
      "Auto-draft responses",
      "Outlook & Gmail integration",
      "Custom rules engine"
    ],
    pricing: {
      type: "subscription",
      price: "1 290 SEK",
      period: "/month"
    },
    tryFreeAvailable: true,
    icon: Mail,
    category: "traditional"
  },
  {
    slug: "churn-predictor",
    title: "Customer Churn Predictor",
    tagline: "Risk scoring from CRM data to retain your best customers.",
    features: [
      "CRM data integration",
      "Risk score dashboard",
      "Early warning alerts",
      "Retention recommendations",
      "Monthly trend reports"
    ],
    pricing: {
      type: "subscription",
      price: "2 490 SEK",
      period: "/month"
    },
    tryFreeAvailable: false,
    icon: TrendingDown,
    category: "creative"
  },
  {
    slug: "fortnox-chat",
    title: "Fortnox Chat Assistant",
    tagline: "Natural language queries for your Fortnox accounting data.",
    features: [
      "Plain Swedish queries",
      "Real-time Fortnox sync",
      "Financial insights",
      "Report generation",
      "Secure API connection"
    ],
    pricing: {
      type: "subscription",
      price: "1 990 SEK",
      period: "/month"
    },
    tryFreeAvailable: true,
    icon: MessageSquare,
    category: "creative"
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};
