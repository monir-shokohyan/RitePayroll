import { Helmet } from 'react-helmet'

import { ABIWidget } from '@widgets/features/Abi'
import { Features } from '@shared/constants/featuresMap'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>{Features.ABI}</title>
        <meta
          name="description"
          content="Seamlessly integrate biometric devices for accurate attendance tracking. Manage shifts, overtime, late arrivals, early departures, and manual approvals in one powerful system."
        />
        <meta
          name="keywords"
          content="biometric attendance Kenya, attendance tracking software, shift management system, overtime tracking, biometric integration payroll, time attendance Kenya, HR attendance software"
        />
      </Helmet>
      <Content title={Features.ABI}>
        <ABIWidget />
      </Content>
    </>
  )
}
