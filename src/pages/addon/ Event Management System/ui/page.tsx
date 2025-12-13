import { Helmet } from 'react-helmet'

import { EventManagementSystemWidget } from '@widgets/addon/ Event Management System'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Event Management System</title>
        <meta
          name="description"
          content="Comprehensive restaurant and bar management software supporting fine dining, takeaway, delivery, and events."
        />
        <meta
          name="keywords"
          content="Event Management System, business software Uganda, ERP, POS"
        />
      </Helmet>
      <Content title="Event Management System">
        <EventManagementSystemWidget />
      </Content>
    </>
  )
}
