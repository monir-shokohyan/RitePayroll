import { Helmet } from 'react-helmet'

import { LMSWidget } from '@widgets/features/Lms'
import { Features } from '@shared/constants/featuresMap'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>{Features.LMS}</title>
        <meta
          name="description"
          content="Fully automated leave management with custom leave types, balance tracking, online applications, approvals, encashment, and carry-forward rules. Simplify HR processes effortlessly."
        />
        <meta
          name="keywords"
          content="leave management software Kenya, online leave application, leave balance tracking, leave encashment, carry forward rules, HR leave system, employee leave portal"
        />
      </Helmet>
      <Content title={Features.LMS}>
        <LMSWidget />
      </Content>
    </>
  )
}
