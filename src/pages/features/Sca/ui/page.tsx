import { Helmet } from 'react-helmet'

import { SCAWidget } from '@widgets/features/Sca'
import { Features } from '@shared/constants/featuresMap'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>{Features.SCA}</title>
        <meta
          name="description"
          content="Stay 100% compliant with automated PAYE (Resident/Non-Resident), NSSF deductions, tax returns, reports, and full audit trails. Eliminate penalties and manual errors."
        />
        <meta
          name="keywords"
          content="PAYE software Kenya, NSSF compliance, statutory deductions Kenya, payroll tax compliance, KRA payroll software, tax returns automation, payroll audit trail"
        />
      </Helmet>
      <Content title={Features.SCA}>
        <SCAWidget />
      </Content>
    </>
  )
}
