import { useLocation } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MenuContainer, MenuItemOnly, MenuList, MenuTitle, StyledProductMenu } from '../styles/styles';
import { productLinks } from '@features/app-layout/constants';


export const ProductsTableOfContent: React.FC = () => {
  const location = useLocation();

  return (
    <StyledProductMenu>
      <MenuContainer>
        <MenuTitle>Our Products</MenuTitle>
        <MenuList>
          {productLinks.map((link) => (
            <MenuItemOnly
              key={link.to}
              to={link.to}
              $isActive={location.pathname === link.to}
            >
              {link.label}
              <MdKeyboardArrowRight />
            </MenuItemOnly>
          ))}
        </MenuList>
      </MenuContainer>
    </StyledProductMenu>
  );
};