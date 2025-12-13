import { Helmet } from 'react-helmet'

import { KdsWidget } from '@widgets/addon/kds'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Kitchen Display System</title>
        <meta
          name="description"
          content="A multi-vendor mobile loyalty platform enabling businesses to reward and retain customers effortlessly."
        />
        <meta
          name="keywords"
          content="justpay, business software Uganda, ERP, POS"
        />
      </Helmet>
      <Content title="Kitchen Display System">
        <KdsWidget />
      </Content>
    </>
  )
}
