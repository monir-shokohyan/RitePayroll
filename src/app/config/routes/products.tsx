import { JustPayPage } from '@pages/products/justpay'
import { RitePayrollPage } from '@pages/products/rite-payroll'
import { RitebooksPage } from '@pages/products/ritebooks'
import { RitebooksExpressPage } from '@pages/products/ritebooks-express'
import { RitebooksPocketPage } from '@pages/products/ritebooks-pocket'
import { RiteEatsPage } from '@pages/products/riteeats'
import { RiteRoutesPage } from '@pages/products/riteroutes'
import { TallyPrimePage } from '@pages/products/tally-prime'
import { Paths } from '@shared/api/paths'
import { RouteType } from '@shared/types/router/route-type'
import { ErrorSuspense } from '@shared/ui/error-suspense'

export const productsRoute: RouteType[] = [
  {
    key: 'ritebooks',
    guarded: '',
    path: Paths.Ritebooks,
    element: (
      <ErrorSuspense suspenseKey="ritebooks">
        <RitebooksPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'ritebooks-express',
    guarded: '',
    path: Paths.Ritebooks_express,
    element: (
      <ErrorSuspense suspenseKey="ritebooks-express">
        <RitebooksExpressPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'ritebooks-pocket',
    guarded: '',
    path: Paths.Ritebooks_pocket,
    element: (
      <ErrorSuspense suspenseKey="ritebooks-pocket">
        <RitebooksPocketPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'riteroutes',
    guarded: '',
    path: Paths.Riteroutes,
    element: (
      <ErrorSuspense suspenseKey="riteroutes">
        <RiteRoutesPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'rite-payroll',
    guarded: '',
    path: Paths.Rite_payroll,
    element: (
      <ErrorSuspense suspenseKey="rite-payroll">
        <RitePayrollPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'riteeats',
    guarded: '',
    path: Paths.Riteeats,
    element: (
      <ErrorSuspense suspenseKey="riteeats">
        <RiteEatsPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'justpay',
    guarded: '',
    path: Paths.Justpay,
    element: (
      <ErrorSuspense suspenseKey="justpay">
        <JustPayPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'tally-prime',
    guarded: '',
    path: Paths.Tally_prime,
    element: (
      <ErrorSuspense suspenseKey="tally-prime">
        <TallyPrimePage />
      </ErrorSuspense>
    ),
  },
]
