import { Content } from '@shared/ui/content';
import { Helmet } from 'react-helmet';
import { JustPay } from '@widgets/products/justpay';

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>JustPay Software Uganda</title>
        <meta
          name="description"
          content="A multi-vendor mobile loyalty platform enabling businesses to reward and retain customers effortlessly."
        />
        <meta name="keywords" content="justpay, business software Uganda, ERP, POS" />
      </Helmet>
      <Content title="JustPay">
        <JustPay />
      </Content>
    </>
  );
};