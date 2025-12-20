import { Link } from 'react-router-dom'
import { Flex, FlexProps, Menu, UnstyledButton } from '@mantine/core'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'

const NavbarS = styled.nav`
  position: sticky;
  display: flex;
  top: 0%;
  padding-inline: 20px;
  height: 73px;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  background-color: ${SavedColors.PrimaryWhite};
  z-index: 4;
`

const MenubarS = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
  width: 60%;
  gap: 20px;
`

const MenuItems = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 73px;
  width: 101px;
  text-decoration: none;
  color: #012970;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-style: normal;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${SavedColors.TextColorGreen};
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.35s ease-out;
    border-radius: 10px;
  }

  &:hover,
  &.active {
    color: ${SavedColors.TextColorGreen};

    &::after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`

const MenuListItem = styled(Link)`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 50px;
  width: 100%;
  padding-left: 20px;
  text-decoration: none;
  color: #012970;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-style: normal;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease-in;

  &:hover {
    background: ${SavedColors.TextColorGreen};
    color: ${SavedColors.PrimaryWhite};
  }
  &.active {
    background-color: ${SavedColors.TextColor}10;
    color: ${SavedColors.TextColor};
    font-weight: 600;
  }
`

const MenuButton = styled.div`
  height: 45px;
  width: 45px;
  background-color: ${SavedColors.TextColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

const MenuButtonContainer = styled(UnstyledButton)`
  border-radius: 5px;
  transition: transform 0.3s ease-in;
  &:hover {
    transform: scale(1.05);
  }
  display: none;
  @media (max-width: 1024px) {
    display: flex;
  }
`

const ProductMenuTrigger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 73px;
  width: 101px;
  text-decoration: none;
  color: #012970;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-style: normal;
  transition: all 0.3s ease-in;
  border: 0px;
  background-color: transparent;
  cursor: pointer;
  position: relative;

  @media (max-width: 1024px) {
    display: none;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${SavedColors.TextColorGreen};
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.35s ease-out;
    border-radius: 10px;
  }

  &:hover,
  &.active {
    color: ${SavedColors.TextColorGreen};

    &::after {
      transform: scaleX(1);
    }
  }
`

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
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-style: normal;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease-in;
  border: 0px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background: ${SavedColors.TextColorGreen};
    color: ${SavedColors.PrimaryWhite};
  }
  &.active {
    background-color: ${SavedColors.TextColor}10;
    color: ${SavedColors.TextColor};
    font-weight: 600;
  }
`

const CustomMenuItem = styled(Menu.Item)<any>`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #012970 !important;

  &:hover {
    background-color: ${SavedColors.TextColorGreen} !important;
    color: white !important;
  }
  &.active {
    background-color: ${SavedColors.TextColor}10;
    color: ${SavedColors.TextColor};
    font-weight: 600;
  }
`

const VerticalLine = styled.div`
  width: 154px;
  height: 4px;
  border-radius: 2px;
  background: ${SavedColors.TextColor};
`

const FooterContainer = styled.footer`
  display: flex;
  width: 100vw;
  justify-content: start;
  gap: 10px;
  flex-direction: column;
  background-color: ${SavedColors.FooterBgColor};
  position: relative;
  overflow: hidden;
  padding-block: 10px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.25;
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 3;
  }
`

const FooterFirstContainer = styled(Flex)<FlexProps>`
  padding: 10px;
  width: 55%;
  @media (max-width: 710px) {
    width: 100%;
  }
`
const FooterSecondContainer = styled(Flex)<FlexProps>`
  padding: 10px;
  width: 40%;
  @media (max-width: 710px) {
    width: 100%;
  }
`
export {
  CustomMenuItem,
  FooterContainer,
  FooterFirstContainer,
  FooterSecondContainer,
  MenubarS,
  MenuButton,
  MenuButtonContainer,
  MenuItems,
  MenuListItem,
  NavbarS,
  ProductMenuListTrigger,
  ProductMenuTrigger,
  VerticalLine,
}
