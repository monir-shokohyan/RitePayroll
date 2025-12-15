import { Helmet } from 'react-helmet'

import { CustomerLoyaltyManagementWidget } from '@widgets/addon/ Customer Loyalty Management'
import { Content } from '@shared/ui/content'

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Customer Loyalty Management</title>
        <meta
          name="description"
          content="Build lasting customer relationships with points, tiers, birthday rewards, and smart campaigns. Turn one-time guests into loyal regulars who spend more and visit often. Ideal for restaurants, cafés, and food chains."
        />
        <meta
          name="keywords"
          content="customer loyalty management, loyalty program software, restaurant loyalty program, café rewards system, points and rewards POS, tiered loyalty benefits, birthday rewards, customer retention Uganda, POS loyalty features, ERP loyalty management"
        />
      </Helmet>
      <Content title="Customer Loyalty Management">
        <CustomerLoyaltyManagementWidget />
      </Content>
    </>
  )
}
