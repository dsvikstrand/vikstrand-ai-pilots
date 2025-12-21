export type Language = "en" | "sv";

export const translations = {
  en: {
    // Header
    nav: {
      products: "Products",
      services: "Services",
      howItWorks: "How it works",
      security: "Security",
      pricing: "Pricing",
      faq: "FAQ",
      bookCall: "Book a call",
    },
    // Hero
    hero: {
      badge: "AI solutions for Swedish SMEs",
      headline1: "Practical AI that saves",
      headline2: "time and cost",
      subheadline: "We deliver production-ready AI pilots in 1–3 weeks. Built on proven open-source patterns, customized for your data, security, and workflows.",
      ctaBookCall: "Book a 20-min call",
      ctaRequestPilot: "Request a free AI pilot",
      trustText: "Trusted by forward-thinking Swedish companies",
    },
    // Services
    services: {
      badge: "13 AI Solutions",
      title: "What we build for you",
      subtitle: "Each solution is delivered as a production-ready pilot, integrated with your existing tools and data.",
      learnMore: "Learn more",
    },
    // Service Modal
    serviceModal: {
      outcomes: "Outcomes",
      whatYouGet: "What you get",
      integratesWith: "Integrates with",
      idealFor: "Ideal for",
      typicalTimeline: "Typical timeline",
      fromKickoff: "from kickoff to production",
    },
    // How It Works
    howItWorks: {
      title: "How the pilot works",
      subtitle: "From first call to production in 1–3 weeks. No lengthy RFPs, no endless scoping.",
      steps: [
        {
          title: "Discover",
          description: "We map your workflows, data sources, and goals in a 1-hour session.",
          duration: "Day 1–2"
        },
        {
          title: "Pilot",
          description: "We build a working prototype connected to your real data.",
          duration: "Week 1–2"
        },
        {
          title: "Deploy",
          description: "Refined solution goes live with proper access controls and monitoring.",
          duration: "Week 2–3"
        },
        {
          title: "Monitor",
          description: "Ongoing evaluation, quality metrics, and iterative improvements.",
          duration: "Ongoing"
        }
      ],
    },
    // Value Props
    valueProps: {
      title: "Why companies choose us",
      subtitle: "We're not here to sell you a dream. We deliver working AI that proves its value.",
      values: [
        {
          title: "Fast pilot, clear scope",
          description: "Production-ready in 1–3 weeks. We define success criteria upfront and deliver exactly what you need—no scope creep."
        },
        {
          title: "Safe integration",
          description: "Least-privilege access, role-based permissions, and full audit trails. Your data stays under your control."
        },
        {
          title: "Measurable improvement",
          description: "Built-in evaluation metrics from day one. We measure quality, track usage, and iterate based on real results."
        }
      ],
    },
    // Security
    security: {
      title: "Security & privacy first",
      subtitle: "Enterprise-grade security for SME budgets. We treat your data with the care it deserves.",
      features: [
        {
          title: "Least privilege access",
          description: "AI only accesses the minimum data required. No blanket permissions."
        },
        {
          title: "Role-based controls",
          description: "Granular permissions aligned with your existing organizational structure."
        },
        {
          title: "Full auditability",
          description: "Complete logs of every query, response, and data access for compliance."
        },
        {
          title: "Data handling",
          description: "Your data is processed but never used for training. Clear data retention policies."
        }
      ],
    },
    // Open Source
    openSource: {
      title: "Built on open-source excellence",
      subtitle: "Standing on the shoulders of giants",
      paragraph1: "Our solutions are built as <strong>practical wrappers and tailored implementations</strong> of proven patterns from the open-source ecosystem. We often start from reference implementations curated in <strong>awesome-ai-apps</strong> and adapt them to your data, tools, security requirements, and evaluation needs.",
      paragraph2: "This approach means you get battle-tested architectures with custom integrations, proper permissions, comprehensive evaluation, production monitoring, and polished UX—all delivered in weeks, not months.",
      linkText: "Explore awesome-ai-apps on GitHub",
    },
    // ROI Calculator
    roi: {
      title: "Calculate your savings",
      subtitle: "See how much time and money you could save with AI automation.",
      cardTitle: "ROI Calculator",
      cardSubtitle: "Adjust the sliders to estimate your potential savings",
      hoursSavedLabel: "Hours saved per week",
      hoursSavedHint: "Estimate time spent on tasks that could be automated",
      hourlyCostLabel: "Average hourly cost (SEK)",
      hourlyCostHint: "Include salary, overhead, and opportunity cost",
      estimatedSavings: "Estimated savings",
      weekly: "Weekly",
      monthly: "Monthly",
      yearly: "Yearly",
    },
    // Pricing
    pricing: {
      title: "Simple, transparent pricing",
      subtitle: "Pay for outcomes, not promises. Start with a pilot and scale when you see results.",
      mostPopular: "Most popular",
      customNote: "Need ongoing consulting or a custom arrangement?",
      letsTalk: "Let's talk",
      plans: [
        {
          name: "Starter",
          price: "From 25k SEK",
          description: "Single AI solution pilot",
          features: [
            "1 AI solution",
            "Basic integrations",
            "2-week delivery",
            "30 days support",
            "Documentation"
          ],
          cta: "Start pilot"
        },
        {
          name: "Growth",
          price: "From 50k SEK",
          description: "Multiple solutions with deeper integration",
          features: [
            "2–3 AI solutions",
            "Advanced integrations",
            "3-week delivery",
            "90 days support",
            "Training sessions",
            "Usage analytics"
          ],
          cta: "Talk to us"
        },
        {
          name: "Enterprise",
          price: "Custom",
          description: "Full AI transformation package",
          features: [
            "Unlimited solutions",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantees",
            "On-site workshops",
            "Priority roadmap"
          ],
          cta: "Contact sales"
        }
      ],
    },
    // FAQ
    faq: {
      title: "Frequently asked questions",
      subtitle: "Everything you need to know about working with us.",
      items: [
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
      ],
    },
    // Lead Form
    leadForm: {
      title: "Request a free AI pilot",
      subtitle: "Tell us about your needs and we'll design a pilot that proves value fast.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      companyLabel: "Company",
      companyPlaceholder: "Company name",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      roleLabel: "Role",
      rolePlaceholder: "Your role",
      automationGoalLabel: "What do you want to automate?",
      automationGoalPlaceholder: "Describe the task or workflow you'd like to improve with AI...",
      dataSourcesLabel: "Data sources you use",
      timelineLabel: "Preferred timeline",
      budgetLabel: "Budget range (optional)",
      submitButton: "Submit request",
      submitting: "Submitting...",
      successTitle: "Thank you!",
      successMessage: "We've received your request and will be in touch within 24 hours.",
      closeButton: "Close",
      toastSuccess: "Request submitted!",
      toastError: "Something went wrong",
      toastErrorMessage: "Please try again or email us directly.",
      dataSources: [
        { id: "google-drive", label: "Google Drive" },
        { id: "sharepoint", label: "SharePoint" },
        { id: "onedrive", label: "OneDrive" },
        { id: "sql", label: "SQL Database" },
        { id: "erp", label: "ERP System" },
        { id: "crm", label: "CRM" },
        { id: "slack-teams", label: "Slack/Teams" },
        { id: "other", label: "Other" },
      ],
      timelines: [
        { value: "1-2-weeks", label: "1–2 weeks" },
        { value: "1-month", label: "1 month" },
        { value: "3-months", label: "3+ months" },
      ],
      budgetRanges: [
        { value: "under-25k", label: "Under 25k SEK" },
        { value: "25k-50k", label: "25k–50k SEK" },
        { value: "50k-100k", label: "50k–100k SEK" },
        { value: "over-100k", label: "Over 100k SEK" },
        { value: "unsure", label: "Not sure yet" },
      ],
    },
    // Footer
    footer: {
      tagline: "Practical AI solutions for Swedish SMEs. We deliver production-ready pilots that prove value fast.",
      quickLinks: "Quick links",
      getStarted: "Get started",
      bookCall: "Book a call",
      requestPilot: "Request pilot",
      copyright: "All rights reserved.",
      openSourceNote: "Built on proven open-source patterns (incl.",
      customizedNote: ") — customized and productionized for your business.",
      swedishNote: "🇸🇪 Swedish version available!",
    },
    // Mobile CTA
    mobileCta: {
      bookCall: "Book call",
      freePilot: "Free pilot",
    },
    // Products
    products: {
      badge: "6 AI Products",
      title: "Ready-to-use AI products",
      subtitle: "Self-serve products with transparent pricing. Start immediately with a free trial.",
      buyNow: "Buy Now",
      tryFree: "Start Free Trial",
      learnMore: "Learn more",
      features: "What's included",
      subscriptionNote: "Billed monthly. Cancel anytime.",
      oneTimeNote: "One-time purchase. Lifetime access.",
    },
  },
  sv: {
    // Header
    nav: {
      products: "Produkter",
      services: "Tjänster",
      howItWorks: "Så fungerar det",
      security: "Säkerhet",
      pricing: "Priser",
      faq: "Vanliga frågor",
      bookCall: "Boka samtal",
    },
    // Hero
    hero: {
      badge: "AI-lösningar för svenska SME:er",
      headline1: "Praktisk AI som sparar",
      headline2: "tid och pengar",
      subheadline: "Vi levererar produktionsklara AI-piloter på 1–3 veckor. Byggda på beprövade open source-mönster, anpassade för din data, säkerhet och arbetsflöden.",
      ctaBookCall: "Boka 20 min samtal",
      ctaRequestPilot: "Begär gratis AI-pilot",
      trustText: "Betrodda av framåtblickande svenska företag",
    },
    // Services
    services: {
      badge: "13 AI-lösningar",
      title: "Vad vi bygger åt dig",
      subtitle: "Varje lösning levereras som en produktionsklar pilot, integrerad med dina befintliga verktyg och data.",
      learnMore: "Läs mer",
    },
    // Service Modal
    serviceModal: {
      outcomes: "Resultat",
      whatYouGet: "Vad du får",
      integratesWith: "Integrerar med",
      idealFor: "Idealisk för",
      typicalTimeline: "Typisk tidslinje",
      fromKickoff: "från start till produktion",
    },
    // How It Works
    howItWorks: {
      title: "Så fungerar piloten",
      subtitle: "Från första samtal till produktion på 1–3 veckor. Inga långa upphandlingar, ingen ändlös planering.",
      steps: [
        {
          title: "Upptäck",
          description: "Vi kartlägger dina arbetsflöden, datakällor och mål under en 1-timmes session.",
          duration: "Dag 1–2"
        },
        {
          title: "Pilot",
          description: "Vi bygger en fungerande prototyp kopplad till din riktiga data.",
          duration: "Vecka 1–2"
        },
        {
          title: "Driftsätt",
          description: "Den förfinade lösningen går live med korrekta åtkomstkontroller och övervakning.",
          duration: "Vecka 2–3"
        },
        {
          title: "Övervaka",
          description: "Löpande utvärdering, kvalitetsmätning och iterativa förbättringar.",
          duration: "Löpande"
        }
      ],
    },
    // Value Props
    valueProps: {
      title: "Varför företag väljer oss",
      subtitle: "Vi säljer ingen dröm. Vi levererar fungerande AI som bevisar sitt värde.",
      values: [
        {
          title: "Snabb pilot, tydligt scope",
          description: "Produktionsklart på 1–3 veckor. Vi definierar framgångskriterier i förväg och levererar exakt det du behöver—ingen scope creep."
        },
        {
          title: "Säker integration",
          description: "Minimala behörigheter, rollbaserade åtkomstkontroller och fullständiga loggar. Din data förblir under din kontroll."
        },
        {
          title: "Mätbar förbättring",
          description: "Inbyggda utvärderingsmått från dag ett. Vi mäter kvalitet, spårar användning och itererar baserat på verkliga resultat."
        }
      ],
    },
    // Security
    security: {
      title: "Säkerhet & integritet först",
      subtitle: "Företagsklass säkerhet för SME-budget. Vi behandlar din data med den omsorg den förtjänar.",
      features: [
        {
          title: "Minsta möjliga åtkomst",
          description: "AI får endast tillgång till den data som krävs. Inga övergripande behörigheter."
        },
        {
          title: "Rollbaserade kontroller",
          description: "Detaljerade behörigheter som följer din befintliga organisationsstruktur."
        },
        {
          title: "Full spårbarhet",
          description: "Kompletta loggar över varje fråga, svar och dataåtkomst för efterlevnad."
        },
        {
          title: "Datahantering",
          description: "Din data bearbetas men används aldrig för träning. Tydliga policyer för datalagring."
        }
      ],
    },
    // Open Source
    openSource: {
      title: "Byggt på open source-excellens",
      subtitle: "Vi står på jättarnas axlar",
      paragraph1: "Våra lösningar är byggda som <strong>praktiska wrappers och skräddarsydda implementationer</strong> av beprövade mönster från open source-ekosystemet. Vi utgår ofta från referensimplementationer som kuraterats i <strong>awesome-ai-apps</strong> och anpassar dem till din data, verktyg, säkerhetskrav och utvärderingsbehov.",
      paragraph2: "Detta tillvägagångssätt innebär att du får stridstestade arkitekturer med anpassade integrationer, korrekta behörigheter, omfattande utvärdering, produktionsövervakning och polerad UX—allt levererat på veckor, inte månader.",
      linkText: "Utforska awesome-ai-apps på GitHub",
    },
    // ROI Calculator
    roi: {
      title: "Beräkna dina besparingar",
      subtitle: "Se hur mycket tid och pengar du kan spara med AI-automatisering.",
      cardTitle: "ROI-kalkylator",
      cardSubtitle: "Justera reglagen för att uppskatta dina potentiella besparingar",
      hoursSavedLabel: "Sparade timmar per vecka",
      hoursSavedHint: "Uppskatta tid som läggs på uppgifter som kan automatiseras",
      hourlyCostLabel: "Genomsnittlig timkostnad (SEK)",
      hourlyCostHint: "Inkludera lön, overhead och alternativkostnad",
      estimatedSavings: "Uppskattade besparingar",
      weekly: "Veckovis",
      monthly: "Månadsvis",
      yearly: "Årsvis",
    },
    // Pricing
    pricing: {
      title: "Enkel, transparent prissättning",
      subtitle: "Betala för resultat, inte löften. Börja med en pilot och skala när du ser resultat.",
      mostPopular: "Mest populär",
      customNote: "Behöver du löpande konsulttjänster eller ett anpassat upplägg?",
      letsTalk: "Kontakta oss",
      plans: [
        {
          name: "Start",
          price: "Från 25k SEK",
          description: "Pilot för en AI-lösning",
          features: [
            "1 AI-lösning",
            "Grundläggande integrationer",
            "2 veckors leverans",
            "30 dagars support",
            "Dokumentation"
          ],
          cta: "Starta pilot"
        },
        {
          name: "Tillväxt",
          price: "Från 50k SEK",
          description: "Flera lösningar med djupare integration",
          features: [
            "2–3 AI-lösningar",
            "Avancerade integrationer",
            "3 veckors leverans",
            "90 dagars support",
            "Utbildningssessioner",
            "Användningsanalys"
          ],
          cta: "Prata med oss"
        },
        {
          name: "Enterprise",
          price: "Anpassat",
          description: "Komplett AI-transformationspaket",
          features: [
            "Obegränsade lösningar",
            "Anpassade integrationer",
            "Dedikerad support",
            "SLA-garantier",
            "Workshops på plats",
            "Prioriterad roadmap"
          ],
          cta: "Kontakta sälj"
        }
      ],
    },
    // FAQ
    faq: {
      title: "Vanliga frågor",
      subtitle: "Allt du behöver veta om att arbeta med oss.",
      items: [
        {
          question: "Tränar ni AI-modeller på vår data?",
          answer: "Nej. Vi använder AI-modeller via säkra API:er med strikta policyer för datahantering. Din data bearbetas för att generera svar men lagras eller används aldrig för att träna modeller. Vi kan tillhandahålla detaljerade databehandlingsavtal på begäran."
        },
        {
          question: "Vilka system kan ni integrera med?",
          answer: "Vi integrerar med de flesta vanliga affärsverktyg: Google Workspace, Microsoft 365 (SharePoint, OneDrive, Teams), Slack, ledande CRM-system (HubSpot, Salesforce), SQL-databaser, ERP-system och mycket mer. Om du har ett specifikt system, fråga bara."
        },
        {
          question: "Hur lång tid tar en typisk pilot?",
          answer: "De flesta piloter levereras på 1–3 veckor. Enklare lösningar (dokumentchatt, grundläggande övervakning) tar 1–2 veckor. Mer komplexa integrationer (CRM-automation, multi-source RAG) tar vanligtvis 2–3 veckor."
        },
        {
          question: "Hur mäter ni kvalitet och framgång?",
          answer: "Varje lösning inkluderar inbyggda utvärderingsmått. För Q&A-system spårar vi svarsnoggrannhet och citatkvalitet. För automation mäter vi sparad tid och felfrekvens. Vi går igenom mätvärden veckovis under piloten och månadsvis efter driftsättning."
        },
        {
          question: "Kan vi börja med något litet?",
          answer: "Absolut. Faktum är att vi rekommenderar det. Börja med ett enda användningsfall, bevisa värdet och expandera sedan. Vårt Start-paket är utformat exakt för detta—minimal risk, tydliga resultat."
        },
        {
          question: "Vad händer efter piloten?",
          answer: "Du äger lösningen. Vi tillhandahåller dokumentation, utbildning och överlämning till ditt team. Vi erbjuder löpande supportpaket för övervakning, uppdateringar och expansion, men det finns ingen inlåsning."
        }
      ],
    },
    // Lead Form
    leadForm: {
      title: "Begär en gratis AI-pilot",
      subtitle: "Berätta om dina behov så designar vi en pilot som bevisar värde snabbt.",
      nameLabel: "Namn",
      namePlaceholder: "Ditt namn",
      companyLabel: "Företag",
      companyPlaceholder: "Företagsnamn",
      emailLabel: "E-post",
      emailPlaceholder: "du@foretag.se",
      roleLabel: "Roll",
      rolePlaceholder: "Din roll",
      automationGoalLabel: "Vad vill du automatisera?",
      automationGoalPlaceholder: "Beskriv uppgiften eller arbetsflödet du vill förbättra med AI...",
      dataSourcesLabel: "Datakällor du använder",
      timelineLabel: "Önskad tidslinje",
      budgetLabel: "Budgetintervall (valfritt)",
      submitButton: "Skicka förfrågan",
      submitting: "Skickar...",
      successTitle: "Tack!",
      successMessage: "Vi har tagit emot din förfrågan och hör av oss inom 24 timmar.",
      closeButton: "Stäng",
      toastSuccess: "Förfrågan skickad!",
      toastError: "Något gick fel",
      toastErrorMessage: "Försök igen eller maila oss direkt.",
      dataSources: [
        { id: "google-drive", label: "Google Drive" },
        { id: "sharepoint", label: "SharePoint" },
        { id: "onedrive", label: "OneDrive" },
        { id: "sql", label: "SQL-databas" },
        { id: "erp", label: "ERP-system" },
        { id: "crm", label: "CRM" },
        { id: "slack-teams", label: "Slack/Teams" },
        { id: "other", label: "Annat" },
      ],
      timelines: [
        { value: "1-2-weeks", label: "1–2 veckor" },
        { value: "1-month", label: "1 månad" },
        { value: "3-months", label: "3+ månader" },
      ],
      budgetRanges: [
        { value: "under-25k", label: "Under 25k SEK" },
        { value: "25k-50k", label: "25k–50k SEK" },
        { value: "50k-100k", label: "50k–100k SEK" },
        { value: "over-100k", label: "Över 100k SEK" },
        { value: "unsure", label: "Osäker ännu" },
      ],
    },
    // Footer
    footer: {
      tagline: "Praktiska AI-lösningar för svenska SME:er. Vi levererar produktionsklara piloter som bevisar värde snabbt.",
      quickLinks: "Snabblänkar",
      getStarted: "Kom igång",
      bookCall: "Boka samtal",
      requestPilot: "Begär pilot",
      copyright: "Alla rättigheter förbehållna.",
      openSourceNote: "Byggt på beprövade open source-mönster (inkl.",
      customizedNote: ") — anpassat och produktionssäkrat för ditt företag.",
      swedishNote: "🇬🇧 English version available!",
    },
    // Mobile CTA
    mobileCta: {
      bookCall: "Boka samtal",
      freePilot: "Gratis pilot",
    },
    // Products
    products: {
      badge: "6 AI-produkter",
      title: "Färdiga AI-produkter",
      subtitle: "Självbetjäningsprodukter med transparent prissättning. Börja direkt med en gratis provperiod.",
      buyNow: "Köp nu",
      tryFree: "Starta gratis provperiod",
      learnMore: "Läs mer",
      features: "Vad ingår",
      subscriptionNote: "Faktureras månadsvis. Avsluta när som helst.",
      oneTimeNote: "Engångsköp. Livstidsåtkomst.",
    },
  },
} as const;

