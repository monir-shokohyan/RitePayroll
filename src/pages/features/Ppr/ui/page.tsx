import { Helmet } from 'react-helmet'

import { PPRWidget } from '@widgets/features/Ppr'
import { Features } from '@shared/constants/featuresMap'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>{Features.PPR}</title>
        <meta
          name="description"
          content="Generate professional payslips and detailed payroll registers instantly. Employees can securely access and download payslips anytime via self-service portal."
        />
        <meta
          name="keywords"
          content="payslip generation software, payroll registers Kenya, employee self-service payslip, automated payslips, digital payslip portal, payroll reports"
        />
      </Helmet>
      <Content title={Features.PPR}>
        <PPRWidget />
      </Content>
    </>
  )
}
