import { memo } from 'react'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Burger, Container, Image, Menu, Popover } from '@mantine/core'

import { SavedColors } from '@shared/constants'
import SearchInput from '@shared/ui/searchInput/searchInput'

import { productLinks } from './constants'
import useManageNavbar from './modal/useManageNavbar'
import {
  CustomMenuItem,
  MenubarS,
  MenuButtonContainer,
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

  return (
    <NavbarS>
      <MenubarS>
        <Image
          src="/lotus-logo.webp"
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
          onClick={() => navigateAndScroll('/', 'dashboard-about-section')}
          className={getSectionActive('dashboard-about-section')}
        >
          About Us
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
              aria-label="Toggle products menu"
              aria-haspopup="menu"
              aria-expanded={desktopProductsOpen}
              aria-controls="products-menu"
            >
              Products
              {desktopProductsOpen ? (
                <IoChevronUp style={{ marginLeft: '5px' }} />
              ) : (
                <IoChevronDown style={{ marginLeft: '5px' }} />
              )}
            </ProductMenuTrigger>
          </Menu.Target>
          <Menu.Dropdown>
            {productLinks.map((link) => (
              <CustomMenuItem
                key={link.to}
                component={Link}
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

        <MenuItems
          to="/"
          onClick={() => navigateAndScroll('/', 'dashboard-contact-section')}
          className={getSectionActive('dashboard-contact-section')}
        >
          Contact Us
        </MenuItems>
      </MenubarS>

      <SearchInput
        $showsearch={false}
        deActiveMenu={() => close()}
      />

      <Popover
        width={300}
        position="bottom"
        withArrow
        shadow="md"
        opened={opened}
        onChange={toggle}
      >
        <Popover.Target>
          <MenuButtonContainer>
            <Burger
              lineSize={3}
              size="md"
              color={SavedColors.Primaryblue}
              opened={opened}
              onClick={toggle}
              aria-label={
                opened ? 'Close navigation menu' : 'Open navigation menu'
              }
            />
          </MenuButtonContainer>
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
              navigateAndScroll('/', 'dashboard-about-section')
              toggle()
            }}
            className={
              activeSection === 'dashboard-about-section' ? 'active' : ''
            }
          >
            About Us
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
                Products
                {mobileProductsOpen ? (
                  <IoChevronUp style={{ marginLeft: '5px' }} />
                ) : (
                  <IoChevronDown style={{ marginLeft: '5px' }} />
                )}
              </ProductMenuListTrigger>
            </Menu.Target>
            <Menu.Dropdown id="mobile-products-menu">
              {productLinks.map((link) => (
                <CustomMenuItem
                  key={link.to}
                  component={Link}
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

          <VerticalLine
            opacity={20}
            style={{ marginBlock: '10px' }}
          />

          <Container
            p="10px"
            style={{ textAlign: 'center' }}
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
        </Popover.Dropdown>
      </Popover>
    </NavbarS>
  )
})

export default Navbar
