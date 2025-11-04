import { IconType } from 'react-icons'
import { BsTelephoneFill } from 'react-icons/bs'
import {
  FaCloudDownloadAlt,
  FaHandsHelping,
  FaMobileAlt,
  FaPhoneAlt,
  FaReply,
  FaShieldAlt,
} from 'react-icons/fa'
import {
  FaCartShopping,
  FaCloud,
  FaComputer,
  FaGlobe,
  FaLaptop,
  FaLocationDot,
  FaTrophy,
} from 'react-icons/fa6'
import { GrPowerCycle } from 'react-icons/gr'
import { HiLightBulb } from 'react-icons/hi'
import { IoIosTime } from 'react-icons/io'
import { LuGlobe } from 'react-icons/lu'
import { MdEmail, MdRemoveRedEye, MdTouchApp } from 'react-icons/md'
import { TbTargetArrow } from 'react-icons/tb'

import { Paths } from '@shared/api/paths'

import { SavedColors } from './contant'
import { Products } from './productsMap'

export interface sectionType {
  name: string
  description?: string
  description1?: string
  description2?: string
  description3?: string
  star?: number
  imageUrl?: string
  position?: string
  icon?: IconType
  ariaLabel?: string
  seo?: { title: string; description: string }
  features?: string[]
  color?: string
  imgUrl?: string
  to?: string
  alt?: string
}

export interface TotalDataItem {
  name: string
  title?: string
  imageUrl?: string
  description?: string
  descriptionSecond?: string
  target: string
  section?: sectionType[]
  sectionSecond?: sectionType[]
  sectionId?: string
  features: sectionType[]
  industries?: string[]
  deployment?: string[]
  brochureLink?: string
}

