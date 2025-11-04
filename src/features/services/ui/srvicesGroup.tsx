import { Helmet } from 'react-helmet'
import { MdBlock } from 'react-icons/md'
import { Flex } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import { sectionType } from '@shared/constants/allTexts'
import useNavigationScroll from '@shared/hooks/useNavigationScroll'
import ActionLayout from '@shared/ui/ActionLayout'

import { Card, CardContainer, ContactButton } from '../styles/styles'

const ServicesGroup = ({ services }: { services: sectionType[] }) => {
  const { navigateAndScroll } = useNavigationScroll()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services?.map((service, index) => ({
      '@type': 'Service',
      position: index + 1,
      name: service?.seo?.title,
      description: service?.seo?.description,
      provider: {
        '@type': 'Organization',
        name: 'Lotus Soft Technologies Ltd.',
      },
      areaServed: 'Uganda',
    })),
  }

  return (
    <Flex
      wrap="wrap"
      w="100%"
      justify="center"
      gap={20}
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      {services?.map((service) => {
        return (
          <CardContainer
            key={service?.name}
            onClick={() => navigateAndScroll('/', 'dashboard-contact-section')}
          >
            <Card>
              <ActionLayout
                titleNormal={service.name}
                descriptionNormal={service.description}
                Icon={service.icon ?? MdBlock}
                currentWidth="100%"
                align="center"
                $textalign="center"
                rotate={45}
                gap={20}
                titleSize="24px"
                textSize="16px"
                ariaLabel={service.name}
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
      })}
    </Flex>
  )
}

export default ServicesGroup
