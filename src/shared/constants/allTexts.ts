/* eslint-disable sonarjs/no-duplicate-string */
import { IconType } from 'react-icons'
import {
  FaAddressBook,
  FaArchway,
  FaBalanceScale,
  FaBan,
  FaBell,
  FaBirthdayCake,
  FaBookOpen,
  FaBoxOpen,
  FaBullhorn,
  FaCalendarCheck,
  FaCalendarPlus,
  FaCashRegister,
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaClipboardList,
  FaClock,
  FaClone,
  FaCoffee,
  FaCoins,
  FaConciergeBell,
  FaCreditCard,
  FaCubes,
  FaCut,
  FaDollarSign,
  FaEnvelope,
  FaExclamationTriangle,
  FaFileAlt,
  FaFileInvoice,
  FaFileInvoiceDollar,
  FaGift,
  FaGlassWhiskey,
  FaGlobe,
  FaHamburger,
  FaHeart,
  FaHistory,
  FaHotel,
  FaHourglassHalf,
  FaLayerGroup,
  FaList,
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaMoneyCheckAlt,
  FaMusic,
  FaNetworkWired,
  FaPaperPlane,
  FaPhoneAlt,
  FaRing,
  FaRoute,
  FaShieldAlt,
  FaShoppingBag,
  FaSmileBeam,
  FaStar,
  FaStoreAlt,
  FaSyncAlt,
  FaTable,
  FaTabletAlt,
  FaTachometerAlt,
  FaTasks,
  FaTicketAlt,
  FaTv,
  FaUserPlus,
  FaUsers,
  FaUsersCog,
  FaUtensils,
  FaVolumeUp,
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
  MdSmartphone,
} from 'react-icons/md'

import { Paths } from '@shared/api/paths'

import { Addon } from './addonsMap'
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
  imageAlt: string
  infoSectionBg: SavedColors
  featureSectionBg: SavedColors
  features: Feature[]
}
interface BestForType {
  label: string
  icon: IconType
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
  bestFor?: BestForType[]
  id?: Addon | string
}

