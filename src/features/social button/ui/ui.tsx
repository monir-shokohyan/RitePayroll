import { useState } from 'react'
import { FaGithub, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useClickOutside } from '@mantine/hooks'

import { ImportantInfo } from '@shared/constants/companyInfo'

import {
  ButtonContent,
  ShareIcon,
  SocialIcons,
  SocialLink,
  TooltipContainer,
  TooltipContent,
} from '../styles'

const Ui = () => {
  const ref = useClickOutside(() => setActiveToolbar(false))

  const [activeToolbar, setActiveToolbar] = useState(false)
  return (
    <TooltipContainer>
      <ButtonContent
        role="button"
        tabIndex={0}
        onClick={() => setActiveToolbar((prev) => !prev)}
      >
        <ShareIcon
          className="share-icon"
          aria-label="Share"
        />
      </ButtonContent>

      {activeToolbar && (
        <TooltipContent ref={ref}>
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
      )}
    </TooltipContainer>
  )
}

export { Ui }
