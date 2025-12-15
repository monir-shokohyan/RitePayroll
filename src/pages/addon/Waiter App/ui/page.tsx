import { Helmet } from 'react-helmet'

import { WaiterAppWidget } from '@widgets/addon/Waiter App'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Captain / Waiter Ordering & Billing App</title>
        <meta
          name="description"
          content="This module enables captains and waiters to take orders directly at the guest table using Android or iOS handheld devices or tablets. The app speeds up ordering, reduces errors, and enhances the guest experience by minimizing waiting time and ensuring accurate service. Ideal for fine dining restaurants, lounges, bars, and hotels."
        />
        <meta
          name="keywords"
          content="waiter ordering app, captain app restaurant, mobile POS waiter, table-side ordering system, handheld restaurant POS, tablet ordering app, instant KOT transmission, restaurant waiter tablet, fine dining POS app, hospitality mobile ordering Uganda"
        />
      </Helmet>
      <Content title="Captain / Waiter Ordering & Billing App">
        <WaiterAppWidget />
      </Content>
    </>
  )
}