// Service translations
export const serviceTranslations = {
  en: {
    "talk-to-your-data": {
      title: "Talk to Your Data",
      oneLiner: "Ask questions in plain language, get SQL queries and charts instantly.",
      outcomes: [
        "90% faster insights vs manual SQL",
        "Self-serve analytics for non-technical staff",
        "Automatic visualization of results"
      ],
      idealFor: "Finance teams, operations managers, and analysts who need quick answers without writing code.",
      deliverables: [
        "Natural language query interface",
        "Auto-generated SQL with explanation",
        "Interactive charts and tables",
        "Query history and favorites"
      ],
      ctaLabel: "Get data answers",
    },
    "internal-knowledge-assistant": {
      title: "Internal Knowledge Assistant",
      oneLiner: "RAG-powered chatbot that answers from your docs with citations.",
      outcomes: [
        "70% reduction in repeated questions",
        "Instant policy and procedure lookup",
        "Traceable answers with source links"
      ],
      idealFor: "HR, legal, and operations teams drowning in documentation requests.",
      deliverables: [
        "Conversational chat interface",
        "Source citations for every answer",
        "Document ingestion pipeline",
        "Feedback loop for quality improvement"
      ],
      ctaLabel: "Deploy your assistant",
    },
    "document-chat": {
      title: "PDF & Document Chat",
      oneLiner: "Upload documents, extract key info, and ask questions.",
      outcomes: [
        "Hours of reading → minutes of Q&A",
        "Extract tables, figures, and key points",
        "Compare multiple documents at once"
      ],
      idealFor: "Legal, procurement, and research teams processing high volumes of documents.",
      deliverables: [
        "Drag-and-drop upload interface",
        "Multi-document comparison",
        "Structured data extraction",
        "Export summaries to your tools"
      ],
      ctaLabel: "Chat with your docs",
    },
    "meeting-email-assistant": {
      title: "Meeting & Email Assistant",
      oneLiner: "Automatic summaries, action items, follow-ups, and CRM notes.",
      outcomes: [
        "Save 5+ hours/week on admin tasks",
        "Never miss an action item",
        "Auto-populate CRM after every call"
      ],
      idealFor: "Sales teams, account managers, and executives with meeting-heavy calendars.",
      deliverables: [
        "Real-time transcription",
        "AI-generated summaries",
        "Action item extraction",
        "CRM integration for auto-logging"
      ],
      ctaLabel: "Automate meetings",
    },
    "brand-monitoring": {
      title: "Brand Monitoring",
      oneLiner: "Real-time alerts and weekly digests on brand mentions.",
      outcomes: [
        "Catch PR issues within minutes",
        "Track sentiment trends over time",
        "Competitive share of voice analysis"
      ],
      idealFor: "Marketing teams and PR managers who need to stay ahead of the conversation.",
      deliverables: [
        "Real-time alert system",
        "Weekly summary reports",
        "Sentiment analysis dashboard",
        "Competitor comparison"
      ],
      ctaLabel: "Monitor your brand",
    },
    "competitor-tracker": {
      title: "Competitor Tracker",
      oneLiner: "Automated tracking of competitor changes with briefing reports.",
      outcomes: [
        "Never miss a competitor move",
        "Weekly competitive intelligence briefs",
        "Track pricing, features, and messaging"
      ],
      idealFor: "Product managers, strategists, and executives who need competitive awareness.",
      deliverables: [
        "Competitor change detection",
        "Automated briefing reports",
        "Feature comparison matrix",
        "Alert system for key changes"
      ],
      ctaLabel: "Track competitors",
    },
    "price-monitoring": {
      title: "Price Monitoring",
      oneLiner: "Track competitor and supplier pricing with instant alerts.",
      outcomes: [
        "React to price changes in hours, not weeks",
        "Optimize margins with market data",
        "Historical price trend analysis"
      ],
      idealFor: "E-commerce teams, procurement, and pricing managers.",
      deliverables: [
        "Price change detection",
        "Instant alert system",
        "Historical trend charts",
        "Margin impact analysis"
      ],
      ctaLabel: "Monitor prices",
    },
    "content-assistant": {
      title: "Newsletter & Content Assistant",
      oneLiner: "Generate on-brand drafts for newsletters, blogs, and social.",
      outcomes: [
        "Cut content creation time by 60%",
        "Consistent brand voice across channels",
        "SEO-optimized suggestions"
      ],
      idealFor: "Marketing teams and content creators who need to scale output.",
      deliverables: [
        "Brand voice configuration",
        "Multi-format content generation",
        "SEO optimization suggestions",
        "Approval workflow integration"
      ],
      ctaLabel: "Scale your content",
    },
    "recruiting-helper": {
      title: "Recruiting Helper",
      oneLiner: "AI screening summaries and personalized outreach drafts.",
      outcomes: [
        "Screen 100+ CVs in minutes",
        "Personalized outreach at scale",
        "Reduce time-to-hire by 40%"
      ],
      idealFor: "HR teams and recruiters handling high-volume hiring.",
      deliverables: [
        "CV screening summaries",
        "Candidate ranking system",
        "Personalized outreach templates",
        "Interview scheduling assistance"
      ],
      ctaLabel: "Streamline hiring",
    },
    "research-report": {
      title: "Research → Report",
      oneLiner: "Turn research queries into structured reports with sources.",
      outcomes: [
        "Research reports in hours, not days",
        "Automatic source compilation",
        "Consistent report formatting"
      ],
      idealFor: "Analysts, consultants, and strategy teams who produce regular reports.",
      deliverables: [
        "Multi-source research aggregation",
        "Structured report generation",
        "Source citation management",
        "Template customization"
      ],
      ctaLabel: "Automate research",
    },
    "ai-sales-agent": {
      title: "AI Sales Agent",
      oneLiner: "Autonomous agent that qualifies leads and books meetings 24/7.",
      outcomes: [
        "3x more qualified leads in pipeline",
        "Instant response to inbound inquiries",
        "Personalized outreach at scale"
      ],
      idealFor: "Sales teams wanting to scale outreach without adding headcount.",
      deliverables: [
        "Lead qualification chatbot",
        "Automated meeting scheduling",
        "CRM integration and logging",
        "Performance analytics dashboard"
      ],
      ctaLabel: "Deploy sales agent",
    },
    "customer-support-agent": {
      title: "Customer Support Agent",
      oneLiner: "AI agent that resolves tickets, escalates intelligently, and learns from your knowledge base.",
      outcomes: [
        "70% of tickets resolved without human intervention",
        "24/7 instant response times",
        "Consistent, on-brand support"
      ],
      idealFor: "Support teams overwhelmed with repetitive questions.",
      deliverables: [
        "Multi-channel support bot",
        "Smart escalation rules",
        "Knowledge base integration",
        "Sentiment analysis and reporting"
      ],
      ctaLabel: "Launch support agent",
    },
    "workflow-automation-agent": {
      title: "Workflow Automation Agent",
      oneLiner: "Multi-step AI agent that executes complex business processes autonomously.",
      outcomes: [
        "Eliminate manual data entry and handoffs",
        "Reduce process time by 80%",
        "Error-free execution with audit trails"
      ],
      idealFor: "Operations teams with repetitive multi-system workflows.",
      deliverables: [
        "Custom workflow automation",
        "Decision logic configuration",
        "Error handling and alerts",
        "Process monitoring dashboard"
      ],
      ctaLabel: "Automate workflows",
    },
  },
  sv: {
    "talk-to-your-data": {
      title: "Prata med din data",
      oneLiner: "Ställ frågor på vanlig svenska, få SQL-frågor och diagram direkt.",
      outcomes: [
        "90% snabbare insikter jämfört med manuell SQL",
        "Självbetjäningsanalys för icke-teknisk personal",
        "Automatisk visualisering av resultat"
      ],
      idealFor: "Ekonomiteam, verksamhetschefer och analytiker som behöver snabba svar utan att skriva kod.",
      deliverables: [
        "Frågegränssnitt på naturligt språk",
        "Autogenererad SQL med förklaring",
        "Interaktiva diagram och tabeller",
        "Frågehistorik och favoriter"
      ],
      ctaLabel: "Få datasvar",
    },
    "internal-knowledge-assistant": {
      title: "Intern kunskapsassistent",
      oneLiner: "RAG-driven chatbot som svarar från dina dokument med källhänvisningar.",
      outcomes: [
        "70% minskning av upprepade frågor",
        "Omedelbar uppslagning av policyer och rutiner",
        "Spårbara svar med källänkar"
      ],
      idealFor: "HR-, juridik- och operativa team som drunknar i dokumentationsförfrågningar.",
      deliverables: [
        "Konversationsbaserat chattgränssnitt",
        "Källhänvisningar för varje svar",
        "Pipeline för dokumentinläsning",
        "Återkopplingsloop för kvalitetsförbättring"
      ],
      ctaLabel: "Driftsätt din assistent",
    },
    "document-chat": {
      title: "PDF & dokumentchatt",
      oneLiner: "Ladda upp dokument, extrahera viktig info och ställ frågor.",
      outcomes: [
        "Timmar av läsning → minuter av Q&A",
        "Extrahera tabeller, figurer och nyckelpoänger",
        "Jämför flera dokument samtidigt"
      ],
      idealFor: "Juridik-, inköps- och forskningsteam som bearbetar stora volymer dokument.",
      deliverables: [
        "Dra-och-släpp-uppladdning",
        "Jämförelse av flera dokument",
        "Strukturerad dataextraktion",
        "Exportera sammanfattningar till dina verktyg"
      ],
      ctaLabel: "Chatta med dina dokument",
    },
    "meeting-email-assistant": {
      title: "Mötes- & e-postassistent",
      oneLiner: "Automatiska sammanfattningar, åtgärdspunkter, uppföljningar och CRM-anteckningar.",
      outcomes: [
        "Spara 5+ timmar/vecka på administrativa uppgifter",
        "Missa aldrig en åtgärdspunkt",
        "Autopopulera CRM efter varje samtal"
      ],
      idealFor: "Säljteam, kontochefer och chefer med mötestäta kalendrar.",
      deliverables: [
        "Realtidstranskribering",
        "AI-genererade sammanfattningar",
        "Extraktion av åtgärdspunkter",
        "CRM-integration för automatisk loggning"
      ],
      ctaLabel: "Automatisera möten",
    },
    "brand-monitoring": {
      title: "Varumärkesövervakning",
      oneLiner: "Realtidsvarningar och veckosammanfattningar om varumärkesomnämnanden.",
      outcomes: [
        "Fånga PR-problem inom minuter",
        "Följ sentimenttrender över tid",
        "Analys av konkurrensmässig röstandel"
      ],
      idealFor: "Marknadsföringsteam och PR-chefer som behöver ligga steget före i konversationen.",
      deliverables: [
        "Realtidsvarningssystem",
        "Veckovisa sammanfattningsrapporter",
        "Dashboard för sentimentanalys",
        "Konkurrentjämförelse"
      ],
      ctaLabel: "Övervaka ditt varumärke",
    },
    "competitor-tracker": {
      title: "Konkurrentspårare",
      oneLiner: "Automatisk spårning av konkurrentförändringar med briefingrapporter.",
      outcomes: [
        "Missa aldrig ett konkurrensdrag",
        "Veckovisa konkurrensunderrättelsebriefingar",
        "Spåra prissättning, funktioner och budskap"
      ],
      idealFor: "Produktchefer, strateger och chefer som behöver konkurrensmedvetenhet.",
      deliverables: [
        "Detektering av konkurrentförändringar",
        "Automatiserade briefingrapporter",
        "Funktionsjämförelsematris",
        "Varningssystem för nyckelförändringar"
      ],
      ctaLabel: "Spåra konkurrenter",
    },
    "price-monitoring": {
      title: "Prisövervakning",
      oneLiner: "Spåra konkurrent- och leverantörspriser med omedelbara varningar.",
      outcomes: [
        "Reagera på prisändringar på timmar, inte veckor",
        "Optimera marginaler med marknadsdata",
        "Historisk pristrendanalys"
      ],
      idealFor: "E-handelsteam, inköp och prisansvariga.",
      deliverables: [
        "Detektering av prisändringar",
        "Omedelbart varningssystem",
        "Historiska trenddiagram",
        "Marginaleffektanalys"
      ],
      ctaLabel: "Övervaka priser",
    },
    "content-assistant": {
      title: "Nyhetsbrev & innehållsassistent",
      oneLiner: "Generera varumärkesanpassade utkast för nyhetsbrev, bloggar och sociala medier.",
      outcomes: [
        "Minska innehållsskapande tid med 60%",
        "Konsekvent varumärkesröst över kanaler",
        "SEO-optimerade förslag"
      ],
      idealFor: "Marknadsföringsteam och innehållsskapare som behöver skala upp produktionen.",
      deliverables: [
        "Konfiguration av varumärkesröst",
        "Innehållsgenerering i flera format",
        "SEO-optimeringsförslag",
        "Integration av godkännandearbetsflöde"
      ],
      ctaLabel: "Skala ditt innehåll",
    },
    "recruiting-helper": {
      title: "Rekryteringshjälpare",
      oneLiner: "AI-screeningsammanfattningar och personliga utskicksutkast.",
      outcomes: [
        "Screena 100+ CV:n på minuter",
        "Personlig utskickning i stor skala",
        "Minska tid till anställning med 40%"
      ],
      idealFor: "HR-team och rekryterare som hanterar högvolymrekrytering.",
      deliverables: [
        "CV-screeningsammanfattningar",
        "Kandidatrankning",
        "Personliga utskicksmallar",
        "Assistans för intervjubokning"
      ],
      ctaLabel: "Effektivisera rekrytering",
    },
    "research-report": {
      title: "Forskning → Rapport",
      oneLiner: "Omvandla forskningsfrågor till strukturerade rapporter med källor.",
      outcomes: [
        "Forskningsrapporter på timmar, inte dagar",
        "Automatisk källsammanställning",
        "Konsekvent rapportformatering"
      ],
      idealFor: "Analytiker, konsulter och strategiteam som producerar regelbundna rapporter.",
      deliverables: [
        "Aggregering av forskning från flera källor",
        "Strukturerad rapportgenerering",
        "Hantering av källhänvisningar",
        "Mallanpassning"
      ],
      ctaLabel: "Automatisera forskning",
    },
    "ai-sales-agent": {
      title: "AI-säljagent",
      oneLiner: "Autonom agent som kvalificerar leads och bokar möten dygnet runt.",
      outcomes: [
        "3x fler kvalificerade leads i pipeline",
        "Omedelbart svar på inkommande förfrågningar",
        "Personlig utskickning i stor skala"
      ],
      idealFor: "Säljteam som vill skala upp utan att anställa fler.",
      deliverables: [
        "Leadkvalificeringschattbot",
        "Automatiserad mötesbokning",
        "CRM-integration och loggning",
        "Dashboard för prestationsanalys"
      ],
      ctaLabel: "Driftsätt säljagent",
    },
    "customer-support-agent": {
      title: "Kundsupportagent",
      oneLiner: "AI-agent som löser ärenden, eskalerar intelligent och lär sig från din kunskapsbas.",
      outcomes: [
        "70% av ärenden löses utan mänsklig intervention",
        "Dygnet runt omedelbara svarstider",
        "Konsekvent, varumärkesanpassad support"
      ],
      idealFor: "Supportteam som överväldigas av repetitiva frågor.",
      deliverables: [
        "Flerkanalssupportbot",
        "Smarta eskaleringsregler",
        "Kunskapsbas-integration",
        "Sentimentanalys och rapportering"
      ],
      ctaLabel: "Lansera supportagent",
    },
    "workflow-automation-agent": {
      title: "Arbetsflödesautomatiseringsagent",
      oneLiner: "Flerstegs AI-agent som utför komplexa affärsprocesser autonomt.",
      outcomes: [
        "Eliminera manuell datainmatning och överlämningar",
        "Minska processtid med 80%",
        "Felfri exekvering med revisionsspår"
      ],
      idealFor: "Operativa team med repetitiva arbetsflöden över flera system.",
      deliverables: [
        "Anpassad arbetsflödesautomatisering",
        "Konfiguration av beslutslogik",
        "Felhantering och varningar",
        "Dashboard för processövervakning"
      ],
      ctaLabel: "Automatisera arbetsflöden",
    },
  },
} as const;

