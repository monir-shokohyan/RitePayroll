import { Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { HoveredButtonWithoutBorder } from '@features/Dashboard/styles/styles'
import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers/findByName'
import { useNavigationScroll } from '@shared/hooks/useNavigationScroll'
import { HoveredArrow } from '@shared/styles/arrowStyle'
import { Container } from '@shared/ui/Container'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { TextWithFamily } from '@shared/ui/Typography'

import { WelcomeText, WelcomeTitle } from '../styles/styles'
import { ProductsType } from '../types'

const AddonWelcome = ({ page }: { page: ProductsType }) => {
  const { navigateAndScroll } = useNavigationScroll()
  const product = FindByName(page)

  const isTableMobile = useMediaQuery('(max-width: 760px)')
  return (
    <Wrapper
      rightSection={
        <Image
          src={product?.imageUrl}
          alt={product?.id}
          h={{ base: 200, sm: 200, md: 400, lg: 500 }}
          fit="contain"
        />
      }
      activeHead={false}
      bgImage="transparent"
      leftWidth="45%"
      rightWidth="45%"
      $paddingTop="0px"
      isReverseWrap={true}
    >
      <div style={{ paddingInline: '10px' }}>
        <Image
          src={isTableMobile ? '/bgNet_mobile.webp' : '/bgNet.webp'}
          alt="background image"
          style={{
            position: 'absolute',
            top: '10%',
            left: '0%',
            opacity: '25%',
            aspectRatio: '11/9',
            zIndex: '-1',
          }}
          loading="eager"
          fit="contain"
        />

        <TextWithFamily
          $font="Great Vibes"
          fontWeight="500"
          fontSize="37px"
          color={SavedColors.TextColorGreen}
          $textalign="left"
        >
          Addon Module
        </TextWithFamily>

        <WelcomeTitle
          $font="Nunito"
          fontWeight="800"
          color={SavedColors.TextColor}
        >
          {product?.id}
        </WelcomeTitle>
        <WelcomeText $font="Roboto">{product?.overview}</WelcomeText>

        <Container
          gap={20}
          w="100%"
          wrap="wrap"
          justify="start"
          align="center"
          py={20}
        >
          <HoveredButtonWithoutBorder
            radius={20}
            size="sm"
            w={{ base: '100%', sm: 'auto', md: 'auto', lg: 'auto' }}
            color={SavedColors.Primaryblue}
            variant="transparent"
            onClick={() => {
              window.location.href = 'https://wa.me/+256755818183'
            }}
            style={{
              color: SavedColors.primaryBlue,
            }}
          >
            Speak to Sales
          </HoveredButtonWithoutBorder>

          <HoveredButtonWithoutBorder
            as="a"
            radius={20}
            size="sm"
            w={{ base: '100%', sm: 'auto', md: 'auto', lg: 'auto' }}
            color={SavedColors.Primaryblue}
            variant="transparent"
            href="/brochures/Rite eats.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: SavedColors.primaryBlue,
              fontWeight: '600',
              fontSize: '14px',
            }}
          >
            Download product brochure
          </HoveredButtonWithoutBorder>
        </Container>
        <HoveredArrow
          onClick={() =>
            navigateAndScroll(product?.target as string, 'addon-info-section')
          }
        >
          <Image
            src="/arrow-down-big-green.webp"
            alt="background image"
            loading="eager"
            fit="contain"
            w={{ base: '0px', sm: '0px', md: '120px', lg: '150px' }}
          />
        </HoveredArrow>
      </div>
    </Wrapper>
  )
}

export { AddonWelcome }
