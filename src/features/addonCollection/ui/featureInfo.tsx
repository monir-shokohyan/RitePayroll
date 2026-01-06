import { IconType } from 'react-icons'
import { Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { StyledCard } from '@features/industriesSection/styles'
import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers/findByName'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { RadialHoverEffect } from '@shared/ui/ripple'
import { TextResponsive } from '@shared/ui/Typography'

import { ProductsType } from '../types'

const FeatureInfo = ({ page }: { page: ProductsType }) => {
  const product = FindByName(page)
  const isMobile = useMediaQuery('(max-width: 760px)')

  return (
    <div id="feature-info-section">
      <Wrapper
        isReverseWrap={false}
        fullHeight={false}
        rightSection={null}
        RSJustify="center"
        desTitle="What powerful benefits do this feature have ?"
        title="Key benefits of this feature"
        doubleOption={false}
        paddingToTopLayer={isMobile ? '10px' : '80px'}
        headTextAlign="left"
        paddingBottom={isMobile ? '10px' : '80px'}
      >
        <Flex
          wrap="wrap"
          w="100%"
          justify="center"
          gap={10}
        >
          {product?.features?.map((feature) => {
            const Icon = feature.icon as IconType
            return (
              <StyledCard
                key={feature.name}
                bg="transparent"
              >
                <RadialHoverEffect
                  style={{ width: '100%', height: '100%' }}
                  color={SavedColors.highlite}
                  borderRadius="0px"
                  shape={true}
                >
                  <TextResponsive
                    $textalign="center"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 4,
                      paddingInline: '10px',
                    }}
                  >
                    {feature.name}
                  </TextResponsive>
                  <Icon
                    size="60%"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%,-50%)',
                      zIndex: 2,
                      opacity: 0.2,
                    }}
                    color={SavedColors.highlite}
                  />
                </RadialHoverEffect>
              </StyledCard>
            )
          })}
        </Flex>
      </Wrapper>
    </div>
  )
}

export { FeatureInfo }
