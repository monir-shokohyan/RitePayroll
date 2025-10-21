import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchInput from "@shared/ui/searchInput/searchInput";
import { SavedColors } from "@shared/constants";
import { BiCategory } from "react-icons/bi";
import { IoCloseSharp, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useState } from "react";
import { Menu, Popover, MenuItemProps, PolymorphicComponentProps } from "@mantine/core";

// Define a type that includes polymorphic props for Menu.Item
type CustomMenuItemProps<C = "button"> = PolymorphicComponentProps<C, MenuItemProps>;

const NavbarS = styled.nav`
  display: flex;
  padding-inline: 20px;
  height: 73px;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
`;

const MenubarS = styled.div`
  display: flex;
  justify-content: start;
  height: 100%;
  width: 60%;
  gap: 20px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const MenuItems = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 73px;
  width: 101px;
  text-decoration: none;
  color: #012970;
  font-size: 18px;
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  font-style: normal;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease-in;

  &:hover {
    border-bottom: 3px solid ${SavedColors.Primaryblue};
    color: ${SavedColors.Primaryblue};
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MenuListItem = styled(Link)`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 50px;
  width: 100%;
  padding-left: 20px;
  text-decoration: none;
  color: #012970;
  font-size: 16px;
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  font-style: normal;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease-in;

  &:hover {
    background: ${SavedColors.Primaryblue};
    color: ${SavedColors.PrimaryWhite};
  }
`;

const MenuButton = styled.div`
  height: 45px;
  width: 45px;
  background-color: ${SavedColors.Primaryblue};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const MenuButtonContainer = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 0.3s ease-in;
  &:hover {
    transform: scale(105%);
  }
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

const ProductMenuTrigger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 73px;
  width: 101px;
  text-decoration: none;
  color: #012970;
  font-size: 18px;
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  font-style: normal;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease-in;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid ${SavedColors.Primaryblue};
    color: ${SavedColors.Primaryblue};
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const ProductMenuListTrigger = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 50px;
  width: 100%;
  padding-left: 20px;
  text-decoration: none;
  color: #012970;
  font-size: 15px;
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  font-style: normal;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease-in;
  cursor: pointer;

  &:hover {
     background: ${SavedColors.Primaryblue};
     color: ${SavedColors.PrimaryWhite};
  }
`;

const CustomMenuItem = styled(Menu.Item)<any>`
  font-family: "Barlow", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #012970 !important;

  &:hover {
    background-color: ${SavedColors.Primaryblue} !important;
    color: white !important;
  }
`;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const productLinks = [
    { to: "/ritebooks", label: "Ritebooks" },
    { to: "/ritebooks-express", label: "Ritebooks Express" },
    { to: "/ritebooks-pocket", label: "Ritebooks Pocket" },
    { to: "/riteroutes", label: "RiteRoutes" },
    { to: "/ritepayroll", label: "Rite Payroll" },
    { to: "/riteeats", label: "RiteEats" },
    { to: "/justpay", label: "JustPay" },
    { to: "/tallyprime", label: "Tally Prime" },
  ];

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
          <MenuListItem to={'/'} onClick={() => setShowMenu(false)}>Home</MenuListItem>
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
        </Popover.Dropdown>
      </Popover>
    </NavbarS>
  );
};

export default Navbar;