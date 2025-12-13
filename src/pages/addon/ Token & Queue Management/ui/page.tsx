import { Helmet } from 'react-helmet'

import { QueueManagementWidget } from '@widgets/addon/Token & Queue Management'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Token & Queue Management</title>
        <meta
          name="description"
          content="An Android-based accounting and POS app that provides small business owners full control from their smartphone or POS device."
        />
        <meta
          name="keywords"
          content="ritebooks pocket, business software Uganda, ERP, POS"
        />
      </Helmet>
      <Content title="Ritebooks Pocket">
        <QueueManagementWidget />
      </Content>
    </>
  )
}
