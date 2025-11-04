import { Helmet } from 'react-helmet'

import { RitePayroll } from '@widgets/products/rite-payroll'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Rite Payroll Software Uganda</title>
        <meta
          name="description"
          content="A complete payroll management system ensuring compliance, efficiency, and automation of HR processes."
        />
        <meta
          name="keywords"
          content="rite payroll, business software Uganda, ERP, POS"
        />
      </Helmet>
      <Content title="Rite Payroll">
        <RitePayroll />
      </Content>
    </>
  )
}
