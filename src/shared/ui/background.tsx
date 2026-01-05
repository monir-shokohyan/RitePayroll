import { ReactNode } from 'react'
import { Card, Flex } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { VerticalLine } from '@features/app-layout/styles'
import { SavedColors } from '@shared/constants'

import { TextResponsive, TextWithFamily } from './Typography'

const Background = ({
  children,
  desTitle = '',
  title = '',
  activeHead = true,
  activeSticker = false,
}: {
  children: ReactNode
  desTitle: string
  title: string
  activeHead: boolean
  activeSticker?: boolean
}) => {
  const isMobile = useMediaQuery('(max-width: 760px)')
  return (
    <div
      style={{
        borderBottom: `1px solid ${SavedColors.DarkWhite}`,
        position: 'relative',
      }}
    >
      {activeSticker && (
        <div
          style={{
            position: 'absolute',
            right: `${isMobile ? '0px' : '20px'}`,
            top: '0px',
          }}
        >
          <Card
            bg={SavedColors.highlite}
            radius={0}
            p={{ base: 10, sm: 10, md: 15, lg: 20 }}
            style={{
              position: 'relative',
              border: `2px solid ${SavedColors.highlite}`,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(-1deg) translateY(-2px)'
              e.currentTarget.style.boxShadow =
                '6px 6px 16px rgba(0, 0, 0, 0.2), -2px -2px 10px rgba(255, 255, 255, 0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(-3deg)'
              e.currentTarget.style.boxShadow =
                '4px 4px 12px rgba(0, 0, 0, 0.15), -2px -2px 8px rgba(255, 255, 255, 0.5)'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: '0 20px 20px 0',
                borderColor: `transparent ${SavedColors.highlite} transparent transparent`,
                filter: 'brightness(0.85)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: '0 20px 20px 0',
                borderColor:
                  'transparent rgba(0, 0, 0, 0.1) transparent transparent',
                transform: 'translateX(1px) translateY(1px)',
              }}
            />

            <TextWithFamily
              $font="Roboto"
              fontSize={isMobile ? '13px' : '24px'}
              fontWeight="600"
              style={{
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                zIndex: 2,
              }}
              color={SavedColors.DemWhite}
            >
              Developed by
            </TextWithFamily>
            <TextWithFamily
              $font="Roboto"
              fontSize={isMobile ? '9px' : '13px'}
              fontWeight="400"
              style={{
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                zIndex: 2,
              }}
              color={SavedColors.DemWhite}
            >
              Lotus Soft Technologies Ltd
            </TextWithFamily>
          </Card>
        </div>
      )}
      {activeHead && (
        <Flex
          direction="column"
          align="center"
          style={{ width: '100vw' }}
        >
          <TextResponsive
            color={SavedColors.TextHighlite}
            fontSize="34px"
            fontWeight="500"
            $font="Great Vibes"
            $textalign="center"
          >
            {desTitle}
          </TextResponsive>
          <TextResponsive
            color={SavedColors.TextColor}
            fontSize="33px"
            fontWeight="600"
            $textalign="center"
          >
            {title}
          </TextResponsive>
          <VerticalLine />
        </Flex>
      )}
      {children}
    </div>
  )
}

export { Background }
