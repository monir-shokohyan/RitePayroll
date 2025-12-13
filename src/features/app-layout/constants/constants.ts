import { Paths } from '@shared/api/paths'

export const addonLinks = [
  { to: Paths.Kds, label: 'Kitchen Display System' },
  { to: Paths.Waiter_App, label: ' Captain/Waiter App' },
  {
    to: Paths.Customer_Loyalty_Management,
    label: ' Customer Loyalty Management',
  },
  { to: Paths.Online_Table_Reservations, label: ' Online Table Reservations' },
  { to: Paths.Queue_Management, label: ' Token & Queue Management' },
  { to: Paths.Event_Management_System, label: ' Event Management System' },
]

export const NavigationLinks = [
  { to: '/', label: 'Home', scrollToSection: 'dashboard-welcome-section' },
  { to: '/', label: 'About Us', scrollToSection: 'dashboard-about-section' },
  { to: '/', label: 'Editions', scrollToSection: 'dashboard-editions-section' },
  { to: '/', label: 'Features', scrollToSection: 'dashboard-features-section' },
  {
    to: '/',
    label: 'Industries',
    scrollToSection: 'dashboard-industries-section',
  },
  {
    to: '/',
    label: 'Contact Us',
    scrollToSection: 'dashboard-contact-section',
  },
  { to: '/', label: 'Addon', scrollToSection: 'dashboard-addon-section' },
]
