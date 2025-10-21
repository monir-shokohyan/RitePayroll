import { Link } from "react-router-dom";
import SearchInput from "@shared/ui/searchInput/searchInput";
import { BiCategory } from "react-icons/bi";
import { IoCloseSharp, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useState } from "react";
import { Container, Menu, Popover } from "@mantine/core";
import { NavbarS, MenubarS, MenuItems, ProductMenuListTrigger, ProductMenuTrigger, CustomMenuItem, MenuButton, MenuListItem, MenuButtonContainer, VerticalLine } from "./styles";
import { productLinks } from "./constants";



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);



  return (
    <NavbarS>
      <MenubarS>
        <img src="/lotus logo.png" alt="lotus logo" width={164} />
        <MenuItems to={'/'}>Home</MenuItems>
        <MenuItems to={'/about'}>About Us</MenuItems>
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
        <MenuItems to={'/contact'}>Contact Us</MenuItems>
      </MenubarS>
      <SearchInput showSearch={false} />

      <Popover
        width={300}
        position="bottom"
        withArrow
        shadow="md"
        opened={showMenu}
        onChange={setShowMenu}
      >
        <Popover.Target>
          <MenuButtonContainer>
            {!showMenu ? (
              <MenuButton onClick={() => setShowMenu(true)}>
                <BiCategory color="white" size={24} />
              </MenuButton>
            ) : (
              <IoCloseSharp size={45} color="red" onClick={() => setShowMenu(false)} />
            )}
          </MenuButtonContainer>
        </Popover.Target>
        <Popover.Dropdown>
          <SearchInput showSearch={true} />
          <MenuListItem to={'/'} onClick={() => setShowMenu(false)} style={{marginTop: '1px'}}>Home</MenuListItem>
          <MenuListItem to={'/about'} onClick={() => setShowMenu(false)}>About Us</MenuListItem>
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
                    setShowMenu(false);
                  }}
                >
                  {link.label}
                </CustomMenuItem>
              ))}
            </Menu.Dropdown>
          </Menu>
          <MenuListItem to={'/contact'} onClick={() => setShowMenu(false)}>Contact Us</MenuListItem>
          <VerticalLine opacity={20} style={{marginBlock: '10px'}} />
          
           <Container  p='10px' >
                          <img src="/lotus logo.png" alt="lotus logo" width={104} />
            </Container>

        </Popover.Dropdown>
      </Popover>
    </NavbarS>
  );
};

export default Navbar;