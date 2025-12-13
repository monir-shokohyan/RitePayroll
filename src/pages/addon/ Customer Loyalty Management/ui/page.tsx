import { Helmet } from 'react-helmet'

import { CustomerLoyaltyManagementWidget } from '@widgets/addon/ Customer Loyalty Management'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title> Customer Loyalty Management</title>
        <meta
          name="description"
          content="A robust ERP solution combining accounting, inventory, POS, and manufacturing features to manage every aspect of business."
        />
        <meta
          name="keywords"
          content="Customer Loyalty Management, business software Uganda, ERP, POS"
        />
      </Helmet>
      <Content title="Customer Loyalty Management">
        <CustomerLoyaltyManagementWidget />
      </Content>
    </>
  )
}