export const TotalData: TotalDataItem[] = [
  {
    name: 'Welcome',
    description: 'Welcome to Lotus Soft Technologies Ltd.',
    title:
      "Empowering Africa's Businesses with Smart, ScalableSoftware & Technology Solutions.",
    descriptionSecond:
      "Simplifying operations, automating workflows, and driving growth through innovation. Welcome to Lotus Soft Technologies Ltd., Uganda's leading provider of business software and IT solutions.",
    target: '/',
    sectionId: 'dashboard-welcome-section',
    features: [],
  },
  {
    name: 'About Us',
    target: '/',
    title:
      'About Lotus Soft Technologies Ltd.',
    description:
      'Mr. Nikhil Shah, Founder and Managing Director of Lotus Soft Technologies Ltd., is a visionary entrepreneur and technology innovator who has played a defining role in shaping Uganda’s software landscape for more than 25 years.With a deep understanding of accounting, inventory, and business management processes, Mr. Shah transformed Lotus from a small local software initiative into one of Uganda’s leading technology companies — trusted by thousands of businesses across retail, manufacturing, and distribution sectors. His leadership and technical foresight have driven the creation of flagship products such as Ritebooks, RiteEats, RiteRoutes, RitePayroll, and JustPay, which today set new benchmarks for business automation, mobility, and integrated financial management across Africa. Known for his hands-on approach and relentless pursuit of innovation, he continues to lead Lotus into the next era of digital transformation — expanding into AI-driven automation, cloud computing, digital payments integration, and global connectivity to make African businesses more efficient, adaptable, and competitive on the world stage.',
    descriptionSecond:
      'Co-Director Mrs. Shital Shah plays a pivotal role in the strategic direction and market expansion of Lotus Soft Technologies. Leveraging her deep knowledge in Accounting and Finance, she has been instrumental in bridging business needs with software innovation, leading successful product positioning and marketing strategies across Uganda and beyond. She stands as a symbol of women’s empowerment in technology and leadership, inspiring others to drive change through innovation.',
    section: [
      { name: 'Innovation' },
      { name: 'Customer Success' },
      { name: 'Continuous Improvement' },
    ],
    sectionSecond: [{ name: 'Integrity' }, { name: 'Collaboration' }],
    sectionId: 'dashboard-about-section',
    features: [
      {
        name: 'Vision',
        description:
          'To be the most trusted provider of comprehensive business software and IT solutions across Africa and beyond.',
        icon: MdRemoveRedEye,
        ariaLabel: 'vision',
      },
      {
        name: 'Mission',
        description:
          'To simplify, automate, and empower businesses with scalable technology solutions that drive growth and sustainability.',
        icon: TbTargetArrow,
        ariaLabel: 'Mission',
      },
    ],
  },
  {
    name: 'Products',
    title:
      'Lotus Soft Technologies offers a suite of integrated business software products designed for diverse industries.',
    target: '/',
    sectionId: 'dashboard-products-section',
    features: [
      {
        name: 'RITEBOOKS',
        description:
          'A robust ERP solution combining accounting, inventory, POS, and manufacturing features to manage every aspect of business operations.',
        features: [
          'POS with URA EFRIS Integration',
          'User Role Permissions & Audit Trails',
          ' Manufacturing & Assembly Modules',
        ],
        color: SavedColors.productBlue,
        imgUrl: '/products/Ritebooks.webp',
        to: '/products/ritebooks',
        alt: 'Ritebooks ERP software interface',
      },
      {
        name: 'JustPay',
        description:
          'A multi-vendor mobile loyalty platform enabling businesses to reward and retain customers effortlessly.',
        features: [
          'Real-Time Offers & Notifications',
          'Integration with POS & Ritebooks',
          'Multi-Branch and Multi-Currency Support',
        ],
        color: SavedColors.productOrange,
        imgUrl: '/products/Just-pay.webp',
        to: '/products/justpay',
        alt: 'JustPay mobile loyalty platform',
      },
      {
        name: 'RITEPAYROLL',
        description:
          'A complete payroll management system ensuring compliance, efficiency, and automation of HR processes.',
        features: [
          'PAYE, NSSF & LST Compliance',
          'Employee Self-Service (ESS)',
          'Loan & Advance Management',
        ],
        color: SavedColors.productGreen,
        imgUrl: '/products/Rite-payroll.webp',
        to: '/products/rite-payroll',
        alt: 'RitePayroll management system dashboard',
      },
      {
        name: 'RITEBOOKS POCKET',
        description:
          'An Android-based accounting and POS app that provides small business owners full control from their smartphone or POS device.',
        features: [
          'Sales, Purchase & Expense Entry',
          'Daily Summary Dashboard',
          'POS Billing & Receipt Printing',
        ],
        color: SavedColors.productRedBrown,
        imgUrl: '/products/Ritebooks-pocket.webp',
        to: '/products/ritebooks-pocket',
        alt: 'Ritebooks Pocket mobile app interface',
      },
      {
        name: 'RITEEATS',
        description:
          'Comprehensive restaurant and bar management software supporting fine dining, takeaway, delivery, and events.',
        features: [
          'Table, Takeaway & Delivery Management',
          'Kitchen Display System (KDS)',
          'Recipe & Cost Control',
        ],
        color: SavedColors.productRed,
        imgUrl: '/products/Rite-eats.webp',
        to: '/products/riteeats',
        alt: 'RiteEats restaurant management software',
      },
      {
        name: 'RITEROUTES',
        description:
          'A comprehensive field sales and distribution management system for FMCG companies and distributors.',
        features: [
          'Route Planning & Sales Rep Assignment',
          'GPS Tracking & Real-Time Monitoring',
          'Order Booking & Delivery Confirmation',
        ],
        color: SavedColors.productViolet,
        imgUrl: '/products/Rite-routes.webp',
        to: '/products/riteroutes',
        alt: 'RiteRoutes field sales tracking interface',
      },
      {
        name: 'RITEBOOKS EXPRESS',
        description:
          'An affordable and simplified version of Ritebooks tailored for startups and small businesses.',
        features: [
          'Basic Accounting – Sales, Purchases, Receipts, Payments',
          'Inventory Control with Reorder Alerts',
          'POS Billing with Barcode Scanning',
        ],
        color: SavedColors.productBrown,
        imgUrl: '/products/Ritebooks-express.webp',
        to: '/products/ritebooks-express',
        alt: 'Ritebooks Express accounting software',
      },
      {
        name: 'TallyPrime',
        description:
          "Lotus is Uganda's leading Tally Prime partner offering customization, support, and cloud solutions.",
        features: [
          'Full Accounting & Financial Management',
          'VAT & URA EFRIS Compliance',
          'Multi-Currency & Cost Centre Reporting',
        ],
        color: SavedColors.productPink,
        imgUrl: '/products/Tally-prime.webp',
        to: '/products/tally-prime',
        alt: 'TallyPrime accounting software interface',
      },
    ],
  },
  {
    name: 'Services',
    title: 'What We Offer',
    target: '/',
    sectionId: 'dashboard-services-section',
    features: [
      {
        icon: FaLaptop,
        name: 'Custom Software Development',
        description:
          'Tailor-made ERP, CRM, and workflow systems designed to fit unique business processes.',
        seo: {
          title: 'Custom Software Development Uganda',
          description:
            'Tailor-made ERP, CRM, and workflow systems designed to fit unique business processes.',
        },
      },
      {
        icon: FaMobileAlt,
        name: 'Custom Mobile Application Development',
        description:
          'Develop Android and iOS apps that improve business mobility and customer engagement.',
        seo: {
          title: 'Custom Mobile Application Development Uganda',
          description:
            'Develop Android and iOS apps that improve business mobility and customer engagement.',
        },
      },
      {
        icon: MdTouchApp,
        name: 'URA EFRIS Integration',
        description:
          'Comprehensive EFRIS fiscalization setup, invoice automation, and system synchronization.',
        seo: {
          title: 'URA EFRIS Integration Uganda',
          description:
            'Comprehensive EFRIS fiscalization setup, invoice automation, and system synchronization.',
        },
      },
      {
        icon: FaCloudDownloadAlt,
        name: 'Tally Customization & Cloud Services',
        description:
          'Enhance Tally Prime with local compliance, custom modules, and remote access.',
        seo: {
          title: 'Tally Customization & Cloud Services Uganda',
          description:
            'Enhance Tally Prime with local compliance, custom modules, and remote access.',
        },
      },
      {
        icon: FaCloud,
        name: 'Cloud Hosting & Backup',
        description:
          'Secure hosting environments with regular data backup and recovery solutions.',
        seo: {
          title: 'Cloud Hosting & Backup Uganda',
          description:
            'Secure hosting environments with regular data backup and recovery solutions.',
        },
      },
      {
        icon: FaGlobe,
        name: 'Website Development & Hosting',
        description:
          'Responsive, SEO-optimized websites with integrated hosting and maintenance.',
        seo: {
          title: 'Website Development & Hosting Uganda',
          description:
            'Responsive, SEO-optimized websites with integrated hosting and maintenance.',
        },
      },
      {
        icon: FaCartShopping,
        name: 'E-Commerce Integrations',
        description:
          'Shopify and WooCommerce integrations to sync your online store with accounting & inventory.',
        seo: {
          title: 'E-Commerce Integrations Uganda',
          description:
            'Shopify and WooCommerce integrations to sync your online store with accounting & inventory.',
        },
      },
      {
        icon: FaComputer,
        name: 'IT Infrastructure & Hardware Solutions',
        description:
          'Lotus provides enterprise-grade hardware solutions: HP & DELL servers, SOPHOS firewalls, POS systems, laptops, and antivirus solutions.',
        seo: {
          title: 'E-Commerce Integrations Uganda',
          description:
            'Shopify and WooCommerce integrations to sync your online store with accounting & inventory.',
        },
      },
    ],
  },
  {
    name: 'Contact Us',
    title: 'Get in Touch with Lotus Soft Technologies Ltd.',
    description:
      'We’re here to assist you with any inquiries about our products, services, or custom solutions. Reach out to us through the contact form below or use the provided information to connect with our team directly.',
    section: [
      { name: 'Reply within 24 hrs', icon: FaReply },
      { name: 'Telephone support', icon: BsTelephoneFill },
    ],
    sectionSecond: [
      {
        name: 'Open Hours',
        icon: IoIosTime,
        description: 'Mon - Fri',
        description1: '9:00AM - 06:00PM ',
        description2: 'Sat',
        description3: '9:00AM - 01:00PM ',
        ariaLabel: 'open hours icon',
      },
    ],
    target: '/',
    sectionId: 'dashboard-contact-section',
    features: [
      {
        name: 'Address',
        description: 'Plot 7/9, 2nd Street Industrial Area, Kampala, Uganda',
        icon: FaLocationDot,
        ariaLabel: 'Address details',
      },
      {
        name: 'Phone',
        description: '+256 755 818183',
        icon: FaPhoneAlt,
        ariaLabel: 'Phone details',
      },
      {
        name: 'Email',
        description: 'sales@lotus.co.ug',
        icon: MdEmail,
        ariaLabel: 'email details',
      },
      {
        name: 'Website',
        description: 'www.lotus.co.ug',
        icon: LuGlobe,
        ariaLabel: 'website details',
      },
    ],
  },
  {
    name: 'why choose us',
    title: 'We Are Pioneers In Business Software Solutions',
    description:
      'Lotus Soft Technologies Ltd. has been at the forefront of software innovation in Uganda for over 25 years. Founded with the mission to simplify business operations, our company, led by Mr. Nikhil Shah, has developed a comprehensive range of software solutions. Our expertise spans Accounting, Inventory, POS, and Customer Loyalty Management, with a strong focus on integrating with local systems like URA EFRIS and providing customized solutions for diverse business needs.',
    target: '/',
    sectionId: 'dashboard-whyus-section',
    features: [
      {
        icon: HiLightBulb,
        name: 'Innovation',
        description:
          'we pioneer cutting-edge software and IT solutions, empowering businesses in Uganda and beyond to thrive through creative, scalable technology.',
      },
      {
        icon: FaShieldAlt,
        name: 'Integrity',
        description:
          'we uphold unwavering honesty and ethical standards in every solution we deliver, building trust and reliability for our clients across Uganda and beyond.',
      },
      {
        icon: FaTrophy,
        name: 'Customer Success',
        description:
          'we prioritize your growth, delivering tailored software and IT solutions that drive efficiency, productivity, and success for businesses across Uganda.',
      },
      {
        icon: FaHandsHelping,
        name: 'Collaboration',
        description:
          'we partner closely with businesses across Uganda, co-creating tailored software solutions that drive shared success and growth.',
      },
      {
        icon: GrPowerCycle,
        name: 'Continuous Improvement',
        description:
          'we relentlessly pursue excellence, refining our software and IT solutions to deliver ever-evolving value and innovation for businesses across Uganda.',
      },
    ],
  },
  {
    name: 'Tesimonials',
    title: 'What they are saying about us',
    description:
      'As a trusted partner for Tally Accounting software and a leading integrator of URA EFRIS, we are committed to delivering top-notch software solutions that drive efficiency and growth. We value the descriptions and suggestions of our users, always listening attentively to their feedback to create the best products tailored to their needs.',
    target: '/',
    sectionId: 'dashboard-testimonial-section',
    features: [
      {
        star: 5,
        description:
          'Their software solutions are user-friendly and reliable, making our accounting processes smoother and more efficient.',
        imageUrl: 'testim-1.webp',
        name: 'Sara Willson',
        position: 'Data analyst',
      },
      {
        star: 5,
        description:
          'The integration with URA EFRIS has streamlined our compliance processes, making financial reporting effortless and reliable.',
        imageUrl: 'testim-2.webp',
        name: 'Saul Goodman',
        position: 'Ceo and founder',
      },
      {
        star: 5,
        description:
          'Their innovative solutions have significantly improved our HR workflows, enhancing team productivity and accuracy.',
        imageUrl: 'testim-3.webp',
        name: 'John Larson',
        position: 'HR Manager',
      },
      {
        star: 5,
        description:
          'The seamless integration with URA EFRIS and Tally has transformed our financial operations, saving us time and boosting accuracy.',
        imageUrl: 'testim-4.png',
        name: 'Emma Thompson',
        position: 'Finance Manager',
      },
      {
        star: 5,
        description:
          'Their software solutions are user-friendly and reliable, making our accounting processes smoother and more efficient.',
        imageUrl: 'testim-5.png',
        name: 'Michael Chen',
        position: 'Operations Director',
      },
    ],
  },

  {
    name: Products.Ritebooks,
    description:
      'A robust ERP solution combining accounting, inventory, POS, and manufacturing features to manage every aspect of business operations.',
    imageUrl: 'productsWelcome.png',
    features: [
      {
        name: 'Complete Accounting with Trial Balance, P&L, and Balance Sheet',
      },
      { name: 'Inventory & Stock Management with Batch/Serial Control' },
      { name: 'Multi-Branch and Multi-Currency Support' },
      { name: 'POS with URA EFRIS Integration' },
      { name: 'Manufacturing & Assembly Modules' },
      { name: 'Route Sales & Distribution Management' },
      { name: 'Bank Reconciliation & Cash Flow Reports' },
      { name: 'User Role Permissions & Audit Trails' },
    ],
    section: [
      {
        name: 'Deployment Options',
        description: 'Available in both Cloud and On-Premise versions.',
        icon: MdRemoveRedEye,
      },
      {
        name: 'Industries Served',
        description:
          'Retail, Wholesale, Distribution, Manufacturing, Services.',
        icon: TbTargetArrow,
      },
    ],
    brochureLink: 'ritebooks.pdf',
    target: Paths.Ritebooks,
  },
  {
    name: Products.Ritebooks_express,
    description:
      'An affordable and simplified version of Ritebooks tailored for startups and small businesses.',
    imageUrl: 'productsWelcome.png',
    features: [
      { name: 'Basic Accounting – Sales, Purchases, Receipts, Payments' },
      { name: 'Inventory Control with Reorder Alerts' },
      { name: 'POS Billing with Barcode Scanning' },
      { name: 'Essential Reports for Profit & Stock Monitoring' },
      { name: 'Multi-User Access' },
      { name: 'Cloud Hosting Option' },
    ],
    section: [
      {
        name: 'Deployment Options',
        description: 'Cloud and On-Premise options.',
        icon: MdRemoveRedEye,
      },
      {
        name: 'Industries Served',
        description:
          'Small Retailers, Shops, Pharmacies, and Service Businesses.',
        icon: TbTargetArrow,
      },
    ],
    brochureLink: 'ritebooks-express.pdf',
    target: Paths.Ritebooks_express,
  },
  {
    name: Products.Ritebooks_pocket,
    description:
      'An Android-based accounting and POS app that provides small business owners full control from their smartphone or POS device.',
    imageUrl: 'productsWelcome.png',
    features: [
      { name: 'Sales, Purchase & Expense Entry' },
      { name: 'Daily Summary Dashboard' },
      { name: 'POS Billing & Receipt Printing' },
      { name: 'Offline Functionality with Cloud Sync' },
      { name: 'Customer & Supplier Tracking' },
      { name: 'Optional URA EFRIS Integration' },
    ],
    section: [
      {
        name: 'Deployment Options',
        description: 'Android Mobile & Tablet Application.',
        icon: MdRemoveRedEye,
      },
      {
        name: 'Industries Served',
        description: 'Micro & Small Businesses, Field Traders, Mobile Vendors.',
        icon: TbTargetArrow,
      },
    ],
    brochureLink: '',
    target: Paths.Ritebooks_pocket,
  },
  {
    name: Products.Riteroutes,
    description:
      'A comprehensive field sales and distribution management system for FMCG companies and distributors.',
    imageUrl: 'productsWelcome.png',
    features: [
      { name: 'Route Planning & Sales Rep Assignment' },
      { name: 'GPS Tracking & Real-Time Monitoring' },
      { name: 'Order Booking & Delivery Confirmation' },
      { name: 'Inventory and Van Stock Management' },
      { name: 'Payment Collection Tracking' },
      { name: 'Performance Dashboards & Reports' },
    ],
    section: [
      {
        name: 'Deployment Options',
        description: 'Web + Mobile App (Android).',
        icon: MdRemoveRedEye,
      },
      {
        name: 'Industries Served',
        description: 'Distribution, FMCG, Beverages, Pharmaceuticals.',
        icon: TbTargetArrow,
      },
    ],
    brochureLink: '',
    target: Paths.Riteroutes,
  },
  {
    name: Products.Rite_payroll,
    description:
      'A complete payroll management system ensuring compliance, efficiency, and automation of HR processes.',
    imageUrl: 'productsWelcome.png',
    features: [
      { name: 'Automated Payroll Calculations' },
      { name: 'PAYE, NSSF & LST Compliance' },
      { name: 'Employee Self-Service (ESS)' },
      { name: 'Loan & Advance Management' },
      { name: 'Multi-Bream Payroll' },
      { name: 'Cloud Backup & Report Generation' },
    ],
    section: [
      {
        name: 'Deployment Options',
        description: 'Available in Cloud & On-Premise.',
        icon: MdRemoveRedEye,
      },
      {
        name: 'Industries Served',
        description: 'Corporate, NGOs, Manufacturing, Retail Chains.',
        icon: TbTargetArrow,
      },
    ],
    brochureLink: '',
    target: Paths.Rite_payroll,
  },
  {
    name: Products.Riteeats,
    description:
      'Comprehensive restaurant and bar management software supporting fine dining, takeaway, delivery, and events.',
    imageUrl: 'productsWelcome.png',
    features: [
      { name: 'Table, Takeaway & Delivery Management' },
      { name: 'Kitchen Display System (KDS)' },
      { name: 'Recipe & Cost Control' },
      { name: 'Queue & Reservation Management' },
      { name: 'Inventory & Waste Tracking' },
      { name: 'Online Ordering & Loyalty Integration' },
      { name: 'Event & Buffet Management' },
      { name: 'Waiter/Captain Mobile App' },
      { name: 'URA EFRIS Integrated Billing' },
    ],
    section: [
      {
        name: 'Deployment Options',
        description: 'Cloud and Licensed Installation.',
        icon: MdRemoveRedEye,
      },
      {
        name: 'Industries Served',
        description: 'Restaurants, Bars, Cafés, Hotels, Event Venues.',
        icon: TbTargetArrow,
      },
    ],
    brochureLink: '',
    target: Paths.Riteeats,
  },
  {
    name: Products.Justpay,
    description:
      'A multi-vendor mobile loyalty platform enabling businesses to reward and retain customers effortlessly.',
    imageUrl: 'productsWelcome.png',
    features: [
      { name: 'Digital Membership Creation' },
      { name: 'Loyalty Savings Wallet (Non-Point Based)' },
      { name: 'Multi-Outlet Redemption System' },
      { name: 'Real-Time Offers & Notifications' },
      { name: 'Integration with POS & Ritebooks' },
      { name: 'Customer Insights & Analytics' },
    ],
    section: [
      {
        name: 'Deployment Options',
        description: 'Mobile App + Cloud Dashboard.',
        icon: MdRemoveRedEye,
      },
      {
        name: 'Industries Served',
        description:
          'Supermarkets, Retail Chains, Salons, Pharmacies, Restaurants.',
        icon: TbTargetArrow,
      },
    ],
    brochureLink: '',
    target: Paths.Justpay,
  },
  {
    name: Products.Tally_prime,
    description:
      "Lotus is Uganda's leading Tally Prime partner offering customization, support, and cloud solutions.",
    imageUrl: 'productsWelcome.png',
    features: [
      { name: 'Full Accounting & Financial Management' },
      { name: 'VAT & URA EFRIS Compliance' },
      { name: 'Multi-Currency & Cost Centre Reporting' },
      { name: 'Inventory & Reconciliation' },
      { name: 'Tally Customization Services' },
      { name: 'Remote Access via Tally Cloud' },
    ],
    section: [
      {
        name: 'Deployment Options',
        description: 'Desktop & Cloud.',
        icon: MdRemoveRedEye,
      },
      {
        name: 'Industries Served',
        description: 'Accountants, Auditors, SMEs, Enterprises.',
        icon: TbTargetArrow,
      },
    ],
    brochureLink: '',
    target: Paths.Tally_prime,
  },
]
