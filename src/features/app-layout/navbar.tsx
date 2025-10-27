import { Link, useNavigate, useLocation } from "react-router-dom";
import SearchInput from "@shared/ui/searchInput/searchInput";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useState, useEffect, memo } from "react";
import { Burger, Container, Image, Menu, Popover } from "@mantine/core";
import { NavbarS, MenubarS, MenuItems, ProductMenuListTrigger, ProductMenuTrigger, CustomMenuItem, MenuButton, MenuListItem, MenuButtonContainer, VerticalLine } from "./styles";
import { productLinks } from "./constants";
import { useDisclosure } from "@mantine/hooks";
import { SavedColors } from "@shared/constants";
import useNavigationScroll from "@shared/hooks/useNavigationScroll";

const Navbar = memo(() => {
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [opened, { toggle, close }] = useDisclosure();
  const [activeSection, setActiveSection] = useState('dashboard-welcome-section');
  const { navigateAndScroll } = useNavigationScroll();
  const location = useLocation();

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'dashboard-welcome-section',
        'dashboard-about-section',
        'dashboard-contact-section'
      ];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with some offset for better UX)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  // Check if a product page is active
  const isProductActive = productLinks.some(link => location.pathname === link.to);

  return (
    <NavbarS>
      <MenubarS>
        <Image src="/lotus logo.png" alt="lotus logo" w={{ base: '110px', lg: '162px' }} />
        
        <MenuItems 
          to={'/'} 
          onClick={() => navigateAndScroll('/', 'dashboard-welcome-section')}
          className={activeSection === 'dashboard-welcome-section' ? 'active' : ''}
        >
          Home
        </MenuItems>

        <MenuItems 
          to={'/'} 
          onClick={() => navigateAndScroll('/', 'dashboard-about-section')}
          className={activeSection === 'dashboard-about-section' ? 'active' : ''}
        >
          About Us
        </MenuItems>

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
            <ProductMenuTrigger className={isProductActive ? 'active' : ''}>
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
                className={location.pathname === link.to ? 'active' : ''}
              >
                {link.label}
              </CustomMenuItem>
            ))}
          </Menu.Dropdown>
        </Menu>

        <MenuItems 
          to="/" 
          onClick={() => navigateAndScroll('/', 'dashboard-contact-section')}
          className={activeSection === 'dashboard-contact-section' ? 'active' : ''}
        >
          Contact Us
        </MenuItems>
      </MenubarS>

      <SearchInput showSearch={false} deActiveMenu={() => close()}/>

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
          <SearchInput showSearch={true} deActiveMenu={() => close()}/>
          
          <MenuListItem 
            to={'/'} 
            onClick={() => {
              toggle()
              navigateAndScroll('/', 'dashboard-welcome-section')
            }} 
            style={{ marginTop: '1px' }}
            className={activeSection === 'dashboard-welcome-section' ? 'active' : ''}
          >
            Home
          </MenuListItem>

          <MenuListItem 
            to={'/'} 
            onClick={() => {
              navigateAndScroll('/', 'dashboard-about-section')
              toggle()
            }}
            className={activeSection === 'dashboard-about-section' ? 'active' : ''}
          >
            About Us
          </MenuListItem>

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
              <ProductMenuListTrigger className={isProductActive ? 'active' : ''}>
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
                  className={location.pathname === link.to ? 'active' : ''}
                >
                  {link.label}
                </CustomMenuItem>
              ))}
            </Menu.Dropdown>
          </Menu>

          <MenuListItem 
            to={'/'} 
            onClick={() => {
              toggle()
              navigateAndScroll('/', 'dashboard-contact-section')
            }}
            className={activeSection === 'dashboard-contact-section' ? 'active' : ''}
          >
            Contact Us
          </MenuListItem>

          <VerticalLine opacity={20} style={{ marginBlock: '10px' }} />

          <Container p='10px' >
            <Image src="/lotus logo.png" alt="lotus logo" width={104} />
          </Container>
        </Popover.Dropdown>
      </Popover>
    </NavbarS>
  );
})

export default Navbar;