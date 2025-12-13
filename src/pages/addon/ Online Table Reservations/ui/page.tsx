import { Helmet } from 'react-helmet'

import { OnlineTableReservationsWidget } from '@widgets/addon/ Online Table Reservations'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Online Table Reservations</title>
        <meta
          name="description"
          content="An affordable and simplified version of Ritebooks tailored for startups and small businesses."
        />
        <meta
          name="keywords"
          content="ritebooks express, business software Uganda, ERP, POS"
        />
      </Helmet>
      <Content title="Online Table Reservations">
        <OnlineTableReservationsWidget />
      </Content>
    </>
  )
}
