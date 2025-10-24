import { Content } from '@shared/ui/content';
import { Helmet } from 'react-helmet';
import { RitebooksPocket } from '@widgets/products/ritebooks-pocket';

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Ritebooks Pocket Software Uganda</title>
        <meta
          name="description"
          content="An Android-based accounting and POS app that provides small business owners full control from their smartphone or POS device."
        />
        <meta name="keywords" content="ritebooks pocket, business software Uganda, ERP, POS" />
      </Helmet>
      <Content title="Ritebooks Pocket">
        <RitebooksPocket />
      </Content>
    </>
  );
};