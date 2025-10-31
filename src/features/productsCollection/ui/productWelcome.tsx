import { Image } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import FindByName from '@shared/helpers/findByName'
import useNavigationScroll from '@shared/hooks/useNavigationScroll'
import Container from '@shared/ui/Container'
import Wrapper from '@shared/ui/horWrapper'

import {
  HoveredButtonWithBorder,
  HoveredButtonWithoutBorder,
  WelcomeText,
  WelcomeTitle,
} from '../styles/styles'
import { ProductsType } from '../types'
import { useMediaQuery } from '@mantine/hooks'

const ProductWelcome = ({ page }: { page: ProductsType }) => {
  const { navigateAndScroll } = useNavigationScroll()
  const product = FindByName(page)

  const hasBrochure = Boolean(product?.brochureLink?.trim())
  const isTablet = useMediaQuery('(max-width: 760px)')
  const isMobile = useMediaQuery('(max-width: 760px)')

  return (
    <Wrapper
      rightSection={
        <Image
          src={`/products/${product?.imageUrl}`}
          alt={product?.name}
          miw={300}
          h="100%"
          fit="contain"
        />
      }
      bgImage={SavedColors.TextColor}
      isReverseWrap={true}
      isBgColor
    >
      <Image
        src={isTablet ? 'bgNet_tablet.webp': isMobile ? 'bgNet_mobile.webp' : '/bgNet.webp'}
        alt="net background image"
        style={{
          position: 'absolute',
          top: '10%',
          left: '0%',
          opacity: '25%',
        }}
      />

      <WelcomeTitle
        $font="Nunito"
        fontWeight="800"
        color={SavedColors.PrimaryWhite}
      >
        {product?.name}
      </WelcomeTitle>

      <WelcomeText
        $font="Roboto"
        fontWeight="600"
        fontSize="24px"
        color={SavedColors.PrimaryWhite}
      >
        {product?.description}
      </WelcomeText>

      <Container
        gap={20}
        wrap="wrap"
        w="100%"
        justify="start"
        align="center"
      >
        <HoveredButtonWithBorder
          radius="md"
          size="md"
          w={{ base: '100%', sm: 'auto', md: 'auto', lg: 'auto' }}
          color={SavedColors.Primaryblue}
          onClick={() => navigateAndScroll('/', 'dashboard-contact-section')}
        >
          Request a demo
        </HoveredButtonWithBorder>

        {hasBrochure ? (
          <HoveredButtonWithoutBorder
            as="a"
            radius={20}
            size="md"
            w={{ base: '100%', sm: 'auto', md: 'auto', lg: 'auto' }}
            color={SavedColors.Primaryblue}
            variant="transparent"
            href={`/brochures/${product?.brochureLink}`}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download product brochure
          </HoveredButtonWithoutBorder>
        ) : (
          ''
        )}
      </Container>
    </Wrapper>
  )
}

export default ProductWelcome
