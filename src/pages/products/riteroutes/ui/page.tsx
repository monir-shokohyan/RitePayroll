import { Content } from '@shared/ui/content';
import { Helmet } from 'react-helmet';
import { RiteRoutes } from '@widgets/products/riteroutes';

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>RiteRoutes Software Uganda</title>
        <meta
          name="description"
          content="A comprehensive field sales and distribution management system for FMCG companies and distributors."
        />
        <meta name="keywords" content="riteroutes, business software Uganda, ERP, POS" />
      </Helmet>
      <Content title="RiteRoutes">
        <RiteRoutes />
      </Content>
    </>
  );
};