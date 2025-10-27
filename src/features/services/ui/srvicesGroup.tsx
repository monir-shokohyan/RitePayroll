import { Button, Flex } from '@mantine/core';
import { SavedColors } from '@shared/constants';
import ActionLayout from '@shared/ui/ActionLayout';
import { servicesMap } from '../constant/Contant';
import { Card, CardContainer, ContactButton } from '../styles/styles';
import { Helmet } from 'react-helmet';

const ServicesGroup = () => {

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: servicesMap?.map((service, index) => ({
      '@type': 'Service',
      position: index + 1,
      name: service.seo.title,
      description: service.seo.description,
      provider: {
        '@type': 'Organization',
        name: 'Lotus Soft Technologies Ltd.',
      },
      areaServed: 'Uganda',
    })),
  };

  return (
    <Flex wrap="wrap" w="100%" justify="center" gap={20}>
              <Helmet>
                <script type="application/ld+json">
                  {JSON.stringify(structuredData)}
                </script>
              </Helmet>
      {
        servicesMap?.map((service) => {
          return (
            <CardContainer key={service.title}>
              <Card>
                <ActionLayout
                  titleNormal={service.title}
                  descriptionNormal={service.description}
                  Icon={service.icon}
                  currentWidth='100%'
                  align='center'
                  $textalign='center'
                  rotate={45}
                  gap={20}
                  titleSize='24px'
                  textSize='16px'
                  ariaLabel={service.title}
          
                />
              </Card>
              <ContactButton
                variant="filled"
                color={SavedColors.Primaryblue}
                size="sm"
              >
                Contact Us for Custom Solutions
              </ContactButton>
            </CardContainer>
          )
        })
      }

    </Flex>
  );
};

export default ServicesGroup;