export const TotalData: TotalDataItem[] = [
  {
    name: 'Welcome',
    description: 'Welcome to the RiteEats',
    title:
      "Empowering Africa's Businesses with Smart, ScalableSoftware & Technology Solutions.",
    descriptionSecond:
      'RiteEats is a complete Restaurant & Bar Management Software designed to digitally transform how restaurants, cafés, bars, clubs and food chains operate. Built with deep understanding of real hospitality workflows, RiteEats integrates point of sale billing, kitchen automation, inventory control, recipe management, customer engagement and full accounting into one powerful system.',
    target: '/',
    sectionId: 'dashboard-welcome-section',
    features: [
      { icon: FaCashRegister, name: 'Touch Screen\nPOS Billing' },
      { icon: FaUtensils, name: 'Kitchen & Bar Order\nAutomation' },
      { icon: FaBoxOpen, name: 'Inventory & Recipe\nCost Control' },
      {
        icon: FaHeart,
        name: 'Loyalty, Reservations &\nEvent Management',
      },
      {
        icon: FaDollarSign,
        name: 'Multi-Outlet & Multi-\nCurrency Support',
      },
      {
        icon: FaChartBar,
        name: 'Complete Accounting &\nFinancial Reports',
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
    title: 'RITEEATS SOFTWARE VERSIONS',
    target: '/',
    sectionId: 'dashboard-editions-section',
    editions: [
      {
        name: 'RiteEats Essentials',
        description:
          'Fast and accurate front-end POS with seamless kitchen coordination',
        bestFor:
          'Best suited for small to medium restaurants, cafés and fast-food outlets.',
        imageSrc: '/editions/left.jpeg',
        imageAlt:
          'RiteEats Essentials edition – front-end POS interface with touch-screen billing and kitchen coordination features',
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
        imageAlt:
          'RiteEats Plus edition – inventory and recipe management dashboard showing stock levels, recipes, and cost analysis',
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
        imageAlt:
          'RiteEats Ultimate edition – enterprise dashboard with accounting reports, multi-branch consolidation, and financial analytics',
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
  {
    id: 'Captain / Waiter Ordering & Billing App',
    name: Addon.WaiterApp,
    overview:
      'This module enables captains and waiters to take orders directly at the guest table using Android or iOS handheld devices or tablets. The app speeds up ordering, reduces errors, and enhances the guest experience by minimizing waiting time and ensuring accurate service.',
    imageUrl: '/products/captain-app.png',
    features: [
      { name: 'Table-side live order entry', icon: FaTabletAlt },
      {
        name: 'Instant KOT transmission to kitchen and bar',
        icon: FaPaperPlane,
      },
      { name: 'Real-time table status and order updates', icon: FaSyncAlt },
      { name: 'Reduced manual rewriting or re-entry of orders', icon: FaBan },
      {
        name: 'Optional table-side bill preview and confirmation',
        icon: FaFileInvoiceDollar,
      },
      {
        name: 'Improved coordination between service staff and kitchen',
        icon: FaUsersCog,
      },
    ],
    bestFor: [
      { label: 'Fine Dining Restaurants', icon: FaUtensils },
      { label: 'Lounges & Bars', icon: FaGlassWhiskey },
      { label: 'Clubs & Nightlife', icon: FaMusic },
      { label: 'Premium Cafés', icon: FaCoffee },
      { label: 'Hotels & Resorts', icon: FaHotel },
    ],
    brochureLink: '/brochures/Rite eats.pdf',
    target: Paths.Waiter_App,
  },
  {
    id: 'Kitchen Display System (KDS)',
    name: Addon.Kds,
    overview:
      'Replace paper KOTs with real-time digital screens in the kitchen and bar. Eliminate lost tickets, speed up preparation, and improve accuracy with color-coded alerts and order tracking.',
    imageUrl: '/products/kds.png',
    features: [
      { name: 'Live digital display of all orders', icon: FaTv },
      { name: 'Auto-routing to correct kitchen/bar station', icon: FaRoute },
      {
        name: 'Color-coded priority & delay alerts',
        icon: FaExclamationTriangle,
      },
      { name: 'Preparation time and order aging', icon: FaHourglassHalf },
      { name: 'Status: Preparing to Ready to Served', icon: FaTasks },
      { name: 'Supports multiple kitchen screens', icon: FaClone },
    ],
    bestFor: [
      { label: 'High-Volume Restaurants', icon: FaUtensils },
      { label: 'Quick Service Restaurants', icon: FaClock },
      { label: 'Food Courts', icon: FaStoreAlt },
      { label: 'Cloud Kitchens', icon: FaKitchenSet },
      { label: 'Busy Bars', icon: FaGlassWhiskey },
    ],
    brochureLink: '/brochures/Rite eats.pdf',
    target: Paths.Kds,
  },
  {
    id: 'Customer Loyalty Management',
    name: Addon.CustomerLoyaltyManagement,
    overview:
      'Build lasting customer relationships with points, tiers, birthday rewards, and smart campaigns. Turn one-time guests into loyal regulars who spend more and visit often.',
    imageUrl: '/products/loyalty.png',
    features: [
      { name: 'Register via mobile number or card', icon: FaUserPlus },
      { name: 'Point-based earn & redeem system', icon: FaCoins },
      { name: 'Tiered benefits and reward slabs', icon: FaLayerGroup },
      { name: 'Auto birthday & anniversary offers', icon: FaBirthdayCake },
      { name: 'Visit & spend history tracking', icon: FaHistory },
      { name: 'Targeted promotions for VIPs', icon: FaBullhorn },
    ],
    bestFor: [
      { label: 'Restaurants', icon: FaUtensils },
      { label: 'Cafés & Bakeries', icon: FaCoffee },
      { label: 'Food Chains', icon: FaStoreAlt },
      { label: 'Franchises', icon: FaNetworkWired },
      { label: 'Multi-Outlet Brands', icon: FaCubes },
    ],
    brochureLink: '/brochures/Rite eats.pdf',
    target: Paths.Customer_Loyalty_Management,
  },
  {
    id: 'Online Table Reservation System',
    name: Addon.OnlineTableReservations,
    overview:
      'Let customers book tables online 24/7 with live availability. Reduce phone calls, avoid double bookings, and fill seats during peak hours intelligently.',
    imageUrl: '/products/reservation.png',
    features: [
      { name: 'Real-time table availability calendar', icon: FaCalendarCheck },
      { name: 'Booking widget for website & social media', icon: FaGlobe },
      { name: 'Auto SMS/email confirmations', icon: FaEnvelope },
      { name: 'Peak hour & capacity controls', icon: FaTachometerAlt },
      { name: 'Integrated with floor plan', icon: FaMapMarkedAlt },
      { name: 'Pre-payment & no-show management', icon: FaCreditCard },
    ],
    bestFor: [
      { label: 'Fine Dining', icon: FaUtensils },
      { label: 'Rooftop & View Restaurants', icon: FaArchway },
      { label: 'Lounges', icon: FaGlassWhiskey },
      { label: 'Banquet Venues', icon: MdEvent },
      { label: 'Popular Outlets', icon: FaStar },
    ],
    brochureLink: '/brochures/Rite eats.pdf',
    target: Paths.Online_Table_Reservations,
  },
  {
    id: 'Token & Queue Management System',
    name: Addon.QueueManagement,
    overview:
      'Perfect for fast-service environments. Generate tokens, display serving numbers, manage multiple queues, and deliver smooth, frustration-free customer flow.',
    imageUrl: '/products/token-queue.png',
    features: [
      { name: 'Token generation at counter/kiosk', icon: FaTicketAlt },
      { name: 'Large digital display boards', icon: FaTv },
      { name: 'Voice announcement & SMS alerts', icon: FaVolumeUp },
      { name: 'Separate queues: dine-in, takeaway, delivery', icon: FaList },
      { name: 'Real-time queue analytics', icon: FaChartLine },
      { name: 'Reduced crowding and wait anger', icon: FaSmileBeam },
    ],
    bestFor: [
      { label: 'QSR & Fast Food', icon: FaHamburger },
      { label: 'Food Courts', icon: FaStoreAlt },
      { label: 'Bakeries & Sweet Shops', icon: FaBirthdayCake },
      { label: 'Takeaway Outlets', icon: FaShoppingBag },
      { label: 'Cloud Kitchens', icon: FaKitchenSet },
    ],
    brochureLink: '/brochures/Rite eats.pdf',
    target: Paths.Queue_Management,
  },
  {
    id: 'Event Management System',
    name: Addon.EventManagementSystem,
    overview:
      'Manage banquets, weddings, corporate events, and private parties from enquiry to final settlement — with menu costing, advances, and per-event profit reports.',
    imageUrl: '/products/event-management.png',
    features: [
      { name: 'Event enquiry & booking calendar', icon: FaCalendarPlus },
      { name: 'Custom menu planning and costing', icon: FaUtensils },
      { name: 'Guest count & seating allocation', icon: FaUsers },
      { name: 'Advance/deposit/balance tracking', icon: FaMoneyCheckAlt },
      { name: 'Separate event billing & taxation', icon: FaFileInvoice },
      { name: 'Profit & loss report per event', icon: FaChartPie },
    ],
    bestFor: [
      { label: 'Banquet Halls', icon: FaArchway },
      { label: 'Hotels & Resorts', icon: FaHotel },
      { label: 'Clubs & Lounges', icon: FaMusic },
      { label: 'Wedding Venues', icon: FaRing },
      { label: 'Catering Companies', icon: FaConciergeBell },
    ],
    brochureLink: '/brochures/Rite eats.pdf',
    target: Paths.Event_Management_System,
  },
]
