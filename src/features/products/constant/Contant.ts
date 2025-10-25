import { SavedColors } from "@shared/constants";

interface ProductsMapType {
  title: string,
  description: string,
  features: string[],
  color: string,
  imgUrl: string,
  to: string
}
export const productsMap: ProductsMapType[] = [
    {
      title: "RITEBOOKS",
      description: "A robust ERP solution combining accounting, inventory, POS, and manufacturing features to manage every aspect of business operations.",
      features: [
        "POS with URA EFRIS Integration",
        "User Role Permissions & Audit Trails",
        " Manufacturing & Assembly Modules"
      ],
      color: SavedColors.productBlue,
      imgUrl: '/products/Ritebooks.png',
      to: '/products/ritebooks',
    },
    {
      title: "JustPay",
      description: "A multi-vendor mobile loyalty platform enabling businesses to reward and retain customers effortlessly.",
      features: [
        "Real-Time Offers & Notifications",
        "Integration with POS & Ritebooks",
        "Multi-Branch and Multi-Currency Support"
      ],
      color: SavedColors.productOrange,
      imgUrl: '/products/Just-pay.png',
      to: '/products/justpay',
    },
    {
      title: "RITEPAYROLL",
      description: "A complete payroll management system ensuring compliance, efficiency, and automation of HR processes.",
      features: [
        "PAYE, NSSF & LST Compliance",
        "Employee Self-Service (ESS)",
        "Loan & Advance Management"
      ],
      color: SavedColors.productGreen,
      imgUrl: '/products/Rite-payroll.png',
      to: '/products/rite-payroll',
    },
    {
      title: "RITEBOOKS POCKET",
      description: "An Android-based accounting and POS app that provides small business owners full control from their smartphone or POS device.",
      features: [
        "Sales, Purchase & Expense Entry",
        "Daily Summary Dashboard",
        "POS Billing & Receipt Printing"
      ],
      color: SavedColors.productRedBrown,
      imgUrl: '/products/Ritebooks-pocket.png',
      to: '/products/ritebooks-pocket',
    },
    {
      title: "RITEEATS",
      description: "Comprehensive restaurant and bar management software supporting fine dining, takeaway, delivery, and events.",
      features: [
        "Table, Takeaway & Delivery Management",
        "Kitchen Display System (KDS)",
        "Recipe & Cost Control"
      ],
      color: SavedColors.productRed,
      imgUrl: '/products/Rite-eats.png',
      to: '/products/riteeats',
    },
    {
      title: "RITEROUTES",
      description: "A comprehensive field sales and distribution management system for FMCG companies and distributors.",
      features: [
        "Route Planning & Sales Rep Assignment",
        "GPS Tracking & Real-Time Monitoring",
        "Order Booking & Delivery Confirmation"
      ],
      color: SavedColors.productViolet,
      imgUrl: '/products/Rite-routes.png',
      to: '/products/riteroutes',
    },
    {
      title: "RITEBOOKS EXPRESS",
      description: "An affordable and simplified version of Ritebooks tailored for startups and small businesses.",
      features: [
        "Basic Accounting – Sales, Purchases, Receipts, Payments",
        "Inventory Control with Reorder Alerts",
        "POS Billing with Barcode Scanning"
      ],
      color: SavedColors.productBrown,
      imgUrl: '/products/Ritebooks-express.png',
      to: '/products/ritebooks-express',
    },
    {
      title: "TallyPrime",
      description: "Lotus is Uganda's leading Tally Prime partner offering customization, support, and cloud solutions.",
      features: [
        "Full Accounting & Financial Management",
        "VAT & URA EFRIS Compliance",
        "Multi-Currency & Cost Centre Reporting"
      ],
      color: SavedColors.productPink,
      imgUrl: '/products/Tally-prime.png',
      to: '/products/tally-prime',
    }
];