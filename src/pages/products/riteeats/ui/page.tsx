import { Helmet } from 'react-helmet'

import { RiteEats } from '@widgets/products/riteeats'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>RiteEats Software Uganda</title>
        <meta
          name="description"
          content="Comprehensive restaurant and bar management software supporting fine dining, takeaway, delivery, and events."
        />
        <meta
          name="keywords"
          content="riteeats, business software Uganda, ERP, POS"
        />
      </Helmet>
      <Content title="RiteEats">
        <RiteEats />
      </Content>
    </>
  )
}
