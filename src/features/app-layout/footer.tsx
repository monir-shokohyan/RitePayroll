import { memo } from 'react'
import { FaGithub, FaPhoneAlt } from 'react-icons/fa'
import { HiGlobeAlt } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { Flex } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import { ImportantInfo } from '@shared/constants/companyInfo'
import { IconWithText } from '@shared/ui/IconWithText'
import { TextWithFamily } from '@shared/ui/Typography'

import { FooterContainer } from './styles'

const Footer = memo(() => {
  return (
    <FooterContainer>
      <Flex
        gap={10}
        align="center"
        justify="center"
      >
        <IconWithText
          allowText={false}
          allowTextRes={false}
          icon={FaGithub}
          iconSize={20}
          handleClick={() => window.open(ImportantInfo.githubUrl, '_blank')}
        />
        <IconWithText
          allowText={false}
          allowTextRes={false}
          icon={FaPhoneAlt}
          iconSize={20}
          handleClick={() => (window.location.href = 'tel:+256755818183')}
        />
        <IconWithText
          allowText={false}
          allowTextRes={false}
          icon={MdEmail}
          iconSize={20}
          handleClick={() =>
            (window.location.href = `mailto:${ImportantInfo.emailAddress}`)
          }
        />
        <IconWithText
          allowText={false}
          allowTextRes={false}
          icon={HiGlobeAlt}
          iconSize={20}
          handleClick={() => window.open(ImportantInfo.website, '_blank')}
        />
      </Flex>
      <TextWithFamily
        $textalign="center"
        color={SavedColors.DarkWhite}
        fontSize="1rem"
        $font="Roboto"
      >
        © Copyright RiteEats. All right reserved.
      </TextWithFamily>
    </FooterContainer>
  )
})

export { Footer }
