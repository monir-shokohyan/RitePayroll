/* eslint-disable sonarjs/no-duplicate-string */
import { IconType } from 'react-icons'
import {
  FaAddressBook,
  FaArchway,
  FaBalanceScale,
  FaBell,
  FaBirthdayCake,
  FaBookOpen,
  FaBoxOpen,
  FaCashRegister,
  FaChartLine,
  FaChartPie,
  FaClipboardList,
  FaClock,
  FaCoffee,
  FaCreditCard,
  FaCubes,
  FaCut,
  FaFileAlt,
  FaFileInvoiceDollar,
  FaGift,
  FaGlassWhiskey,
  FaHamburger,
  FaHotel,
  FaMoneyBillWave,
  FaMusic,
  FaNetworkWired,
  FaPhoneAlt,
  FaShieldAlt,
  FaShoppingBag,
  FaStoreAlt,
  FaTable,
  FaUtensils,
  FaWarehouse,
} from 'react-icons/fa'
import { FaKitchenSet, FaLocationDot } from 'react-icons/fa6'
import { GrPowerCycle } from 'react-icons/gr'
import { LuGlobe } from 'react-icons/lu'
import {
  MdCardGiftcard,
  MdEmail,
  MdEvent,
  MdEventSeat,
  MdOutlineMonitor,
  MdQueue,
  MdRemoveRedEye,
  MdSmartphone,
} from 'react-icons/md'
import { TbTargetArrow } from 'react-icons/tb'

import { SavedColors } from './contant'

export interface EditionType {
  name: string
  description: string
  icon?: IconType
  editions?: Pick<SectionType, 'name' | 'description' | 'icon'>[]
}
export interface SectionType {
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
  editions?: EditionsType[]
  color?: string
  imgUrl?: string
  to?: string
  alt?: string
  isActive?: boolean
  target?: string
  distance?: number
  id?: number
}

interface Feature {
  name: string
  icon: IconType
}

interface EditionsType {
  name: string
  description: string
  bestFor: string
  imageSrc: string
  infoSectionBg: SavedColors
  featureSectionBg: SavedColors
  features: Feature[]
}
export interface TotalDataItem {
  name: string
  title?: string
  imageUrl?: string
  description?: string
  dTitle?: string
  overview?: string
  descriptionSecond?: string
  target: string
  section?: SectionType[]
  sectionSecond?: SectionType[]
  sectionId?: string
  features: SectionType[]
  industries?: string[]
  deployment?: string[]
  brochureLink?: string
  edition?: EditionType
  editions?: EditionsType[]
}

