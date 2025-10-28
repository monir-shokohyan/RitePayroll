import { ProductsCollectionType } from "../types";



export const productsMap: ProductsCollectionType = {
  ritebooks: {
    name: 'Ritebooks',
    info: 'A robust ERP solution combining accounting, inventory, POS, and manufacturing features to manage every aspect of business operations.',
    image: 'productsWelcome.png',
    features: [
      'Complete Accounting with Trial Balance, P&L, and Balance Sheet',
      'Inventory & Stock Management with Batch/Serial Control',
      'Multi-Branch and Multi-Currency Support',
      'POS with URA EFRIS Integration',
      'Manufacturing & Assembly Modules',
      'Route Sales & Distribution Management',
      'Bank Reconciliation & Cash Flow Reports',
      'User Role Permissions & Audit Trails'
    ],
    deploymentOption: {
      title: 'Deployment Options',
      description: 'Available in both Cloud and On-Premise versions.'
    },
    industriesServed: {
      title: 'Industries Served',
      description: 'Retail, Wholesale, Distribution, Manufacturing, Services.'
    },
    brochureLink: 'ritebooks.pdf'
  },
  "ritebooks-express": {
    name: 'Ritebooks Express',
    info: 'An affordable and simplified version of Ritebooks tailored for startups and small businesses.',
    image: 'productsWelcome.png',
    features: [
      'Basic Accounting – Sales, Purchases, Receipts, Payments',
      'Inventory Control with Reorder Alerts',
      'POS Billing with Barcode Scanning',
      'Essential Reports for Profit & Stock Monitoring',
      'Multi-User Access',
      'Cloud Hosting Option'
    ],
    deploymentOption: {
      title: 'Deployment Options',
      description: 'Cloud and On-Premise options.'
    },
    industriesServed: {
      title: 'Industries Served',
      description: 'Small Retailers, Shops, Pharmacies, and Service Businesses.'
    },
    brochureLink: 'ritebooks-express.pdf'
  },
  "ritebooks-pocket": {
    name: 'Ritebooks Pocket',
    info: 'An Android-based accounting and POS app that provides small business owners full control from their smartphone or POS device.',
    image: 'productsWelcome.png',
    features: [
      'Sales, Purchase & Expense Entry',
      'Daily Summary Dashboard',
      'POS Billing & Receipt Printing',
      'Offline Functionality with Cloud Sync',
      'Customer & Supplier Tracking',
      'Optional URA EFRIS Integration'
    ],
    deploymentOption: {
      title: 'Deployment Options',
      description: 'Android Mobile & Tablet Application.'
    },
    industriesServed: {
      title: 'Industries Served',
      description: 'Micro & Small Businesses, Field Traders, Mobile Vendors.'
    }
  },
  riteroutes: {
    name: 'RiteRoutes',
    info: 'A comprehensive field sales and distribution management system for FMCG companies and distributors.',
    image: 'productsWelcome.png',
    features: [
      'Route Planning & Sales Rep Assignment',
      'GPS Tracking & Real-Time Monitoring',
      'Order Booking & Delivery Confirmation',
      'Inventory and Van Stock Management',
      'Payment Collection Tracking',
      'Performance Dashboards & Reports'
    ],
    deploymentOption: {
      title: 'Deployment Options',
      description: 'Web + Mobile App (Android).'
    },
    industriesServed: {
      title: 'Industries Served',
      description: 'Distribution, FMCG, Beverages, Pharmaceuticals.'
    }
  },
  "rite-payroll": {
    name: 'Rite Payroll',
    info: 'A complete payroll management system ensuring compliance, efficiency, and automation of HR processes.',
    image: 'productsWelcome.png',
    features: [
      'Automated Payroll Calculations',
      'PAYE, NSSF & LST Compliance',
      'Employee Self-Service (ESS)',
      'Loan & Advance Management',
      'Multi-Branch Payroll',
      'Cloud Backup & Report Generation'
    ],
    deploymentOption: {
      title: 'Deployment Options',
      description: 'Available in Cloud & On-Premise.'
    },
    industriesServed: {
      title: 'Industries Served',
      description: 'Corporate, NGOs, Manufacturing, Retail Chains.'
    }
  },
  riteeats: {
    name: 'RiteEats',
    info: 'Comprehensive restaurant and bar management software supporting fine dining, takeaway, delivery, and events.',
    image: 'productsWelcome.png',
    features: [
      'Table, Takeaway & Delivery Management',
      'Kitchen Display System (KDS)',
      'Recipe & Cost Control',
      'Queue & Reservation Management',
      'Inventory & Waste Tracking',
      'Online Ordering & Loyalty Integration',
      'Event & Buffet Management',
      'Waiter/Captain Mobile App',
      'URA EFRIS Integrated Billing'
    ],
    deploymentOption: {
      title: 'Deployment Options',
      description: 'Cloud and Licensed Installation.'
    },
    industriesServed: {
      title: 'Industries Served',
      description: 'Restaurants, Bars, Cafés, Hotels, Event Venues.'
    }
  },
  justpay: {
    name: 'JustPay',
    info: 'A multi-vendor mobile loyalty platform enabling businesses to reward and retain customers effortlessly.',
    image: 'productsWelcome.png',
    features: [
      'Digital Membership Creation',
      'Loyalty Savings Wallet (Non-Point Based)',
      'Multi-Outlet Redemption System',
      'Real-Time Offers & Notifications',
      'Integration with POS & Ritebooks',
      'Customer Insights & Analytics'
    ],
    deploymentOption: {
      title: 'Deployment Options',
      description: 'Mobile App + Cloud Dashboard.'
    },
    industriesServed: {
      title: 'Industries Served',
      description: 'Supermarkets, Retail Chains, Salons, Pharmacies, Restaurants.'
    }
  },
  "tally-prime": {
    name: 'Tally Prime',
    info: 'Lotus is Uganda’s leading Tally Prime partner offering customization, support, and cloud solutions.',
    image: 'productsWelcome.png',
    features: [
      'Full Accounting & Financial Management',
      'VAT & URA EFRIS Compliance',
      'Multi-Currency & Cost Centre Reporting',
      'Inventory & Reconciliation',
      'Tally Customization Services',
      'Remote Access via Tally Cloud'
    ],
    deploymentOption: {
      title: 'Deployment Options',
      description: 'Desktop & Cloud.'
    },
    industriesServed: {
      title: 'Industries Served',
      description: 'Accountants, Auditors, SMEs, Enterprises.'
    }
  }
};