export interface TotalDataItem {
  title: string;
  description: string;
  target: string;
  section?: string;
  features: string[];
  industries?: string[];
  deployment?: string[];
}

export const TotalData:TotalDataItem[] = [
  {
    title: "Home Page",
    description: "Empowering Africa’s Businesses with Smart, Scalable Software & Technology Solutions. Simplifying operations, automating workflows, and driving growth through innovation. Welcome to Lotus Soft Technologies Ltd., Uganda’s leading provider of business software and IT solutions. Trusted by 1000+ retailers, distributors, manufacturers, and service providers across Uganda.",
    target: "/",
    section: 'dashboard-welcome-section',
    features: [
      "Unified ecosystem of solutions covering Accounting, Inventory, POS, Payroll, Route Sales, Restaurant Management, Loyalty Programs, and Hardware Infrastructure"
    ]
  },
  {
    title: "About Us",
    description: "Lotus Soft Technologies Ltd. has been a trusted name in Uganda’s software industry for over 25 years. Founded by Mr. Nikhil Shah, Lotus has consistently delivered innovative business software solutions, helping organizations simplify processes, improve productivity, and ensure compliance with evolving market standards. Co-Directors Mrs. Shital Shah plays a pivotal role in strategic direction and market expansion, leveraging her expertise in Accounting and Finance.",
    target: "/",
    section: 'dashboard-about-section',
    features: [
      "Vision: To be the most trusted provider of comprehensive business software and IT solutions across Africa and beyond.",
      "Mission: To simplify, automate, and empower businesses with scalable technology solutions that drive growth and sustainability.",
      "Core Values: Innovation, Integrity, Customer Success, Collaboration, Continuous Improvement"
    ]
  },
  {
    title: "Ritebooks",
    description: "A robust ERP solution combining accounting, inventory, POS, and manufacturing features to manage every aspect of business operations.",
    target: "/products/ritebooks",
    features: [
      "Complete Accounting with Trial Balance, P&L, and Balance Sheet",
      "Inventory & Stock Management with Batch/Serial Control",
      "Multi-Branch and Multi-Currency Support",
      "POS with URA EFRIS Integration",
      "Manufacturing & Assembly Modules",
      "Route Sales & Distribution Management",
      "Bank Reconciliation & Cash Flow Reports",
      "User Role Permissions & Audit Trails"
    ],
    industries: ["Retail", "Wholesale", "Distribution", "Manufacturing", "Services"],
    deployment: ["Cloud", "On-Premise"]
  },
  {
    title: "Ritebooks Express",
    description: "An affordable and simplified version of Ritebooks tailored for startups and small businesses.",
    target: "/products/ritebooks-express",
    features: [
      "Basic Accounting – Sales, Purchases, Receipts, Payments",
      "Inventory Control with Reorder Alerts",
      "POS Billing with Barcode Scanning",
      "Essential Reports for Profit & Stock Monitoring",
      "Multi-User Access",
      "Cloud Hosting Option"
    ],
    industries: ["Small Retailers", "Shops", "Pharmacies", "Service Businesses"],
    deployment: ["Cloud", "On-Premise"]
  },
  {
    title: "Ritebooks Pocket",
    description: "An Android-based accounting and POS app that provides small business owners full control from their smartphone or POS device.",
    target: "/products/ritebooks-pocket",
    features: [
      "Sales, Purchase & Expense Entry",
      "Daily Smmary Dashboard",
      "POS Billing & Receipt Printing",
      "Offline Functionality with Cloud Sync",
      "Customer & Supplier Tracking",
      "Optional URA EFRIS Integration"
    ],
    industries: ["Micro & Small Businesses", "Field Traders", "Mobile Vendors"],
    deployment: ["Android Mobile", "Tablet Application"]
  },
  {
    title: "RiteRoutes",
    description: "A comprehensive field sales and distribution management system for FMCG companies and distributors.",
    target: "/products/riteroutes",
    features: [
      "Route Planning & Sales Rep Assignment",
      "GPS Tracking & Real-Time Monitoring",
      "Order Booking & Delivery Confirmation",
      "Inventory and Van Stock Management",
      "Payment Collection Tracking",
      "Performance Dashboards & Reports"
    ],
    industries: ["Distribution", "FMCG", "Beverages", "Pharmaceuticals"],
    deployment: ["Web", "Mobile App (Android)"]
  },
  {
    title: "Rite Payroll",
    description: "A complete payroll management system ensuring compliance, efficiency, and automation of HR processes.",
    target: "/products/rite-payroll",
    features: [
      "Automated Payroll Calculations",
      "PAYE, NSSF & LST Compliance",
      "Employee Self-Service (ESS)",
      "Loan & Advance Management",
      "Multi-Branch Payroll",
      "Cloud Backup & Report Generation"
    ],
    industries: ["Corporate", "NGOs", "Manufacturing", "Retail Chains"],
    deployment: ["Cloud", "On-Premise"]
  },
  {
    title: "RiteEats",
    description: "Comprehensive restaurant and bar management software supporting fine dining, takeaway, delivery, and events.",
    target: "/products/riteeats",
    features: [
      "Table, Takeaway & Delivery Management",
      "Kitchen Display System (KDS)",
      "Recipe & Cost Control",
      "Queue & Reservation Management",
      "Inventory & Waste Tracking",
      "Online Ordering & Loyalty Integration",
      "Event & Buffet Management",
      "Waiter/Captain Mobile App",
      "URA EFRIS Integrated Billing"
    ],
    industries: ["Restaurants", "Bars", "Cafés", "Hotels", "Event Venues"],
    deployment: ["Cloud", "Licensed Installation"]
  },
  {
    title: "JustPay",
    description: "A multi-vendor mobile loyalty platform enabling businesses to reward and retain customers effortlessly.",
    target: "/products/justpay",
    features: [
      "Digital Membership Creation",
      "Loyalty Savings Wallet (Non-Point Based)",
      "Multi-Outlet Redemption System",
      "Real-Time Offers & Notifications",
      "Integration with POS & Ritebooks",
      "Customer Insights & Analytics"
    ],
    industries: ["Supermarkets", "Retail Chains", "Salons", "Pharmacies", "Restaurants"],
    deployment: ["Mobile App", "Cloud Dashboard"]
  },
  {
    title: "Tally Prime",
    description: "Lotus is Uganda’s leading Tally Prime partner offering customization, support, and cloud solutions.",
    target: "/products/tally-prime",
    features: [
      "Full Accounting & Financial Management",
      "VAT & URA EFRIS Compliance",
      "Multi-Currency & Cost Centre Reporting",
      "Inventory & Reconciliation",
      "Tally Customization Services",
      "Remote Access via Tally Cloud"
    ],
    industries: ["Accountants", "Auditors", "SMEs", "Enterprises"],
    deployment: ["Desktop", "Cloud"]
  },
  {
    title: "Custom Software Development",
    description: "Tailor-made ERP, CRM, and workflow systems designed to fit unique business processes.",
    target: "/",
    section: 'dashboard-services-section',
    features: []
  },
  {
    title: "Custom Mobile Application Development",
    description: "Develop Android and iOS apps that improve business mobility and customer engagement.",
    target: "/",
    section: 'dashboard-services-section',
    features: []
  },
  {
    title: "URA EFRIS Integration",
    description: "Comprehensive EFRIS fiscalization setup, invoice automation, and system synchronization.",
    target: "/",
    section: 'dashboard-services-section',
    features: []
  },
  {
    title: "Tally Customization & Cloud Services",
    description: "Enhance Tally Prime with local compliance, custom modules, and remote access.",
    target: "/",
    section: 'dashboard-services-section',
    features: []
  },
  {
    title: "Cloud Hosting & Backup",
    description: "Secure hosting environments with regular data backup and recovery solutions.",
    target: "/",
    section: 'dashboard-services-section',
    features: []
  },
  {
    title: "Website Development & Hosting",
    description: "Responsive, SEO-optimized websites with integrated hosting and maintenance.",
    target: "/",
    section: 'dashboard-services-section',
    features: []
  },
  {
    title: "E-Commerce Integrations",
    description: "Shopify and WooCommerce integrations to sync your online store with accounting & inventory.",
    target: "/",
    section: 'dashboard-services-section',
    features: []
  },
  {
    title: "IT Infrastructure & Hardware Solutions",
    description: "Enterprise-grade hardware solutions including HP & DELL servers, SOPHOS firewalls, POS systems, laptops, and antivirus solutions. Services include server configuration, firewall setup, network cabling, maintenance, and Annual Maintenance Contracts (AMCs).",
    target: "/",
    section: 'dashboard-services-section',
    features: [
      "HP & DELL servers",
      "SOPHOS firewalls",
      "POS systems",
      "Laptops",
      "Antivirus solutions",
      "Server configuration",
      "Firewall setup",
      "Network cabling",
      "Maintenance",
      "Annual Maintenance Contracts (AMCs)"
    ]
  },
  {
    title: "Contact Us",
    description: "Get in touch with Lotus Soft Technologies Ltd. for business software, hardware, and cloud services. Located at Plot 7/9, 2nd Street Industrial Area, Kampala, Uganda.",
    target: "/",
    section: 'dashboard-contact-section',
    features: [
      "Address: Plot 7/9, 2nd Street Industrial Area, Kampala, Uganda",
      "Phone: +256 755 818183",
      "Email: sales@lotus.co.ug",
      "Business Hours: Mon–Fri: 9:00 AM – 6:00 PM | Sat: 9:00 AM – 1:00 PM"
    ]
  }
];