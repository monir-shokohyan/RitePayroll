/* eslint-disable sonarjs/no-duplicate-string */
import { IconType } from 'react-icons'
import {
  FaArchway,
  FaBan,
  FaBirthdayCake,
  FaBriefcase,
  FaBullhorn,
  FaCalendarAlt,
  FaCalendarCheck,
  FaCalendarPlus,
  FaChartLine,
  FaChartPie,
  FaClock,
  FaClone,
  FaCodeBranch,
  FaCoffee,
  FaCoins,
  FaConciergeBell,
  FaCreditCard,
  FaCubes,
  FaDollarSign,
  FaEnvelope,
  FaExchangeAlt,
  FaExclamationTriangle,
  FaFileAlt,
  FaFileInvoice,
  FaFileInvoiceDollar,
  FaFingerprint,
  FaGlassWhiskey,
  FaGlobe,
  FaHamburger,
  FaHistory,
  FaHotel,
  FaHourglassHalf,
  FaLayerGroup,
  FaList,
  FaMapMarkedAlt,
  FaMoneyBillAlt,
  FaMoneyCheckAlt,
  FaMusic,
  FaNetworkWired,
  FaPaperPlane,
  FaPercent,
  FaPhoneAlt,
  FaRing,
  FaRoute,
  FaShoppingBag,
  FaSmileBeam,
  FaStar,
  FaStoreAlt,
  FaSyncAlt,
  FaTabletAlt,
  FaTachometerAlt,
  FaTasks,
  FaTicketAlt,
  FaTv,
  FaUser,
  FaUserLock,
  FaUserPlus,
  FaUsers,
  FaUsersCog,
  FaUtensils,
  FaVolumeUp,
} from 'react-icons/fa'
import { FaKitchenSet, FaLocationDot } from 'react-icons/fa6'
import { LuFileClock, LuFileText, LuGlobe } from 'react-icons/lu'
import { MdCalendarViewMonth, MdEmail, MdEvent } from 'react-icons/md'
import { MotionProps } from 'framer-motion'

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
export interface BubbleContent {
  icon: IconType
  iconColor: string
  iconSize: string
  text: string
  textFontSize: string
}

export interface BubbleItem extends MotionProps {
  id: number
  top: string
  left: string
  size?: number
  rotate?: string

  animate: {
    y: number[]
    x?: number[]
    rotate?: number[]
    transition: {
      duration: number
      repeat: typeof Infinity
      delay?: number
    }
  }

  content: BubbleContent
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
  features?: SectionType[]
  industries?: string[]
  deployment?: string[]
  brochureLink?: string
  edition?: EditionType
  editions?: EditionsType[]
  bestFor?: BestForType[]
  id?: Addon | string
  bubbles?: BubbleItem[]
  imageUrlSet?: { id: number; url: string }[]
}

