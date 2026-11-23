export const INSTITUTE_INFO = {
  name: "Digital Tech Orchid",
  tagline: "Empowering Future Minds",
  phone: "7842839491",
  phoneFormatted: "+91 78428 39491",
  phoneTel: "tel:+917842839491",
  whatsappUrl: "https://wa.me/917842839491?text=Hi%20Digital%20Tech%20Orchid,%20I%20am%20interested%20in%20your%20training%20programs.",
  email: "admissions@digitaltechorchid.com",
  address: "Kukatpally, Hyderabad, Telangana, India",
  fullAddress: "Flat No. 302, Digital Tech Orchid Tower, Main Road, Kukatpally, Hyderabad, Telangana",
  officeHours: "Mon - Sat: 9:00 AM - 7:00 PM IST",
  logoUrl: "/logo.svg"
};

export const STATS = [
  { label: "Placed Students", value: "1,800+", icon: "trending_up", highlight: false },
  { label: "Placement Rate", value: "94%", highlight: true },
  { label: "Salary Package", value: "5-20 LPA", highlight: true },
  { label: "Alumni Rating", value: "4.9/5", icon: "star", highlight: false, fillIcon: true }
];

export const PARTNERS = [
  "TCS",
  "Infosys",
  "Accenture",
  "Cognizant",
  "Optum Global",
  "Deloitte",
  "IBM India",
  "Capgemini",
  "Persistent Tech",
  "Wipro"
];

export const HERO_MODULES = [
  {
    title: "SAP End User & SAP SD (Zero Coding)",
    desc: "1 to 10 yrs exp, ₹5-20 LPA in PAN India MNCs with documentation",
    icon: "database",
    badge: "Hot Track",
    bg: "bg-tertiary-fixed text-on-tertiary-fixed"
  },
  {
    title: "US Healthcare & Medical Billing",
    desc: "RCM workflows, HIPAA, claims & live billing portals",
    icon: "medical_services",
    bg: "bg-primary-container text-on-primary"
  },
  {
    title: "Salesforce Admin & Dev",
    desc: "LWC, Apex triggers, Flows & cloud integrations",
    icon: "cloud_done",
    bg: "bg-surface-tint text-on-primary"
  },
  {
    title: "Full-Stack Web Development",
    desc: "HTML, CSS, JavaScript, React, Java & SQL",
    icon: "code",
    bg: "bg-secondary-container text-on-secondary-container"
  },
  {
    title: "Career Gap & 1-10 Yrs Experience Support",
    desc: "Complete documentation & enterprise BGC clearance",
    icon: "badge",
    bg: "bg-secondary text-on-secondary",
    fillIcon: true
  },
  {
    title: "1-on-1 Mock Interviews & Referrals",
    desc: "Direct interview referrals in PAN India MNCs",
    icon: "video_chat",
    bg: "bg-primary text-on-primary"
  }
];

