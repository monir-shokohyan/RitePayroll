import { ABIPage } from '@pages/features/Abi'
import { ASPPage } from '@pages/features/Asp'
import { LAMPage } from '@pages/features/Lam'
import { LMSPage } from '@pages/features/Lms'
import { PPRPage } from '@pages/features/Ppr'
import { SCAPage } from '@pages/features/Sca'
import { WMPCPage } from '@pages/features/Wmpc'
import { Paths } from '@shared/api/paths'
import { RouteType } from '@shared/types/router/route-type'
import { ErrorSuspense } from '@shared/ui/error-suspense'

export const featuresRoute: RouteType[] = [
  {
    key: Paths.AccurateSalaryProcessing,
    guarded: '',
    path: Paths.AccurateSalaryProcessing,
    element: (
      <ErrorSuspense suspenseKey={Paths.AccurateSalaryProcessing}>
        <ASPPage />
      </ErrorSuspense>
    ),
  },
  {
    key: Paths.AttendanceBiometricIntegration,
    guarded: '',
    path: Paths.AttendanceBiometricIntegration,
    element: (
      <ErrorSuspense suspenseKey={Paths.AttendanceBiometricIntegration}>
        <ABIPage />
      </ErrorSuspense>
    ),
  },
  {
    key: Paths.LeaveManagementSystem,
    guarded: '',
    path: Paths.LeaveManagementSystem,
    element: (
      <ErrorSuspense suspenseKey={Paths.LeaveManagementSystem}>
        <LMSPage />
      </ErrorSuspense>
    ),
  },
  {
    key: Paths.LoansAdvancesManagement,
    guarded: '',
    path: Paths.LoansAdvancesManagement,
    element: (
      <ErrorSuspense suspenseKey={Paths.LoansAdvancesManagement}>
        <LAMPage />
      </ErrorSuspense>
    ),
  },
  {
    key: Paths.PayslipsPayrollRegisters,
    guarded: '',
    path: Paths.PayslipsPayrollRegisters,
    element: (
      <ErrorSuspense suspenseKey={Paths.PayslipsPayrollRegisters}>
        <PPRPage />
      </ErrorSuspense>
    ),
  },
  {
    key: Paths.StatutoryComplianceAutomation,
    guarded: '',
    path: Paths.StatutoryComplianceAutomation,
    element: (
      <ErrorSuspense suspenseKey={Paths.StatutoryComplianceAutomation}>
        <SCAPage />
      </ErrorSuspense>
    ),
  },
  {
    key: Paths.WeeklyMonthlyPayrollCycles,
    guarded: '',
    path: Paths.WeeklyMonthlyPayrollCycles,
    element: (
      <ErrorSuspense suspenseKey={Paths.WeeklyMonthlyPayrollCycles}>
        <WMPCPage />
      </ErrorSuspense>
    ),
  },
]
