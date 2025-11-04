import { memo } from 'react'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from 'react-icons/fa'
import { LuGlobe } from 'react-icons/lu'
import { MdEmail } from 'react-icons/md'
import { Flex } from '@mantine/core'

import IconWithText from '@shared/ui/IconWithText'

import { UtilityContainer } from './styles'
import { ImportantInfo } from '@shared/constants/companyInfo'

const UtilityBar = memo(() => {
  return (
    <UtilityContainer>
      <Flex gap={10}>
        <IconWithText
          fontSize="14px"
          text={ImportantInfo.phoneNumber}
          icon={FaPhoneAlt}
          handleClick={() => (window.location.href = 'tel:+256755818183')}
        />
        <IconWithText
          fontSize="14px"
          text={ImportantInfo.emailAddress}
          icon={MdEmail}
          handleClick={() =>
            (window.location.href = `mailto:${ImportantInfo.emailAddress}`)
          }
        />
        <IconWithText
          fontSize="14px"
          text={ImportantInfo.website}
          icon={LuGlobe}
          handleClick={() => window.open(ImportantInfo.website, '_blank')}
        />
      </Flex>
      <Flex gap={10}>
        <IconWithText
          allowText={false}
          icon={FaFacebook}
          iconSize={20}
          handleClick={() => window.open(ImportantInfo.facebookUrl, '_blank')}
        />
        <IconWithText
          allowText={false}
          icon={FaLinkedin}
          iconSize={20}
          handleClick={() => window.open(ImportantInfo.linkedinUrl, '_blank')}
        />
        <IconWithText
          allowText={false}
          icon={FaInstagram}
          iconSize={20}
          // handleClick={() => window.open(ImportantInfo.githubUrl, '_blank')}
        />
        <IconWithText
          allowText={false}
          icon={FaGithub}
          iconSize={20}
          handleClick={() => window.open(ImportantInfo.githubUrl, '_blank')}
        />
        <IconWithText
          allowText={false}
          icon={FaPhoneAlt}
          iconSize={20}
          handleClick={() => (window.location.href = 'tel:+256755818183')}
        />
      </Flex>
    </UtilityContainer>
  )
})

export default UtilityBar
