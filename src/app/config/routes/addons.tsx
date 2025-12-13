import { LoyaltyManagementPage } from '@pages/addon/ Customer Loyalty Management'
import { EventManagementPage } from '@pages/addon/ Event Management System'
import { TableReservationPage } from '@pages/addon/ Online Table Reservations'
import { QueueManagementPage } from '@pages/addon/ Token & Queue Management'
import { KdsPage } from '@pages/addon/kds'
import { WaiterAppPage } from '@pages/addon/Waiter App'
import { Paths } from '@shared/api/paths'
import { RouteType } from '@shared/types/router/route-type'
import { ErrorSuspense } from '@shared/ui/error-suspense'

export const addonRoute: RouteType[] = [
  {
    key: 'kds',
    guarded: '',
    path: Paths.Kds,
    element: (
      <ErrorSuspense suspenseKey="kds">
        <KdsPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'waiter_app',
    guarded: '',
    path: Paths.Waiter_App,
    element: (
      <ErrorSuspense suspenseKey="waiter-app">
        <WaiterAppPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'costumer-loyalty-management',
    guarded: '',
    path: Paths.Customer_Loyalty_Management,
    element: (
      <ErrorSuspense suspenseKey="costumer-loyalty-management">
        <LoyaltyManagementPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'online-table-reservation',
    guarded: '',
    path: Paths.Online_Table_Reservations,
    element: (
      <ErrorSuspense suspenseKey="online-table-reservation">
        <TableReservationPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'quene-management',
    guarded: '',
    path: Paths.Queue_Management,
    element: (
      <ErrorSuspense suspenseKey="quene-management">
        <QueueManagementPage />
      </ErrorSuspense>
    ),
  },
  {
    key: 'event-management-system',
    guarded: '',
    path: Paths.Event_Management_System,
    element: (
      <ErrorSuspense suspenseKey="event-management-system">
        <EventManagementPage />
      </ErrorSuspense>
    ),
  },
]