export const TotalData: TotalDataItem[] = [
  {
    name: 'Welcome',
    description: 'Welcome to the Rite Eats',
    title:
      "Empowering Africa's Businesses with Smart, ScalableSoftware & Technology Solutions.",
    descriptionSecond:
      'RiteEats is a complete Restaurant & Bar Management Software designed to digitally transform how restaurants, cafés, bars, clubs and food chains operate. Built with deep understanding of real hospitality workflows, RiteEats integrates point of sale billing, kitchen automation, inventory control, recipe management, customer engagement and full accounting into one powerful system.',
    target: '/',
    sectionId: 'dashboard-welcome-section',
    features: [],
  },
  {
    name: 'About Us',
    target: '/',
    title: 'About Lotus Soft Technologies Ltd.',
    description:
      ', Founder and Managing Director of Lotus Soft Technologies Ltd., is a visionary entrepreneur and technology innovator who has played a defining role in shaping Uganda’s software landscape for more than 25 years.With a deep understanding of accounting, inventory, and business management processes, Mr. Shah transformed Lotus from a small local software initiative into one of Uganda’s leading technology companies — trusted by thousands of businesses across retail, manufacturing, and distribution sectors. His leadership and technical foresight have driven the creation of flagship products such as Ritebooks, RiteEats, RiteRoutes, RitePayroll, and JustPay, which today set new benchmarks for business automation, mobility, and integrated financial management across Africa. Known for his hands-on approach and relentless pursuit of innovation, he continues to lead Lotus into the next era of digital transformation — expanding into AI-driven automation, cloud computing, digital payments integration, and global connectivity to make African businesses more efficient, adaptable, and competitive on the world stage.',
    descriptionSecond:
      ' plays a pivotal role in the strategic direction and market expansion of Lotus Soft Technologies. Leveraging her deep knowledge in Accounting and Finance, she has been instrumental in bridging business needs with software innovation, leading successful product positioning and marketing strategies across Uganda and beyond. She stands as a symbol of women’s empowerment in technology and leadership, inspiring others to drive change through innovation.',
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
    name: 'industries',
    dTitle: 'Explore',
    title: 'INDUSTRIES SERVED',
    target: '/',
    sectionId: 'dashboard-industries-section',
    features: [
      {
        name: 'Restaurants',
        icon: FaUtensils,
        ariaLabel: 'Restaurants industry',
        isActive: true,
      },
      {
        name: 'Cafés',
        icon: FaCoffee,
        ariaLabel: 'Cafés industry',
        isActive: true,
      },
      {
        name: 'Bars',
        icon: FaGlassWhiskey,
        ariaLabel: 'Bars industry',
        isActive: true,
      },
      {
        name: 'Clubs',
        icon: FaMusic,
        ariaLabel: 'Clubs industry',
        isActive: true,
      },
      {
        name: 'Food Courts',
        icon: FaStoreAlt,
        ariaLabel: 'Food Courts industry',
        isActive: true,
      },
      {
        name: 'Fast Food Chains',
        icon: FaHamburger,
        ariaLabel: 'Fast Food Chains industry',
        isActive: true,
      },
      {
        name: 'QSR',
        icon: FaClock,
        ariaLabel: 'Quick Service Restaurants (QSR)',
        isActive: true,
      },
      {
        name: 'Takeaway Kitchens',
        icon: FaShoppingBag,
        ariaLabel: 'Takeaway Kitchens industry',
        isActive: true,
      },
      {
        name: 'Hotels',
        icon: FaHotel,
        ariaLabel: 'Hotels industry',
        isActive: true,
      },
      {
        name: 'Banquet Halls',
        icon: FaArchway,
        ariaLabel: 'Banquet Halls industry',
        isActive: true,
      },
      {
        name: 'Catering Businesses',
        icon: FaBirthdayCake,
        ariaLabel: 'Catering Businesses industry',
        isActive: true,
      },
    ],
  },
  {
    name: 'editions',
    dTitle: 'Discover',
    title: 'RITE EATS SOFTWARE VERSIONS',
    target: '/',
    sectionId: 'dashboard-industries-section',
    editions: [
      {
        name: 'RiteEats Essentials',
        description:
          'Fast and accurate front-end POS with seamless kitchen coordination',
        bestFor:
          'Best suited for small to medium restaurants, cafés and fast-food outlets.',
        imageSrc: '/editions/left.jpeg',
        infoSectionBg: SavedColors.Essentials,
        featureSectionBg: SavedColors.EssentialsFeature,
        features: [
          { name: 'Touch screen POS billing', icon: FaCashRegister },
          { name: 'Dine-in, takeaway & delivery modes', icon: FaShoppingBag },
          {
            name: 'KOT generation & remote kitchen/bar printing',
            icon: FaKitchenSet,
          },
          { name: 'Table & area management', icon: FaTable },
          {
            name: 'Multiple payment modes',
            icon: FaCreditCard,
          },
          { name: 'Bill splitting & partial billing', icon: FaCut },
          { name: 'Waiter/captain ordering support', icon: FaClipboardList },
        ],
      },
      {
        name: 'RiteEats Plus',
        description:
          'Everything in Essentials + complete inventory and recipe management',
        bestFor:
          'Best suited for growing restaurants, bars and multi-kitchen operations.',
        imageSrc: '/editions/center.jpeg',
        infoSectionBg: SavedColors.Plus,
        featureSectionBg: SavedColors.PlusFeature,
        features: [
          { name: 'Multi-warehouse inventory management', icon: FaWarehouse },
          { name: 'Multi-unit item handling', icon: FaCubes },
          { name: 'Recipe creation and management', icon: FaBookOpen },
          { name: 'Automatic recipe-wise stock deduction', icon: GrPowerCycle },
          { name: 'Recipe costing & food margin control', icon: FaChartLine },
          { name: 'Reorder level & stock alerts', icon: FaBell },
          { name: 'Time-based menu and promotions', icon: FaClock },
        ],
      },
      {
        name: 'RiteEats Ultimate',
        description:
          'Enterprise-grade solution with full accounting and multi-branch control',
        bestFor:
          'Best suited for food chains, franchises, hotels and enterprise hospitality businesses.',
        imageSrc: '/editions/right.jpeg',
        infoSectionBg: SavedColors.Ultimate,
        featureSectionBg: SavedColors.UltimateFeature,
        features: [
          { name: 'Complete accounting system', icon: FaBalanceScale },
          { name: 'Cash and credit control', icon: FaMoneyBillWave },
          {
            name: 'Customer & supplier ledger management',
            icon: FaAddressBook,
          },
          { name: 'VAT and tax compliance', icon: FaFileInvoiceDollar },
          {
            name: 'Profit & Loss, Balance Sheet & financial reporting',
            icon: FaFileAlt,
          },
          { name: 'Multi-branch consolidated accounts', icon: FaNetworkWired },
          { name: 'Advanced management dashboards', icon: FaChartPie },
        ],
      },
    ],
    features: [],
  },

  {
    name: 'features',
    dTitle: 'Standard',
    title: 'CORE FEATURES',
    target: '/',
    sectionId: 'dashboard-features-section',
    features: [
      {
        name: 'Smart POS Billing & Ordering',
        description:
          'Fast touch screen billing with multiple payment modes, modifiers, discounts and complimentary tracking.',
        icon: FaCashRegister,
        ariaLabel: 'Smart POS Billing and Ordering',
        isActive: true,
        distance: 0,
      },
      {
        name: 'Kitchen & Bar Automation',
        description:
          'Integrated KOT handling, multi-kitchen/bar printing and optimized order flow.',
        icon: FaKitchenSet,
        ariaLabel: 'Kitchen and Bar Automation',
        isActive: true,
        distance: 15,
      },
      {
        name: 'Table & Area Management',
        description:
          'Live floor management with table split, merge and shift operations.',
        icon: FaTable,
        ariaLabel: 'Table and Area Management',
        isActive: true,
        distance: 0,
      },
      {
        name: 'Inventory & Recipe Control',
        description:
          'Multi-warehouse stock, automatic recipe deduction and accurate food costing.',
        icon: FaBoxOpen,
        ariaLabel: 'Inventory and Recipe Control',
        isActive: true,
        distance: 60,
      },
      {
        name: 'Multi-Outlet & Multi-Currency',
        description:
          'Centralized system for multiple branches with consolidated reporting.',
        icon: FaStoreAlt,
        ariaLabel: 'Multi-Outlet and Multi-Currency Support',
        isActive: true,
        distance: 20,
      },
      {
        name: 'Promotions & Loyalty',
        description:
          'Time-based offers, discounts and customer reward programs.',
        icon: FaGift,
        ariaLabel: 'Promotions and Loyalty Programs',
        isActive: true,
        distance: 90,
      },
      {
        name: 'Security & Compliance',
        description:
          'Role-based access, till security, audit trails and VAT/tax compliant billing.',
        icon: FaShieldAlt,
        ariaLabel: 'Security and Compliance',
        isActive: true,
        distance: 30,
      },
    ],
  },
  {
    name: 'addon',
    dTitle: 'Enhance with',
    title: 'ADVANCED ADD-ON MODULES',
    target: '/',
    sectionId: 'dashboard-addon-section',
    features: [
      {
        id: 1,
        name: 'Kitchen Display System (KDS)',
        description:
          'Real-time paperless digital order display in kitchens and bars.',
        ariaLabel: 'Kitchen Display System',
        isActive: true,
        icon: MdOutlineMonitor,
      },
      {
        id: 2,
        name: 'Captain/Waiter App',
        description: 'Mobile table-side ordering on Android & iOS.',
        ariaLabel: 'Captain and Waiter App',
        isActive: true,
        icon: MdSmartphone,
      },
      {
        id: 3,
        name: 'Customer Loyalty Management',
        description: 'Reward programs, points, visits and targeted promotions.',
        ariaLabel: 'Customer Loyalty Management',
        isActive: true,
        icon: MdCardGiftcard,
      },
      {
        id: 4,
        name: 'Online Table Reservations',
        description: 'Digital advance bookings with real-time table control.',
        ariaLabel: 'Online Table Reservations',
        isActive: true,
        icon: MdEventSeat,
      },
      {
        id: 5,
        name: 'Token & Queue Management',
        description: 'High-speed queue handling for fast service counters.',
        ariaLabel: 'Token and Queue Management',
        isActive: true,
        icon: MdQueue,
      },
      {
        id: 6,
        name: 'Event Management System',
        description:
          'Banquet, party and corporate event billing and profitability control.',
        ariaLabel: 'Event Management System',
        isActive: true,
        icon: MdEvent,
      },
    ],
  },
  {
    name: 'contact us',
    dTitle: 'Have a Question ?',
    title: 'CONTACT US',
    description:
      'To request a quote or want to meet up for coffee. contact us directly or fill up the form and we will get back to you promptly.',
    target: '/',
    sectionId: 'dashboard-contact-section',
    features: [
      {
        name: 'Phone',
        description: '+256 755 818183',
        target: 'tel:+256755818183',
        icon: FaPhoneAlt,
        ariaLabel: 'Phone details',
        isActive: true,
      },
      {
        name: 'Email',
        description: 'sales@lotus.co.ug',
        target: 'mailto:sales@lotus.co.ug',
        icon: MdEmail,
        ariaLabel: 'email details',
        isActive: true,
      },
      {
        name: 'Website',
        description: 'www.lotus.co.ug',
        target: 'https://www.lotus.co.ug',
        icon: LuGlobe,
        ariaLabel: 'website details',
        isActive: true,
      },
      {
        name: 'Address',
        description: 'Plot 7/9, 2nd Street Industrial Area, Kampala, Uganda',
        icon: FaLocationDot,
        ariaLabel: 'Address details',
        isActive: false,
      },
    ],
  },
]
