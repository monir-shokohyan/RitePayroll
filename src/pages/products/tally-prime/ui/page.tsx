import { Content } from '@shared/ui/content';
import { Helmet } from 'react-helmet';
import { TallyPrime } from '@widgets/products/tally-prime';

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Tally Prime Software Uganda</title>
        <meta
          name="description"
          content="Lotus is Uganda’s leading Tally Prime partner offering customization, support, and cloud solutions."
        />
        <meta name="keywords" content="tally prime, business software Uganda, ERP, POS" />
      </Helmet>
      <Content title="Tally Prime">
        <TallyPrime />
      </Content>
    </>
  );
};