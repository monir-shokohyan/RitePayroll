import { MdKeyboardArrowRight } from 'react-icons/md'
import { useLocation } from 'react-router-dom'

import { addonLinks } from '@features/app-layout/constants'

import {
  MenuContainer,
  MenuItemOnly,
  MenuList,
  MenuTitle,
  StyledProductMenu,
} from '../styles/styles'

export const ProductsTableOfContent: React.FC = () => {
  const location = useLocation()

  return (
    <StyledProductMenu>
      <MenuContainer>
        <MenuTitle>Our Products</MenuTitle>
        <MenuList>
          {addonLinks.map((link) => (
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
  )
}