export const TECH_SUBTRACKS = {
  sap: {
    id: "sap",
    enquiryTrack: "SAP End User & SAP SD",
    badge: "Zero Coding • ₹5 - 20 LPA",
    badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed",
    title: "SAP SD (Sales & Distribution) & SAP End User Track",
    description: "High-paying enterprise ERP track requiring ZERO CODING. Specifically designed for graduates and career-gap candidates seeking 1 to 10 years experience positioning in PAN India MNCs with complete documentation support.",
    highlights: {
      experience: "1 to 10 Years Experience",
      salary: "₹5 LPA to ₹20 LPA",
      codingRequired: "Zero Coding Required",
      placement: "PAN India MNCs",
      documentation: "Provided for BGC Clearance"
    },
    points: [
      "Zero Coding Required: Pure business processes, transaction codes & functional navigation",
      "SAP SD (Sales & Distribution): Sales orders, pricing procedures, delivery, billing & partner functions",
      "SAP End User Mastery: Daily sales posting, customer invoices, ledger reconciliation & credit management",
      "Complete Documentation Support: Experience certificates & documentation provided for seamless BGC clearance",
      "PAN India MNC Placements: Target ₹5 LPA to ₹20 LPA packages in top IT & enterprise corporations"
    ]
  },
  salesforce: {
    id: "salesforce",
    enquiryTrack: "Salesforce (Admin & Dev/LWC)",
    badge: "High Growth Cloud",
    badgeColor: "bg-primary-fixed text-on-primary-fixed",
    title: "Salesforce Cloud Master Developer Track",
    description: "Master enterprise cloud CRM architecture with real-time implementations, hands-on Trailhead modules, and certification readiness.",
    highlights: {
      experience: "1 to 6 Years Experience",
      salary: "₹6 LPA to ₹16 LPA",
      codingRequired: "Apex & LWC (Guided)",
      placement: "Global Delivery Centers",
      documentation: "Provided for BGC Clearance"
    },
    points: [
      "Admin & Platform Security: Org-wide defaults, profiles, permission sets & sharing",
      "Apex Programming: Classes, batch apex & trigger handler frameworks",
      "Lightning Web Components (LWC): Modern JavaScript ES6 & wire service integrations",
      "SOQL, SOSL & REST APIs: Enterprise system integrations & capstone projects",
      "Documentation & placement assistance for top Salesforce partner firms"
    ]
  },
  healthcare: {
    id: "healthcare",
    enquiryTrack: "US Healthcare & Medical Billing",
    badge: "Immediate Hiring",
    badgeColor: "bg-secondary-fixed text-on-secondary-fixed",
    title: "US Healthcare Revenue Cycle Management (RCM)",
    description: "Fast-track career transition for non-IT graduates into US healthcare MNCs with high job security, steady shifts, and rapid promotions.",
    highlights: {
      experience: "0 to 5 Years Experience",
      salary: "₹3.5 LPA to ₹8.5 LPA",
      codingRequired: "Zero Coding Required",
      placement: "Hyderabad & PAN India",
      documentation: "Provided for BGC Clearance"
    },
    points: [
      "US Healthcare Ecosystem: Payer, Provider & Clearinghouse EDI transactions",
      "Patient Eligibility & Benefits Verification: Copay, coinsurance & deductible calculations",
      "Medical Coding Fundamentals: ICD-10-CM diagnosis, CPT procedures & superbills",
      "AR Denial Management: Claims scrubber errors, appeals drafting & live calling simulations",
      "100% placement guidance with hiring partners like Optum, Cognizant, Omega"
    ]
  },
  fullstack: {
    id: "fullstack",
    enquiryTrack: "Full-Stack Web Development (Java/React/SQL)",
    badge: "Frontend + Backend",
    badgeColor: "bg-secondary-fixed text-on-secondary-fixed",
    title: "Full-Stack Web Development (Java)",
    description: "Build responsive web applications from the ground up, covering frontend fundamentals, modern React development, Java backend programming, and SQL databases.",
    highlights: {
      experience: "Beginner Friendly",
      salary: "Project-Based Learning",
      codingRequired: "Hands-On Coding",
      placement: "Frontend & Java Roles",
      documentation: "Projects & Interview Prep"
    },
    points: [
      "HTML & CSS: Semantic page structure, responsive layouts, and accessible styling",
      "Bootstrap & Tailwind CSS: Build and style responsive interfaces with popular CSS frameworks",
      "JavaScript: ES6+ fundamentals, DOM, asynchronous programming, and API integration",
      "React: Components, props, state, hooks, and building interactive single-page applications",
      "Java & SQL: Core Java, object-oriented programming, relational databases, queries, and JDBC",
      "Capstone Project: Connect a React frontend to a Java backend and SQL database"
    ]
  }
};

export const CAREER_STEPS = [
  {
    step: "01",
    title: "ATS Resume & Profile Revamp",
    desc: "Custom keyword optimization designed to sail through enterprise MNC recruiter filters for SAP, Salesforce, and Healthcare.",
    tag: "Score 95+ ATS",
    icon: "description",
    tagIcon: "check_circle",
    bg: "bg-primary-container text-on-primary"
  },
  {
    step: "02",
    title: "Technical Mock Drills",
    desc: "Rigorous 1-on-1 interview simulations with actively working senior SAP consultants and technical leads.",
    tag: "Recorded Feedback",
    icon: "interpreter_mode",
    tagIcon: "videocam",
    bg: "bg-primary text-on-primary"
  },
  {
    step: "03",
    title: "Live Project & Sandbox Hub",
    desc: "Hands-on practice on live SAP GUI / S/4HANA sandboxes and healthcare billing software simulators.",
    tag: "Live Portals",
    icon: "terminal",
    tagIcon: "folder_special",
    bg: "bg-secondary text-on-secondary"
  },
  {
    step: "04",
    title: "1-10 Yrs Documentation Support",
    desc: "Complete documentation support for 1 to 10 years experience cases to clear company background verification (BGC) smoothly.",
    tag: "BGC Clearance",
    icon: "verified_user",
    tagIcon: "security",
    bg: "bg-tertiary-fixed text-on-tertiary-fixed"
  }
];

