import { Helmet } from 'react-helmet'

import { QueueManagementWidget } from '@widgets/addon/Token & Queue Management'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Token & Queue Management System</title>
        <meta
          name="description"
          content="Perfect for fast-service environments. Generate tokens, display serving numbers, manage multiple queues, and deliver smooth, frustration-free customer flow. Ideal for QSR, fast food, bakeries, and takeaway outlets."
        />
        <meta
          name="keywords"
          content="token queue management system, restaurant queue software, QSR token display, fast food queue management, digital token system, multiple queues POS, takeaway queue, queue analytics restaurant, token kiosk, Uganda food service software"
        />
      </Helmet>
      <Content title="Token & Queue Management System">
        <QueueManagementWidget />
      </Content>
    </>
  )
}
