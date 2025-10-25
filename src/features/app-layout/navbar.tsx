import { Link, useNavigate } from "react-router-dom";
import SearchInput from "@shared/ui/searchInput/searchInput";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useState } from "react";
import { Burger, Container, Image, Menu, Popover } from "@mantine/core";
import { NavbarS, MenubarS, MenuItems, ProductMenuListTrigger, ProductMenuTrigger, CustomMenuItem, MenuButton, MenuListItem, MenuButtonContainer, VerticalLine } from "./styles";
import { productLinks } from "./constants";
import { useDisclosure } from "@mantine/hooks";
import { SavedColors } from "@shared/constants";
import useNavigationScroll from "@shared/hooks/useNavigationScroll";



const Navbar = () => {
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [opened, { toggle, close }] = useDisclosure();
  const { navigateAndScroll } = useNavigationScroll()
  return (
    <NavbarS>
      <MenubarS>
        <Image src="/lotus logo.png" alt="lotus logo" w={{ base: '110px', lg: '162px' }} />
        <MenuItems to={'/'}  onClick={() => navigateAndScroll('/', 'dashboard-welcome-section')} >Home</MenuItems>

        <MenuItems to={'/'} onClick={() => navigateAndScroll('/', 'dashboard-about-section')}>About Us</MenuItems>
        <Menu
          width={200}
          position="bottom"
          withArrow
          shadow="md"
          transitionProps={{ transition: "scale-y" }}
          opened={desktopProductsOpen}
          onChange={setDesktopProductsOpen}
        >
          <Menu.Target>
            <ProductMenuTrigger>
              Products
              {desktopProductsOpen ? (
                <IoChevronUp style={{ marginLeft: "5px" }} />
              ) : (
                <IoChevronDown style={{ marginLeft: "5px" }} />
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
              >
                {link.label}
              </CustomMenuItem>
            ))}
          </Menu.Dropdown>
        </Menu>
        <MenuItems to="/" onClick={() => navigateAndScroll('/', 'dashboard-contact-section')}>Contact Us</MenuItems>
      </MenubarS>
      <SearchInput showSearch={false} />

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
            <Burger lineSize={2} size="md" color={SavedColors.Primaryblue} opened={opened} onClick={toggle} aria-label="Toggle navigation" />
          </MenuButtonContainer>
        </Popover.Target>
        <Popover.Dropdown>
          <SearchInput showSearch={true} />
          <MenuListItem to={'/'} onClick={() => {
            toggle()
            navigateAndScroll('/', 'dashboard-welcome-section')
          }} style={{ marginTop: '1px' }}>Home</MenuListItem>
          <MenuListItem to={'/'} onClick={() => {
            navigateAndScroll('/', 'dashboard-about-section')
            toggle()
          }}>About Us</MenuListItem>
          <Menu
            width={250}
            position="bottom"
            withArrow
            shadow="md"
            transitionProps={{ transition: "scale-y" }}
            withinPortal
            opened={mobileProductsOpen}
            onChange={setMobileProductsOpen}
          >
            <Menu.Target>
              <ProductMenuListTrigger>
                Products
                {mobileProductsOpen ? (
                  <IoChevronUp style={{ marginLeft: "5px" }} />
                ) : (
                  <IoChevronDown style={{ marginLeft: "5px" }} />
                )}
              </ProductMenuListTrigger>
            </Menu.Target>
            <Menu.Dropdown>
              {productLinks.map((link) => (
                <CustomMenuItem
                  key={link.to}
                  component={Link}
                  to={link.to}
                  onClick={() => {
                    setMobileProductsOpen(false);
                    close();
                  }}
                >
                  {link.label}
                </CustomMenuItem>
              ))}
            </Menu.Dropdown>
          </Menu>
          <MenuListItem to={'/'} onClick={() => {
            toggle()
            navigateAndScroll('/', 'dashboard-contact-section')

          }}>Contact Us</MenuListItem>
          <VerticalLine opacity={20} style={{ marginBlock: '10px' }} />

          <Container p='10px' >
            <Image src="/lotus logo.png" alt="lotus logo" width={104} />
          </Container>

        </Popover.Dropdown>
      </Popover>
    </NavbarS>
  );
};

export default Navbar;