// Product translations
export const productTranslations = {
  en: {
    "invoice-receipt-ocr": {
      title: "Invoice & Receipt OCR",
      tagline: "Auto-extract data from invoices and receipts with 99% accuracy.",
      features: [
        "Batch upload support",
        "Multi-language recognition",
        "Export to Excel/CSV",
        "Fortnox integration ready",
        "99%+ accuracy guarantee"
      ],
      ctaLabel: "Get Started",
    },
    "meeting-transcriber": {
      title: "Meeting Transcriber",
      tagline: "Audio to transcript with AI-generated summaries and action items.",
      features: [
        "Swedish & English support",
        "Speaker identification",
        "Automatic action items",
        "Searchable archive",
        "Export to your tools"
      ],
      ctaLabel: "Start Transcribing",
    },
    "cv-screener": {
      title: "CV Screener",
      tagline: "Ranked candidate summaries from batch CV uploads.",
      features: [
        "Bulk CV processing",
        "Custom criteria matching",
        "Ranking & scoring",
        "Skills extraction",
        "Bias-aware screening"
      ],
      ctaLabel: "Screen CVs",
    },
    "email-classifier": {
      title: "Email Classifier & Auto-Responder",
      tagline: "Intelligent email categorization with smart auto-replies.",
      features: [
        "Multi-category classification",
        "Priority detection",
        "Auto-draft responses",
        "Outlook & Gmail integration",
        "Custom rules engine"
      ],
      ctaLabel: "Classify Emails",
    },
    "churn-predictor": {
      title: "Customer Churn Predictor",
      tagline: "Risk scoring from CRM data to retain your best customers.",
      features: [
        "CRM data integration",
        "Risk score dashboard",
        "Early warning alerts",
        "Retention recommendations",
        "Monthly trend reports"
      ],
      ctaLabel: "Predict Churn",
    },
    "fortnox-chat": {
      title: "Fortnox Chat Assistant",
      tagline: "Natural language queries for your Fortnox accounting data.",
      features: [
        "Plain Swedish queries",
        "Real-time Fortnox sync",
        "Financial insights",
        "Report generation",
        "Secure API connection"
      ],
      ctaLabel: "Chat with Fortnox",
    },
  },
  sv: {
    "invoice-receipt-ocr": {
      title: "Faktura- & kvitto-OCR",
      tagline: "Extrahera automatiskt data från fakturor och kvitton med 99% noggrannhet.",
      features: [
        "Batchuppladdning",
        "Flerspråkig igenkänning",
        "Export till Excel/CSV",
        "Fortnox-integration redo",
        "99%+ noggrannhetsgaranti"
      ],
      ctaLabel: "Kom igång",
    },
    "meeting-transcriber": {
      title: "Mötestranskriberare",
      tagline: "Ljud till transkription med AI-genererade sammanfattningar och åtgärdspunkter.",
      features: [
        "Svenska & engelska stöd",
        "Talaridentifiering",
        "Automatiska åtgärdspunkter",
        "Sökbart arkiv",
        "Export till dina verktyg"
      ],
      ctaLabel: "Börja transkribera",
    },
    "cv-screener": {
      title: "CV-granskare",
      tagline: "Rankade kandidatsammanfattningar från batch-CV-uppladdningar.",
      features: [
        "Mass-CV-behandling",
        "Anpassade kriteriumatchning",
        "Rankning & poängsättning",
        "Kompetensextraktion",
        "Partiskhetsvänlig granskning"
      ],
      ctaLabel: "Granska CV:n",
    },
    "email-classifier": {
      title: "E-postklassificerare & autoresponder",
      tagline: "Intelligent e-postkategorisering med smarta autosvar.",
      features: [
        "Multikategoriklassificering",
        "Prioritetsdetektering",
        "Automatiska svarsutkast",
        "Outlook & Gmail-integration",
        "Anpassad regelmotor"
      ],
      ctaLabel: "Klassificera e-post",
    },
    "churn-predictor": {
      title: "Kundavgångsprediktor",
      tagline: "Riskpoäng från CRM-data för att behålla dina bästa kunder.",
      features: [
        "CRM-dataintegration",
        "Riskpoäng-dashboard",
        "Tidiga varningsvarningar",
        "Retentionsrekommendationer",
        "Månadsvis trendrapporter"
      ],
      ctaLabel: "Förutse avgång",
    },
    "fortnox-chat": {
      title: "Fortnox chattassistent",
      tagline: "Naturligt språk-frågor för dina Fortnox bokföringsdata.",
      features: [
        "Vanliga svenska frågor",
        "Realtids Fortnox-synk",
        "Finansiella insikter",
        "Rapportgenerering",
        "Säker API-anslutning"
      ],
      ctaLabel: "Chatta med Fortnox",
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.en;