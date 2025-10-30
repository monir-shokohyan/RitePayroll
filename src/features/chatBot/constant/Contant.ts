import { ImportantInfo } from '@shared/constants/companyInfo'
import { CompanyInfo, Products } from '../types'

export const companyInfo: CompanyInfo = {
  name: 'Lotus Soft Technologies Ltd.',
  experience: 'Over 25 years',
  clients: '1000+ clients across Uganda',
  founder: 'Mr. Nikhil Shah',
  coDirector: 'Mrs. Shital Shah',
  phone: '+256 755 818183',
  email: 'sales@lotus.co.ug',
  website: 'www.lotus.co.ug',
  address: 'Plot 7/9, 2nd Street Industrial Area, Kampala, Uganda',
  hours: 'Mon-Fri: 9:00 AM - 6:00 PM | Sat: 9:00 AM - 1:00 PM',
  facebook: ImportantInfo.facebookUrl,
  linkedin: ImportantInfo.linkedinUrl,
  github: ImportantInfo.githubUrl,

}

export const products: Products = {
  ritebooks: {
    name: 'Ritebooks',
    description:
      'A robust ERP solution combining accounting, inventory, POS, and manufacturing features to manage every aspect of business operations',
    features: [
      'Complete Accounting with Trial Balance, P&L, and Balance Sheet',
      'Inventory & Stock Management with Batch/Serial Control',
      'Multi-Branch and Multi-Currency Support',
      'POS with URA EFRIS Integration',
      'Manufacturing & Assembly Modules',
      'Route Sales & Distribution Management',
      'Bank Reconciliation & Cash Flow Reports',
      'User Role Permissions & Audit Trails',
    ],
    industries: 'Retail, Wholesale, Distribution, Manufacturing, Services',
    deployment: 'Cloud and On-Premise',
  },
  ritebooksExpress: {
    name: 'Ritebooks Express',
    description:
      'An affordable and simplified version of Ritebooks tailored for startups and small businesses',
    features: [
      'Basic Accounting – Sales, Purchases, Receipts, Payments',
      'Inventory Control with Reorder Alerts',
      'POS Billing with Barcode Scanning',
      'Essential Reports for Profit & Stock Monitoring',
      'Multi-User Access',
      'Cloud Hosting Option',
    ],
    industries: 'Small Retailers, Shops, Pharmacies, Service Businesses',
    deployment: 'Cloud and On-Premise',
  },
  ritebooksPocket: {
    name: 'Ritebooks Pocket',
    description:
      'An Android-based accounting and POS app that provides small business owners full control from their smartphone or POS device',
    features: [
      'Sales, Purchase & Expense Entry',
      'Daily Summary Dashboard',
      'POS Billing & Receipt Printing',
      'Offline Functionality with Cloud Sync',
      'Customer & Supplier Tracking',
      'Optional URA EFRIS Integration',
    ],
    industries: 'Micro & Small Businesses, Field Traders, Mobile Vendors',
    deployment: 'Android Mobile & Tablet Application',
  },
  riteRoutes: {
    name: 'RiteRoutes',
    description:
      'A comprehensive field sales and distribution management system for FMCG companies and distributors',
    features: [
      'Route Planning & Sales Rep Assignment',
      'GPS Tracking & Real-Time Monitoring',
      'Order Booking & Delivery Confirmation',
      'Inventory and Van Stock Management',
      'Payment Collection Tracking',
      'Performance Dashboards & Reports',
    ],
    industries: 'Distribution, FMCG, Beverages, Pharmaceuticals',
    deployment: 'Web + Mobile App (Android)',
  },
  ritePayroll: {
    name: 'Rite Payroll',
    description:
      'A complete payroll management system ensuring compliance, efficiency, and automation of HR processes',
    features: [
      'Automated Payroll Calculations',
      'PAYE, NSSF & LST Compliance',
      'Employee Self-Service (ESS)',
      'Loan & Advance Management',
      'Multi-Branch Payroll',
      'Cloud Backup & Report Generation',
    ],
    industries: 'Corporate, NGOs, Manufacturing, Retail Chains',
    deployment: 'Cloud and On-Premise',
  },
  riteEats: {
    name: 'RiteEats',
    description:
      'Comprehensive restaurant and bar management software supporting fine dining, takeaway, delivery, and events',
    features: [
      'Table, Takeaway & Delivery Management',
      'Kitchen Display System (KDS)',
      'Recipe & Cost Control',
      'Queue & Reservation Management',
      'Inventory & Waste Tracking',
      'Online Ordering & Loyalty Integration',
      'Event & Buffet Management',
      'Waiter/Captain Mobile App',
      'URA EFRIS Integrated Billing',
    ],
    industries: 'Restaurants, Bars, Cafés, Hotels, Event Venues',
    deployment: 'Cloud and Licensed Installation',
  },
  justPay: {
    name: 'JustPay',
    description:
      'A multi-vendor mobile loyalty platform enabling businesses to reward and retain customers effortlessly',
    features: [
      'Digital Membership Creation',
      'Loyalty Savings Wallet (Non-Point Based)',
      'Multi-Outlet Redemption System',
      'Real-Time Offers & Notifications',
      'Integration with POS & Ritebooks',
      'Customer Insights & Analytics',
    ],
    industries: 'Supermarkets, Retail Chains, Salons, Pharmacies, Restaurants',
    deployment: 'Mobile App + Cloud Dashboard',
  },
  tallyPrime: {
    name: 'Tally Prime',
    description:
      'Lotus is Uganda’s leading Tally Prime partner offering customization, support, and cloud solutions',
    features: [
      'Full Accounting & Financial Management',
      'VAT & URA EFRIS Compliance',
      'Multi-Currency & Cost Centre Reporting',
      'Inventory & Reconciliation',
      'Tally Customization Services',
      'Remote Access via Tally Cloud',
    ],
    industries: 'Accountants, Auditors, SMEs, Enterprises',
    deployment: 'Desktop & Cloud',
  },
}

export const services: string[] = [
  'Custom Software Development',
  'Custom Mobile Application Development',
  'URA EFRIS Integration',
  'Tally Customization & Cloud Services',
  'Cloud Hosting & Backup',
  'Website Development & Hosting',
  'E-Commerce Integrations',
  'IT Infrastructure & Hardware Solutions',
]
