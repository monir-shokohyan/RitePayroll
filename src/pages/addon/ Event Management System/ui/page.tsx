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
          content="Manage banquets, weddings, corporate events, and private parties from enquiry to final settlement — with menu costing, advances, and per-event profit reports. Perfect for hotels, banquet halls, and catering services."
        />
        <meta
          name="keywords"
          content="event management system, banquet management software, wedding venue software, hotel event booking, catering management POS, event profit reports, menu costing tool, banquet hall ERP, event billing system, Uganda hospitality software"
        />
      </Helmet>
      <Content title="Event Management System">
        <EventManagementSystemWidget />
      </Content>
    </>
  )
}