export const FAQS = [
  {
    id: "faq-sap",
    question: "Do I need coding knowledge for SAP SD or SAP End User?",
    answer: "Zero coding required! SAP SD and SAP End User roles are 100% functional and business process-oriented. You work on standard SAP screens, transactions, and workflows. Any graduate (B.Com, B.Sc, BBA, B.Tech, Arts, MBA) can learn and get placed with ₹5 to ₹20 LPA packages in PAN India MNCs."
  },
  {
    id: "faq-doc",
    question: "How does the 1 to 10 years experience & documentation support work?",
    answer: "We provide comprehensive guidance and documentation support for candidates with career gaps or those looking to position 1 to 10 years of experience. We provide project deliverables, business scenario blueprints, client references, and interview preparation to help you clear MNC background checks (BGC) without issues."
  },
  {
    id: "faq-salary",
    question: "What is the expected salary package for SAP and other tracks?",
    answer: "For SAP (SD / End User / Functional), packages range from ₹5 LPA up to ₹20 LPA depending on your experience profile (1 to 10 years). For US Healthcare, packages start between ₹3.5 LPA to ₹8 LPA, and Salesforce tracks offer ₹6 LPA to ₹16 LPA in top PAN India MNCs."
  },
  {
    id: "faq-location",
    question: "Where is the institute located in Kukatpally, Hyderabad?",
    answer: "Our campus is centrally located in Kukatpally, Hyderabad (close to Kukatpally metro and bus stops). We offer both classroom batches at Kukatpally and live interactive online cohorts. Direct WhatsApp support is available at 7842839491."
  },
  {
    id: "faq-contact",
    question: "How do I enroll or get free career counseling?",
    answer: "Simply submit the enquiry form on this page or WhatsApp us at 7842839491. Your details will be sent directly to our admissions desk, and our senior mentor will review your profile and explain batch timings and fee structures."
  }
];

export const HEALTHCARE_SYLLABUS = [
  { week: "Weeks 1-2", topic: "US Healthcare Ecosystem & EDI Transactions", details: "Overview of US Healthcare, Payer vs Provider vs Clearinghouse dynamics, HIPAA privacy compliance, EDI transactions (837, 835, 270/271, 276/277)." },
  { week: "Weeks 3-4", topic: "Patient Registration & Eligibility Verification", details: "Demographic entry, Insurance eligibility verification, Prior authorization workflows, Co-pays, Co-insurance, and Deductibles calculation." },
  { week: "Weeks 5-6", topic: "Medical Coding Principles & Charge Entry", details: "ICD-10-CM diagnosis codes, CPT procedure codes, HCPCS, Superbills review, CMS-1500 (HCFA) and UB-04 institutional claim forms." },
  { week: "Weeks 7-8", topic: "Electronic Claim Submission & Payment Posting", details: "Clearinghouse scrubber rules, front-end vs back-end rejections, ERA/EOB posting, manual adjustments, payment reconciliation." },
  { week: "Weeks 9-10", topic: "Accounts Receivable (AR) & Denial Management", details: "AR aging buckets, denial codes (CO, PR, OA, PI), appeals drafting, live calling simulation, insurance escalation, capstone project." }
];

export const TECH_SYLLABUS = [
  {
    track: "Track 1: SAP SD & SAP End User (Zero Coding • ₹5 - 20 LPA)",
    modules: [
      "SAP ERP Overview: System Navigation, S/4HANA vs ECC architecture, GUI Customization",
      "SAP SD Enterprise Structure: Sales Organization, Distribution Channel, Division, Sales Area",
      "Master Data Management: Customer Master Data, Material Master, Customer-Material Info Records",
      "Sales Order Processing: Quotations, Inquiries, Standard Sales Orders, Special Orders",
      "Pricing Determination: Condition Technique, Pricing Procedures, Access Sequences, Condition Records",
      "Shipping & Delivery: Outbound Delivery, Picking, Packing, Goods Issue (PGI) workflows",
      "Billing & Invoicing: Invoices, Credit & Debit Memos, Revenue Account Determination",
      "SAP End User Operations: Day-to-day transactions, Purchase Orders, Vendor Invoices & Reconciliation",
      "Documentation & BGC Preparation: Real-time MNC project experience, blueprint docs, mock client calls"
    ]
  },
  {
    track: "Track 2: Salesforce Cloud Architecture (Admin & Dev)",
    modules: [
      "Salesforce Architecture: Standard & Custom Objects, Schema Builder, Relationships",
      "Security Model: Org-wide Defaults, Profiles, Permission Sets, Role Hierarchy, Sharing Rules",
      "Process Automation: Record-Triggered Flows, Screen Flows, Flow Orchestration",
      "Apex Programming: OOP Concepts, Triggers, Trigger Handler Frameworks, Test Classes",
      "Lightning Web Components (LWC): JavaScript ES6, Decorators, Wire Service, LMS & PubSub",
      "Integrations: REST & SOAP Web Services, Postman, Capstone enterprise project deployment"
    ]
  },
  {
    track: "Track 3: Full-Stack Web Development (Java)",
    modules: [
      "HTML: Semantic elements, accessible forms, tables, and page structure",
      "CSS: Selectors, box model, Flexbox, Grid, responsive design, and media queries",
      "Bootstrap & Tailwind CSS: Responsive layouts, utility classes, and reusable UI patterns",
      "JavaScript: ES6+, DOM events, modules, promises, async/await, and REST API requests",
      "React: JSX, components, props, state, hooks, forms, and single-page application patterns",
      "Core Java: Data types, control flow, methods, classes, object-oriented programming, collections, and exceptions",
      "SQL & Relational Databases: Schema design, CRUD queries, joins, constraints, and aggregation",
      "Java Backend: Build REST APIs with Spring Boot and connect to a SQL database using JDBC/JPA",
      "Capstone Project: Develop and present a full-stack application with a React UI and Java API"
    ]
  }
];
