import { memo } from 'react'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Burger, Container, Image, Menu, Popover } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { SavedColors } from '@shared/constants'
import { SearchInput } from '@shared/ui/searchInput/searchInput'

import { addonLinks } from './constants'
import { useManageNavbar } from './modal/useManageNavbar'
import {
  CustomMenuItem,
  MenubarS,
  MenuItems,
  MenuListItem,
  NavbarS,
  ProductMenuListTrigger,
  ProductMenuTrigger,
  VerticalLine,
} from './styles'

const Navbar = memo(() => {
  const {
    navigateAndScroll,
    getSectionActive,
    desktopProductsOpen,
    setDesktopProductsOpen,
    mobileProductsOpen,
    setMobileProductsOpen,
    isProductsActive,
    toggle,
    close,
    opened,
    activeSection,
  } = useManageNavbar()
  const isTabletOrMobile = useMediaQuery('(max-width: 1024px)')
  return (
    <NavbarS>
      <MenubarS>
        <Image
          src="/Rite eats fill.png"
          alt="lotus logo"
          w={{ base: '120', lg: '150px' }}
          h={{ base: '60px', lg: '65px' }}
          fit="contain"
        />

        <MenuItems
          to="/"
          onClick={() => navigateAndScroll('/', 'dashboard-welcome-section')}
          className={getSectionActive('dashboard-welcome-section')}
        >
          Home
        </MenuItems>

        <MenuItems
          to="/"
          onClick={() => navigateAndScroll('/', 'dashboard-editions-section')}
          className={getSectionActive('dashboard-editions-section')}
        >
          Editions
        </MenuItems>

        <MenuItems
          to="/"
          onClick={() => navigateAndScroll('/', 'dashboard-features-section')}
          className={getSectionActive('dashboard-features-section')}
        >
          Features
        </MenuItems>
        <MenuItems
          to="/"
          onClick={() => navigateAndScroll('/', 'dashboard-industries-section')}
          className={getSectionActive('dashboard-industries-section')}
        >
          Industries
        </MenuItems>

        <MenuItems
          to="/"
          onClick={() => navigateAndScroll('/', 'dashboard-contact-section')}
          className={getSectionActive('dashboard-contact-section')}
        >
          Contact Us
        </MenuItems>
        <Menu
          width={200}
          position="bottom"
          withArrow
          shadow="md"
          transitionProps={{ transition: 'scale-y' }}
          opened={desktopProductsOpen}
          onChange={setDesktopProductsOpen}
        >
          <Menu.Target>
            <ProductMenuTrigger
              as="button"
              role="button"
              className={isProductsActive ? 'active' : ''}
              aria-label="Toggle addon menu"
              aria-haspopup="menu"
              aria-expanded={desktopProductsOpen}
              aria-controls="addon-menu"
            >
              Addon
              {desktopProductsOpen ? (
                <IoChevronUp style={{ marginLeft: '5px' }} />
              ) : (
                <IoChevronDown style={{ marginLeft: '5px' }} />
              )}
            </ProductMenuTrigger>
          </Menu.Target>
          <Menu.Dropdown>
            {addonLinks.map((link) => (
              <CustomMenuItem
                key={link.to}
                as={Link}
                to={link.to}
                onClick={() => setDesktopProductsOpen(false)}
                className={location.pathname === link.to ? 'active' : ''}
                role="menuitem"
              >
                {link.label}
              </CustomMenuItem>
            ))}
          </Menu.Dropdown>
        </Menu>
      </MenubarS>

      <SearchInput
        $showsearch={false}
        deActiveMenu={() => close()}
      />
      {/* mobile code */}
      <Popover
        width={300}
        position="bottom"
        withArrow
        shadow="md"
        opened={opened}
        onChange={toggle}
      >
        <Popover.Target>
          <Burger
            lineSize={3}
            size="md"
            color={SavedColors.Primaryblue}
            opened={opened}
            onClick={toggle}
            aria-label={
              opened ? 'Close navigation menu' : 'Open navigation menu'
            }
            style={{ display: `${isTabletOrMobile ? 'block' : 'none'}` }}
          />
        </Popover.Target>
        <Popover.Dropdown id="mobile-menu">
          <SearchInput
            $showsearch={true}
            deActiveMenu={() => close()}
          />

          <MenuListItem
            to="/"
            onClick={() => {
              toggle()
              navigateAndScroll('/', 'dashboard-welcome-section')
            }}
            style={{ marginTop: '1px' }}
            className={
              activeSection === 'dashboard-welcome-section' ? 'active' : ''
            }
          >
            Home
          </MenuListItem>

          <MenuListItem
            to="/"
            onClick={() => {
              navigateAndScroll('/', 'dashboard-editions-section')
              toggle()
            }}
            className={
              activeSection === 'dashboard-editions-section' ? 'active' : ''
            }
          >
            Editions
          </MenuListItem>

          <MenuListItem
            to="/"
            onClick={() => {
              toggle()
              navigateAndScroll('/', 'dashboard-features-section')
            }}
            className={
              activeSection === 'dashboard-features-section' ? 'active' : ''
            }
          >
            Features
          </MenuListItem>
          <MenuListItem
            to="/"
            onClick={() => {
              toggle()
              navigateAndScroll('/', 'dashboard-industries-section')
            }}
            className={
              activeSection === 'dashboard-industries-section' ? 'active' : ''
            }
          >
            Industries
          </MenuListItem>

          <MenuListItem
            to="/"
            onClick={() => {
              toggle()
              navigateAndScroll('/', 'dashboard-contact-section')
            }}
            className={
              activeSection === 'dashboard-contact-section' ? 'active' : ''
            }
          >
            Contact Us
          </MenuListItem>

          <Menu
            width={250}
            position="bottom"
            withArrow
            shadow="md"
            transitionProps={{ transition: 'scale-y' }}
            withinPortal
            opened={mobileProductsOpen}
            onChange={setMobileProductsOpen}
          >
            <Menu.Target>
              <ProductMenuListTrigger
                as="button"
                className={isProductsActive ? 'active' : ''}
                aria-label="Toggle mobile products menu"
                aria-haspopup="menu"
                aria-expanded={mobileProductsOpen}
                aria-controls="mobile-products-menu"
              >
                Addon
                {mobileProductsOpen ? (
                  <IoChevronUp style={{ marginLeft: '5px' }} />
                ) : (
                  <IoChevronDown style={{ marginLeft: '5px' }} />
                )}
              </ProductMenuListTrigger>
            </Menu.Target>
            <Menu.Dropdown id="mobile-products-menu">
              {addonLinks.map((link) => (
                <CustomMenuItem
                  key={link.to}
                  as={Link}
                  to={link.to}
                  onClick={() => {
                    setMobileProductsOpen(false)
                    close()
                  }}
                  className={location.pathname === link.to ? 'active' : ''}
                >
                  {link.label}
                </CustomMenuItem>
              ))}
            </Menu.Dropdown>
          </Menu>

          <VerticalLine style={{ marginBlock: '10px' }} />

          <Container
            p="10px"
            style={{ textAlign: 'center' }}
          >
            <Image
              src="/Rite eats fill.png"
              alt="lotus logo"
              w={{ base: '120', lg: '150px' }}
              h={{ base: '60px', lg: '65px' }}
              fit="contain"
              loading="lazy"
            />
          </Container>
        </Popover.Dropdown>
      </Popover>
      {/* mobile code */}
    </NavbarS>
  )
})

export { Navbar }
