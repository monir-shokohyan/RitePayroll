import { Helmet } from 'react-helmet'

import { OnlineTableReservationsWidget } from '@widgets/addon/ Online Table Reservations'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Online Table Reservation System</title>
        <meta
          name="description"
          content="Let customers book tables online 24/7 with live availability. Reduce phone calls, avoid double bookings, and fill seats during peak hours intelligently. Ideal for fine dining, lounges, and popular restaurants."
        />
        <meta
          name="keywords"
          content="online table reservation system, restaurant booking software, table booking widget, real-time availability calendar, restaurant reservation POS, no-show management, website table booking, SMS confirmation reservations, floor plan integration, Uganda restaurant software"
        />
      </Helmet>
      <Content title="Online Table Reservation System">
        <OnlineTableReservationsWidget />
      </Content>
    </>
  )
}
