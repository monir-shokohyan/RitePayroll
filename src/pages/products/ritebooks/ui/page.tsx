import { Content } from '@shared/ui/content';
import { Helmet } from 'react-helmet';
import { Ritebooks } from '@widgets/products/ritebooks';

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Ritebooks Software Uganda</title>
        <meta
          name="description"
          content="A robust ERP solution combining accounting, inventory, POS, and manufacturing features to manage every aspect of business."
        />
        <meta name="keywords" content="ritebooks, business software Uganda, ERP, POS" />
      </Helmet>
      <Content title="Ritebooks">
        <Ritebooks />
      </Content>
    </>
  );
};
