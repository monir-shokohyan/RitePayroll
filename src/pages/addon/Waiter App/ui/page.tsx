import { Helmet } from 'react-helmet'

import { WaiterAppWidget } from '@widgets/addon/Waiter App'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Captain/Waiter App</title>
        <meta
          name="description"
          content="A complete payroll management system ensuring compliance, efficiency, and automation of HR processes."
        />
        <meta
          name="keywords"
          content="rite payroll, business software Uganda, ERP, POS"
        />
      </Helmet>
      <Content title="Captain/Waiter App">
        <WaiterAppWidget />
      </Content>
    </>
  )
}
