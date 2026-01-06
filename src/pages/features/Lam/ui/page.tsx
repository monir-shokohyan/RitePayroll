import { Helmet } from 'react-helmet'

import { LAMWidget } from '@widgets/features/Lam'
import { Features } from '@shared/constants/featuresMap'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>{Features.LAM}</title>
        <meta
          name="description"
          content="Manage employee loans, salary advances, custom allowances, and deductions with automated EMI-based recovery directly from payroll. Transparent and hassle-free."
        />
        <meta
          name="keywords"
          content="employee loans software, salary advance management, EMI recovery payroll, allowances deductions Kenya, loan management system, payroll loans Kenya"
        />
      </Helmet>
      <Content title={Features.LAM}>
        <LAMWidget />
      </Content>
    </>
  )
}
