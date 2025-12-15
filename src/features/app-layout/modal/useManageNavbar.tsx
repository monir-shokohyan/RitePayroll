import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDisclosure } from '@mantine/hooks'

import { useNavigationScroll } from '@shared/hooks/useNavigationScroll'

import { addonLinks } from '../constants'

const useManageNavbar = () => {
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [opened, { toggle, close }] = useDisclosure()
  const [activeSection, setActiveSection] = useState(
    'dashboard-welcome-section',
  )
  const { navigateAndScroll } = useNavigationScroll()
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('')
      return
    }

    const handleScroll = () => {
      const sections = [
        'dashboard-welcome-section',
        'dashboard-editions-section',
        'dashboard-features-section',
        'dashboard-addon-section',
        'dashboard-industries-section',
        'dashboard-contact-section',
      ]

      for (const sectionId of sections) {
        // eslint-disable-next-line unicorn/prefer-query-selector
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    const cleanup = () => window.removeEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return cleanup
  }, [isHomePage])

  const getSectionActive = (sectionId: string) =>
    isHomePage && activeSection === sectionId ? 'active' : ''

  const isProductsActive = addonLinks.some(
    (link) => location.pathname === link.to,
  )
  return {
    getSectionActive,
    isProductsActive,
    desktopProductsOpen,
    setDesktopProductsOpen,
    mobileProductsOpen,
    setMobileProductsOpen,
    opened,
    toggle,
    close,
    navigateAndScroll,
    activeSection,
  }
}

export { useManageNavbar }
