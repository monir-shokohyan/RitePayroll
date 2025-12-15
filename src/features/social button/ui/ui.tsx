import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

import {
  ButtonContent,
  ShareIcon,
  SocialIcons,
  SocialLink,
  TooltipContainer,
  TooltipContent,
} from '../styles'

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
            href="#"
            className="twitter"
            aria-label="Share on Twitter"
          >
            <FaTwitter />
          </SocialLink>
          <SocialLink
            href="#"
            className="facebook"
            aria-label="Share on Facebook"
          >
            <FaFacebookF />
          </SocialLink>
          <SocialLink
            href="#"
            className="linkedin"
            aria-label="Share on LinkedIn"
          >
            <FaLinkedinIn />
          </SocialLink>
        </SocialIcons>
      </TooltipContent>
    </TooltipContainer>
  )
}

export { Ui }
