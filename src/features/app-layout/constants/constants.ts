import { Paths } from '@shared/api/paths'

export const featuresLink = [
  { to: Paths.AccurateSalaryProcessing, label: 'Accurate Salary Processing' },
  {
    to: Paths.AttendanceBiometricIntegration,
    label: 'Attendance Biometric Integration',
  },
  {
    to: Paths.LeaveManagementSystem,
    label: ' Leave Management System',
  },
  { to: Paths.LoansAdvancesManagement, label: 'Loans Advances Management' },
  { to: Paths.PayslipsPayrollRegisters, label: 'Payslips Payroll Registers' },
  {
    to: Paths.StatutoryComplianceAutomation,
    label: 'Statutory Compliance Automation',
  },
  {
    to: Paths.WeeklyMonthlyPayrollCycles,
    label: 'Weekly Monthly Payroll Cycles',
  },
]

export const NavigationLinks = [
  { to: '/', label: 'Home', scrollToSection: 'dashboard-welcome-section' },
  { to: '/', label: 'About Us', scrollToSection: 'dashboard-aboutUs-section' },
  { to: '/', label: 'Benefits', scrollToSection: 'dashboard-benefits-section' },
  {
    to: '/',
    label: 'industries',
    scrollToSection: 'dashboard-industries-section',
  },
  {
    to: '/',
    label: 'Contact Us',
    scrollToSection: 'dashboard-contact-section',
  },
  { to: '/', label: 'Features', scrollToSection: 'dashboard-features-section' },
]
