import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaPhone, FaTwitter } from 'react-icons/fa'

import {
  ButtonContent,
  ShareIcon,
  SocialIcons,
  SocialLink,
  TooltipContainer,
  TooltipContent,
} from '../styles'
import { MdEmail } from 'react-icons/md'
import { ImportantInfo } from '@shared/constants/companyInfo'

const Ui: React.FC = () => {
  return (
    <TooltipContainer>
      <ButtonContent
        role="button"
        tabIndex={0}
      >
        <ShareIcon
          className="share-icon"
          aria-label="Share"
        />
      </ButtonContent>

      <TooltipContent>
        <SocialIcons>
          <SocialLink
            href={ImportantInfo.githubUrl}
            className="github"
            aria-label="reach github account"
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="tel:+256755818183"
            className="phone"
            aria-label="reach phone"
          >
            <FaPhone />
          </SocialLink>
          <SocialLink
            href={`mailto:${ImportantInfo.emailAddress}`}
            className="email"
            aria-label="reach email address"
          >
            <MdEmail />
          </SocialLink>
        </SocialIcons>
      </TooltipContent>
    </TooltipContainer>
  )
}

export { Ui }