export const TotalData: TotalDataItem[] = [
  {
    name: 'Welcome',
    description: 'Welcome to the RitePayroll',
    title: 'RitePayroll – Smart Payroll Software for Growing Businesses',
    descriptionSecond:
      'Run weekly and monthly payroll with total confidence. RitePayroll automates attendance, salary calculations, statutory deductions, loans, advances and payslips.',
    target: '/',
    sectionId: 'dashboard-welcome-section',
    bubbles: [
      {
        id: 1,
        top: '0%',
        left: '40%',
        rotate: '-10deg',
        size: 6,
        animate: {
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [-10, -5, -10],
          transition: {
            duration: 4,
            repeat: Infinity,
          },
        },
        initial: { opacity: 0, scale: 0 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 1.6, ease: 'backOut' },
        whileHover: { scale: 1.1 },
        content: {
          icon: FaBriefcase,
          iconColor: SavedColors.red,
          iconSize: '24px',
          text: '25+ years of experience',
          textFontSize: '12px',
        },
      },
      {
        id: 2,
        top: '30%',
        left: '50%',
        size: 5,
        animate: {
          y: [0, -20, 0],
          x: [0, -8, 0],
          transition: {
            duration: 3.5,
            repeat: Infinity,
            delay: 0.5,
          },
        },
        initial: { opacity: 0, scale: 0 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: 'backOut', delay: 0.2 },
        whileHover: { scale: 1.1 },
        content: {
          icon: FaUser,
          iconColor: SavedColors.violet,
          iconSize: '20px',
          text: '1,000+ customers',
          textFontSize: '11px',
        },
      },
    ],
  },
  {
    name: 'aboutUs',
    dTitle: 'Want to know more ?',
    title: 'Read about us',
    target: '/',
    sectionId: 'dashboard-aboutUs-section',
    imageUrl: '/aboutus.svg',
    description:
      'RitePayroll is a powerful, web-enabled payroll management software designed for small, medium, and large organizations operating across multiple branches and multiple currencies. Built to eliminate manual payroll errors and compliance risks, RitePayroll automates the entire payroll lifecycle — from attendance capture to payslip generation — with precision, security, and flexibility. Whether your organization processes daily wages or monthly salaries, manages complex allowances, statutory deductions, loans, and leave policies, or operates across locations and currencies, RitePayroll gives you total control — all from a single, centralized system.',
    features: [
      { name: 'Trusted by 1,000+' },
      { name: '25+ years of experience' },
    ],
  },
  {
    name: 'advantage',
    dTitle: 'Is Your Payroll Process Costing You More Than Money?',
    title:
      "Payroll errors don't just affect finances—they impact trust, compliance, and productivity",
    target: '/',
    sectionId: 'dashboard-advantage-section',
    imageUrlSet: [
      { id: 1, url: '/advantage/advantage.svg' },
      { id: 2, url: '/advantage/calculation.svg' },
      { id: 3, url: '/advantage/instant.svg' },
      { id: 4, url: '/advantage/realTime.svg' },
      { id: 5, url: '/advantage/zeroError.svg' },
    ],
    description:
      'Our automated, end-to-end payroll solution ensures accuracy, compliance, and efficiency - giving you peace of mind and more time to focus on growing your business.',
    features: [
      {
        id: 1,
        name: 'Automated Calculations',
        description:
          'Say goodbye to time-consuming manual calculations and human errors in salaries, overtime, and allowances.',
      },
      {
        id: 2,
        name: 'Real-time Compliance',
        description:
          'RitePayroll automatically applies updated PAYE, NSSF, and tax rules, removing compliance risks and penalties.',
      },
      {
        id: 3,
        name: 'Instant Processing',
        description:
          'RitePayroll processes weekly or monthly payroll in minutes, ending delays and ensuring accurate, on-time payments.',
      },
      {
        id: 4,
        name: 'Zero Errors',
        description:
          'RitePayroll guarantees 100% accurate payslips and reports through full automation and built-in validation.',
      },
    ],
  },
  {
    name: 'action',
    dTitle: ' What RitePayroll Does ?',
    title:
      ' RitePayroll is a centralized payroll management software designed to automate weekly and monthly payroll processing.',
    target: '/',
    sectionId: 'dashboard-action-section',
    features: [
      {
        id: 1,
        name: 'Salary calculation based on attendance',
        ariaLabel: 'Salary calculation based on attendance',
        isActive: true,
        icon: LuFileClock,
      },
      {
        id: 2,
        name: 'Allowances, deductions, loans, and advances',
        ariaLabel: 'Allowances, deductions, loans, and advances',
        isActive: true,
        icon: FaDollarSign,
      },
      {
        id: 3,
        name: 'Leave management and encashments',
        ariaLabel: 'Leave management and encashments',
        isActive: true,
        icon: MdCalendarViewMonth,
      },
      {
        id: 4,
        name: 'PAYE, NSSF, and statutory deductions',
        ariaLabel: 'PAYE, NSSF, and statutory deductions',
        isActive: true,
        icon: FaPercent,
      },
      {
        id: 5,
        name: 'Payslips, payroll registers, and compliance reports',
        ariaLabel: 'Payslips, payroll registers, and compliance reports',
        isActive: true,
        icon: LuFileText,
      },
    ],
  },
  {
    name: 'growth',
    dTitle: 'Scalability & Growth',
    title: ' RitePayroll supports growing organizations with:',
    target: '/',
    sectionId: 'dashboard-growth-section',
    features: [
      {
        id: 1,
        name: ' Multi-branch payroll operations',
        ariaLabel: ' Multi-branch payroll operations',
        isActive: true,
        icon: FaCodeBranch,
      },
      {
        id: 2,
        name: 'Multi-currency salary processing',
        ariaLabel: 'Multi-currency salary processing',
        isActive: true,
        icon: FaExchangeAlt,
      },
      {
        id: 3,
        name: 'Centralized control with branch-level access',
        ariaLabel: 'Centralized control with branch-level access',
        isActive: true,
        icon: FaUserLock,
      },
    ],
  },
  {
    name: 'features',
    dTitle: 'What features does RitePayroll have?',
    title: 'Here, check out our features',
    target: '/',
    sectionId: 'dashboard-features-section',
    features: [
      {
        id: 1,
        name: 'Accurate Salary Processing',
        ariaLabel: 'Accurate Salary Processing',
        isActive: true,
        icon: FaClock,
      },
      {
        id: 2,
        name: 'Weekly & Monthly Payroll Cycles',
        ariaLabel: 'Weekly & Monthly Payroll Cycles',
        isActive: true,
        icon: FaDollarSign,
      },
      {
        id: 3,
        name: 'Attendance & Biometric Integration',
        ariaLabel: 'Attendance & Biometric Integration',
        isActive: true,
        icon: FaFingerprint,
      },
      {
        id: 4,
        name: 'Leave Management System',
        ariaLabel: 'Leave Management System',
        isActive: true,
        icon: FaCalendarAlt,
      },
      {
        id: 5,
        name: 'Statutory Compliance Automation',
        ariaLabel: 'Statutory Compliance Automation',
        isActive: true,
        icon: FaFileAlt,
      },
      {
        id: 6,
        name: 'Loans & Advances Management',
        ariaLabel: 'Loans & Advances Management',
        isActive: true,
        icon: FaMoneyBillAlt,
      },
      {
        id: 7,
        name: 'Payslips & Payroll Registers',
        ariaLabel: 'Payslips & Payroll Registers',
        isActive: true,
        icon: FaFileInvoiceDollar,
      },
    ],
  },
  {
    name: 'industries',
    dTitle: 'Serving Diverse Industries',
    title: "Here's a look at the industries we empower",
    target: '/',
    sectionId: 'dashboard-industries-section',
    features: [
      {
        id: 1,
        name: 'Corporate Organizations',
        ariaLabel: 'Corporate Organizations',
        isActive: true,
        icon: FaClock,
      },
      {
        id: 2,
        name: 'Manufacturing & Distribution Companies',
        ariaLabel: 'Manufacturing & Distribution Companies',
        isActive: true,
        icon: FaDollarSign,
      },
      {
        id: 3,
        name: 'Retail Chains',
        ariaLabel: 'Retail Chains',
        isActive: true,
        icon: FaFingerprint,
      },
      {
        id: 4,
        name: 'NGOs & Institutions',
        ariaLabel: 'NGOs & Institutions',
        isActive: true,
        icon: FaCalendarAlt,
      },
      {
        id: 5,
        name: 'Weekly Wage & Monthly Salary Businesses',
        ariaLabel: 'Weekly Wage & Monthly Salary Businesses',
        isActive: true,
        icon: FaFileAlt,
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
    imageUrl: '/addons/waiter order.webp',
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
    brochureLink: '/brochures/RitePayroll.pdf',
    target: Paths.Waiter_App,
  },
  {
    id: 'Kitchen Display System (KDS)',
    name: Addon.Kds,
    overview:
      'Replace paper KOTs with real-time digital screens in the kitchen and bar. Eliminate lost tickets, speed up preparation, and improve accuracy with color-coded alerts and order tracking.',
    imageUrl: '/addons/kds.webp',
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
    brochureLink: '/brochures/RitePayroll.pdf',
    target: Paths.Kds,
  },
  {
    id: 'Customer Loyalty Management',
    name: Addon.CustomerLoyaltyManagement,
    overview:
      'Build lasting customer relationships with points, tiers, birthday rewards, and smart campaigns. Turn one-time guests into loyal regulars who spend more and visit often.',
    imageUrl: '/addons/costumer loyalty.webp',
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
    brochureLink: '/brochures/RitePayroll.pdf',
    target: Paths.Customer_Loyalty_Management,
  },
  {
    id: 'Online Table Reservation System',
    name: Addon.OnlineTableReservations,
    overview:
      'Let customers book tables online 24/7 with live availability. Reduce phone calls, avoid double bookings, and fill seats during peak hours intelligently.',
    imageUrl: '/addons/table.webp',
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
    brochureLink: '/brochures/RitePayroll.pdf',
    target: Paths.Online_Table_Reservations,
  },
  {
    id: 'Token & Queue Management System',
    name: Addon.QueueManagement,
    overview:
      'Perfect for fast-service environments. Generate tokens, display serving numbers, manage multiple queues, and deliver smooth, frustration-free customer flow.',
    imageUrl: '/addons/token.webp',
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
    brochureLink: '/brochures/RitePayroll.pdf',
    target: Paths.Queue_Management,
  },
  {
    id: 'Event Management System',
    name: Addon.EventManagementSystem,
    overview:
      'Manage banquets, weddings, corporate events, and private parties from enquiry to final settlement — with menu costing, advances, and per-event profit reports.',
    imageUrl: '/addons/event.webp',
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
    brochureLink: '/brochures/RitePayroll.pdf',
    target: Paths.Event_Management_System,
  },
]
