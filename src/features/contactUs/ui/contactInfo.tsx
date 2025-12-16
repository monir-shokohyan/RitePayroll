import React from 'react'
import { TbFileUnknown } from 'react-icons/tb'
import { Flex, Image } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import { FindByName } from '@shared/helpers'
import { IconWithText } from '@shared/ui/IconWithText'

const ContactInfo: React.FC = () => {
  const pageInfo = FindByName('contact us')
  return (
    <Flex
      p={{ base: '20px', lg: '20px' }}
      w={{ base: '100%', lg: '100%' }}
      direction="column"
      justify="center"
    >
      <Image
        src="/contact.png"
        height={200}
        w={200}
        fit="contain"
        style={{ marginBottom: '20px' }}
        alt="image for contact section"
      />
      {pageInfo?.features.map((feature) => {
        return (
          <IconWithText
            key={feature.name}
            icon={feature.icon ?? TbFileUnknown}
            text={feature.description}
            $hoveractive={
              feature.name.toLowerCase() === 'address' ? 'false' : 'true'
            }
            font="Nunito"
            allowTextRes={false}
            fontSize="14px"
            fontWeight="600"
            textColor={SavedColors.TextColor}
            iconColor={SavedColors.primaryBlue}
            $border={`1px solid ${SavedColors.primaryBlue}`}
            $isActiveIconBg={false}
            $iconContainerSize="sm"
            iconSize={15}
            padding="8px"
            handleClick={() => {
              if (feature.name.toLowerCase() !== 'address') {
                window.location.href = `${feature.target}`
              }
            }}
          />
        )
      })}
    </Flex>
  )
}

export { ContactInfo }
