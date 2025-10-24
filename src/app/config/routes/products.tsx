import { RitebooksPage } from '@pages/products/ritebooks';
import { RitebooksExpressPage } from '@pages/products/ritebooks-express';
import { RitebooksPocketPage } from '@pages/products/ritebooks-pocket';
import { RiteRoutesPage } from '@pages/products/riteroutes';
import { RitePayrollPage } from '@pages/products/rite-payroll';
import { RiteEatsPage } from '@pages/products/riteeats';
import { JustPayPage } from '@pages/products/justpay';
import { TallyPrimePage } from '@pages/products/tally-prime';
import { RouteType } from '@shared/types/router/route-type';
import { ErrorSuspense } from '@shared/ui/error-suspense';

export const productsRoute: RouteType[] = [
  {
    key: 'ritebooks',
    guarded: '',
    path: '/products/ritebooks',
    element: (
      <ErrorSuspense suspenseKey="ritebooks">
        <RitebooksPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'ritebooks-express',
    guarded: '',
    path: '/products/ritebooks-express',
    element: (
      <ErrorSuspense suspenseKey="ritebooks-express">
        <RitebooksExpressPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'ritebooks-pocket',
    guarded: '',
    path: '/products/ritebooks-pocket',
    element: (
      <ErrorSuspense suspenseKey="ritebooks-pocket">
        <RitebooksPocketPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'riteroutes',
    guarded: '',
    path: '/products/riteroutes',
    element: (
      <ErrorSuspense suspenseKey="riteroutes">
        <RiteRoutesPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'rite-payroll',
    guarded: '',
    path: '/products/rite-payroll',
    element: (
      <ErrorSuspense suspenseKey="rite-payroll">
        <RitePayrollPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'riteeats',
    guarded: '',
    path: '/products/riteeats',
    element: (
      <ErrorSuspense suspenseKey="riteeats">
        <RiteEatsPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'justpay',
    guarded: '',
    path: '/products/justpay',
    element: (
      <ErrorSuspense suspenseKey="justpay">
        <JustPayPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'tally-prime',
    guarded: '',
    path: '/products/tally-prime',
    element: (
      <ErrorSuspense suspenseKey="tally-prime">
        <TallyPrimePage />
      </ErrorSuspense>
    ),
  },
];