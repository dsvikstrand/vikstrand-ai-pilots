import { 
  Database, 
  BookOpen, 
  FileText, 
  Mail, 
  Bell, 
  Eye, 
  TrendingDown, 
  PenTool, 
  Users, 
  FileSearch,
  type LucideIcon
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  oneLiner: string;
  outcomes: string[];
  integrations: string[];
  timeline: string;
  idealFor: string;
  deliverables: string[];
  ctaLabel: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    slug: "talk-to-your-data",
    title: "Talk to Your Data",
    oneLiner: "Ask questions in plain language, get SQL queries and charts instantly.",
    outcomes: [
      "90% faster insights vs manual SQL",
      "Self-serve analytics for non-technical staff",
      "Automatic visualization of results"
    ],
    integrations: ["PostgreSQL", "MySQL", "BigQuery", "Snowflake", "Excel exports"],
    timeline: "1–2 weeks",
    idealFor: "Finance teams, operations managers, and analysts who need quick answers without writing code.",
    deliverables: [
      "Natural language query interface",
      "Auto-generated SQL with explanation",
      "Interactive charts and tables",
      "Query history and favorites"
    ],
    ctaLabel: "Get data answers",
    icon: Database
  },
  {
    slug: "internal-knowledge-assistant",
    title: "Internal Knowledge Assistant",
    oneLiner: "RAG-powered chatbot that answers from your docs with citations.",
    outcomes: [
      "70% reduction in repeated questions",
      "Instant policy and procedure lookup",
      "Traceable answers with source links"
    ],
    integrations: ["SharePoint", "Confluence", "Notion", "Google Drive", "Internal wikis"],
    timeline: "2–3 weeks",
    idealFor: "HR, legal, and operations teams drowning in documentation requests.",
    deliverables: [
      "Conversational chat interface",
      "Source citations for every answer",
      "Document ingestion pipeline",
      "Feedback loop for quality improvement"
    ],
    ctaLabel: "Deploy your assistant",
    icon: BookOpen
  },
  {
    slug: "document-chat",
    title: "PDF & Document Chat",
    oneLiner: "Upload documents, extract key info, and ask questions.",
    outcomes: [
      "Hours of reading → minutes of Q&A",
      "Extract tables, figures, and key points",
      "Compare multiple documents at once"
    ],
    integrations: ["PDF", "Word", "PowerPoint", "Scanned documents (OCR)"],
    timeline: "1–2 weeks",
    idealFor: "Legal, procurement, and research teams processing high volumes of documents.",
    deliverables: [
      "Drag-and-drop upload interface",
      "Multi-document comparison",
      "Structured data extraction",
      "Export summaries to your tools"
    ],
    ctaLabel: "Chat with your docs",
    icon: FileText
  },
  {
    slug: "meeting-email-assistant",
    title: "Meeting & Email Assistant",
    oneLiner: "Automatic summaries, action items, follow-ups, and CRM notes.",
    outcomes: [
      "Save 5+ hours/week on admin tasks",
      "Never miss an action item",
      "Auto-populate CRM after every call"
    ],
    integrations: ["Zoom", "Teams", "Google Meet", "Gmail", "Outlook", "HubSpot", "Salesforce"],
    timeline: "2–3 weeks",
    idealFor: "Sales teams, account managers, and executives with meeting-heavy calendars.",
    deliverables: [
      "Real-time transcription",
      "AI-generated summaries",
      "Action item extraction",
      "CRM integration for auto-logging"
    ],
    ctaLabel: "Automate meetings",
    icon: Mail
  },
  {
    slug: "brand-monitoring",
    title: "Brand Monitoring",
    oneLiner: "Real-time alerts and weekly digests on brand mentions.",
    outcomes: [
      "Catch PR issues within minutes",
      "Track sentiment trends over time",
      "Competitive share of voice analysis"
    ],
    integrations: ["News sites", "Social media", "Review platforms", "Forums", "Slack/Teams alerts"],
    timeline: "1–2 weeks",
    idealFor: "Marketing teams and PR managers who need to stay ahead of the conversation.",
    deliverables: [
      "Real-time alert system",
      "Weekly summary reports",
      "Sentiment analysis dashboard",
      "Competitor comparison"
    ],
    ctaLabel: "Monitor your brand",
    icon: Bell
  },
  {
    slug: "competitor-tracker",
    title: "Competitor Tracker",
    oneLiner: "Automated tracking of competitor changes with briefing reports.",
    outcomes: [
      "Never miss a competitor move",
      "Weekly competitive intelligence briefs",
      "Track pricing, features, and messaging"
    ],
    integrations: ["Competitor websites", "Job postings", "Press releases", "Social media", "SEC filings"],
    timeline: "2–3 weeks",
    idealFor: "Product managers, strategists, and executives who need competitive awareness.",
    deliverables: [
      "Competitor change detection",
      "Automated briefing reports",
      "Feature comparison matrix",
      "Alert system for key changes"
    ],
    ctaLabel: "Track competitors",
    icon: Eye
  },
  {
    slug: "price-monitoring",
    title: "Price Monitoring",
    oneLiner: "Track competitor and supplier pricing with instant alerts.",
    outcomes: [
      "React to price changes in hours, not weeks",
      "Optimize margins with market data",
      "Historical price trend analysis"
    ],
    integrations: ["E-commerce platforms", "Supplier portals", "Marketplaces", "Internal pricing systems"],
    timeline: "1–2 weeks",
    idealFor: "E-commerce teams, procurement, and pricing managers.",
    deliverables: [
      "Price change detection",
      "Instant alert system",
      "Historical trend charts",
      "Margin impact analysis"
    ],
    ctaLabel: "Monitor prices",
    icon: TrendingDown
  },
  {
    slug: "content-assistant",
    title: "Newsletter & Content Assistant",
    oneLiner: "Generate on-brand drafts for newsletters, blogs, and social.",
    outcomes: [
      "Cut content creation time by 60%",
      "Consistent brand voice across channels",
      "SEO-optimized suggestions"
    ],
    integrations: ["Brand guidelines", "CMS platforms", "Social schedulers", "Email tools"],
    timeline: "2–3 weeks",
    idealFor: "Marketing teams and content creators who need to scale output.",
    deliverables: [
      "Brand voice configuration",
      "Multi-format content generation",
      "SEO optimization suggestions",
      "Approval workflow integration"
    ],
    ctaLabel: "Scale your content",
    icon: PenTool
  },
  {
    slug: "recruiting-helper",
    title: "Recruiting Helper",
    oneLiner: "AI screening summaries and personalized outreach drafts.",
    outcomes: [
      "Screen 100+ CVs in minutes",
      "Personalized outreach at scale",
      "Reduce time-to-hire by 40%"
    ],
    integrations: ["LinkedIn", "ATS systems", "Job boards", "Email", "Calendar"],
    timeline: "2–3 weeks",
    idealFor: "HR teams and recruiters handling high-volume hiring.",
    deliverables: [
      "CV screening summaries",
      "Candidate ranking system",
      "Personalized outreach templates",
      "Interview scheduling assistance"
    ],
    ctaLabel: "Streamline hiring",
    icon: Users
  },
  {
    slug: "research-report",
    title: "Research → Report",
    oneLiner: "Turn research queries into structured reports with sources.",
    outcomes: [
      "Research reports in hours, not days",
      "Automatic source compilation",
      "Consistent report formatting"
    ],
    integrations: ["Web sources", "Academic databases", "Internal docs", "Industry reports"],
    timeline: "2–3 weeks",
    idealFor: "Analysts, consultants, and strategy teams who produce regular reports.",
    deliverables: [
      "Multi-source research aggregation",
      "Structured report generation",
      "Source citation management",
      "Template customization"
    ],
    ctaLabel: "Automate research",
    icon: FileSearch
  },
  {
    slug: "ai-sales-agent",
    title: "AI Sales Agent",
    oneLiner: "Autonomous agent that qualifies leads and books meetings 24/7.",
    outcomes: [
      "3x more qualified leads in pipeline",
      "Instant response to inbound inquiries",
      "Personalized outreach at scale"
    ],
    integrations: ["HubSpot", "Salesforce", "LinkedIn", "Email", "Calendar", "Website chat"],
    timeline: "2–3 weeks",
    idealFor: "Sales teams wanting to scale outreach without adding headcount.",
    deliverables: [
      "Lead qualification chatbot",
      "Automated meeting scheduling",
      "CRM integration and logging",
      "Performance analytics dashboard"
    ],
    ctaLabel: "Deploy sales agent",
    icon: Users
  },
  {
    slug: "customer-support-agent",
    title: "Customer Support Agent",
    oneLiner: "AI agent that resolves tickets, escalates intelligently, and learns from your knowledge base.",
    outcomes: [
      "70% of tickets resolved without human intervention",
      "24/7 instant response times",
      "Consistent, on-brand support"
    ],
    integrations: ["Zendesk", "Intercom", "Freshdesk", "Slack", "Email", "Knowledge bases"],
    timeline: "2–3 weeks",
    idealFor: "Support teams overwhelmed with repetitive questions.",
    deliverables: [
      "Multi-channel support bot",
      "Smart escalation rules",
      "Knowledge base integration",
      "Sentiment analysis and reporting"
    ],
    ctaLabel: "Launch support agent",
    icon: Mail
  },
  {
    slug: "workflow-automation-agent",
    title: "Workflow Automation Agent",
    oneLiner: "Multi-step AI agent that executes complex business processes autonomously.",
    outcomes: [
      "Eliminate manual data entry and handoffs",
      "Reduce process time by 80%",
      "Error-free execution with audit trails"
    ],
    integrations: ["Zapier", "Make", "Google Workspace", "Microsoft 365", "ERP systems", "Custom APIs"],
    timeline: "3–4 weeks",
    idealFor: "Operations teams with repetitive multi-system workflows.",
    deliverables: [
      "Custom workflow automation",
      "Decision logic configuration",
      "Error handling and alerts",
      "Process monitoring dashboard"
    ],
    ctaLabel: "Automate workflows",
    icon: FileSearch
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug);
};