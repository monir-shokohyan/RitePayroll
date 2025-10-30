import { memo } from 'react'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { Flex, Image } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import useNavigationScroll from '@shared/hooks/useNavigationScroll'
import Container from '@shared/ui/Container'
import IconWithText from '@shared/ui/IconWithText'
import { NavLinkS, TextWithFamily } from '@shared/ui/Typography'

import { NavigationLinks, productLinks } from './constants'
import {
  FooterContainer,
  FooterFirstContainer,
  FooterSecondContainer,
  VerticalLine,
} from './styles'
import { ImportantInfo } from '@shared/constants/companyInfo'

const Footer = memo(() => {
  const { navigateAndScroll } = useNavigationScroll()

  return (
    <FooterContainer>
      <Container
        h="92px"
        p="10px"
        justify="center"
      >
        <Image
          src="/lotus-logo.webp"
          alt="lotus logo"
          w={{ base: '120', lg: '150px' }}
          h={{ base: '60px', lg: '65px' }}
          fit="contain"
          loading="lazy"
        />
      </Container>

      <Container
        p="10px"
        gap={10}
        justify="start"
        wrap="wrap"
      >
        <FooterFirstContainer
          gap={10}
          wrap="wrap"
        >
          <Container wrap="wrap">
            <Container
              p="10px"
              gap={10}
              direction="column"
              minw="150px"
              w="50%"
            >
              <Container
                h="35"
                w="100%"
              >
                <TextWithFamily
                  $font="Nunito"
                  fontWeight="600"
                  fontSize="20px"
                  color={SavedColors.PrimaryWhite}
                >
                  Quick Links
                </TextWithFamily>
              </Container>

              {NavigationLinks.map((menu) => {
                return (
                  <NavLinkS
                    key={menu.label}
                    $font="Nunito"
                    fontWeight="600"
                    fontSize="15px"
                    color={SavedColors.DarkWhite}
                    to="/"
                    onClick={() =>
                      navigateAndScroll('/', menu.scrollToSection as string)
                    }
                  >
                    {menu.label}
                  </NavLinkS>
                )
              })}
            </Container>

            <Container
              p="10px"
              gap={10}
              direction="column"
              minw="150px"
              w="50%"
            >
              <Container
                h="35"
                w="100%"
              >
                <TextWithFamily
                  $font="Nunito"
                  fontWeight="600"
                  fontSize="20px"
                  color={SavedColors.PrimaryWhite}
                >
                  Products
                </TextWithFamily>
              </Container>

              {productLinks.map((links) => {
                return (
                  <NavLinkS
                    key={links.label}
                    $font="Nunito"
                    fontWeight="600"
                    fontSize="15px"
                    color={SavedColors.DarkWhite}
                    to={links.to}
                  >
                    {links.label}
                  </NavLinkS>
                )
              })}
            </Container>
          </Container>

          <Container
            p="10px"
            gap={10}
            mw="338px"
            direction="column"
          >
            <Container
              h="35"
              w="100%"
            >
              <TextWithFamily
                $font="Nunito"
                fontWeight="600"
                fontSize="20px"
                color={SavedColors.PrimaryWhite}
              >
                Get In Touch
              </TextWithFamily>
            </Container>
            <IconWithText
              fontSize="14px"
              icon={FaPhoneAlt}
              text={ImportantInfo.phoneNumber}
              padding="0px"
              $hoveractive="false"
            />
            <IconWithText
              fontSize="14px"
              icon={MdEmail}
              text={ImportantInfo.emailAddress}
              padding="0px"
              $hoveractive="false"
            />
            <IconWithText
              fontSize="14px"
              icon={FaLocationDot}
              text={ImportantInfo.address}
              padding="0px"
              $hoveractive="false"
            />
          </Container>
        </FooterFirstContainer>

        <FooterSecondContainer
          p="15px"
          gap={16}
          justify="start"
          direction="column"
        >
          <TextWithFamily
            color={SavedColors.PrimaryWhite}
            fontSize="20px"
            $font="Nunito"
          >
            Lotus Soft Technologies Ltd.
          </TextWithFamily>
          <VerticalLine opacity={20} />
          <TextWithFamily
            color={SavedColors.DarkWhite}
            fontSize="16px"
            $font="Roboto"
          >
            a premier software development company based in Uganda. With over 25
            years of expertise, we offer a suite of solutions designed to
            streamline and enhance business operations. Our flagship products
            include Ritebooks, Justpay, Rite Payroll, and STAR PMS, each crafted
            to address specific business needs. As a trusted partner for Tally
            Accounting software and a leading integrator of URA EFRIS,
          </TextWithFamily>

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
              // handleClick={() => window.open('https://www.facebook.com/yourpage', '_blank')}
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
        </FooterSecondContainer>
      </Container>

      <Container
        w="100%"
        p="10px"
        justify="center"
        background="#000000"
      >
        <TextWithFamily
          $textalign="center"
          color={SavedColors.DarkWhite}
          fontSize="1rem"
          $font="Roboto"
        >
          All Rights Reserved. Designed by Lotus Software Ltd.
        </TextWithFamily>
      </Container>
    </FooterContainer>
  )
})

export default Footer
