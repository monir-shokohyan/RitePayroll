import { memo } from 'react'
import { IconType } from 'react-icons'
import { Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { horWrapper as Wrapper } from '@shared/ui/horWrapper'
import { RadialHoverEffect } from '@shared/ui/ripple'
import { TextResponsive } from '@shared/ui/Typography'

import { StyledCard } from '../styles'

const Ui = memo(() => {
  const pageInfo = FindByName('action')
  const isMobile = useMediaQuery('(max-width: 760px)')

  return (
    <div id="dashboard-action-section">
      <Wrapper
        isReverseWrap={false}
        fullHeight={false}
        rightSection={null}
        RSJustify="center"
        desTitle={pageInfo?.dTitle}
        title={pageInfo?.title}
        doubleOption={false}
        paddingToTopLayer={isMobile ? '10px' : '80px'}
      >
        <Flex
          wrap="wrap"
          w="100%"
          justify="center"
          gap={10}
        >
          {pageInfo?.features?.map((feature) => {
            const Icon = feature.icon as IconType
            return (
              <StyledCard
                key={feature.name}
                bg="white"
              >
                <RadialHoverEffect
                  style={{ width: '100%', height: '100%' }}
                  color={SavedColors.highlite}
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
                    fontSize="20px"
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
                      opacity: 0.1,
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
})

export { Ui }
