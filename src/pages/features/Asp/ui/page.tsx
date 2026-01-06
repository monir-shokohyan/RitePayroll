import { Helmet } from 'react-helmet'

import { ASPWidget } from '@widgets/features/Asp'
import { Features } from '@shared/constants/featuresMap'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>{Features.ASP}</title>
        <meta
          name="description"
          content="Achieve error-free payroll with user-defined salary heads, custom structures, and automated payslip generation. Flexible, accurate, and fully compliant salary processing for businesses in Kenya and East Africa."
        />
        <meta
          name="keywords"
          content="accurate salary processing, payroll software Kenya, custom salary structures, automated payslip generation, salary heads Kenya, payroll automation, HR payroll system"
        />
      </Helmet>
      <Content title={Features.ASP}>
        <ASPWidget />
      </Content>
    </>
  )
}
