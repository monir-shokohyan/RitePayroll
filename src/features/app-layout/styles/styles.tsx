import { Flex, FlexProps, Menu } from "@mantine/core";
import { SavedColors } from "@shared/constants";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
`;

const MenubarS = styled.div`
  display: flex;
  justify-content: center;
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



const UtilityContainer = styled.nav`
  display: flex;
  padding-inline: 20px;
  height: 45px;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  background-color: ${SavedColors.FooterBgColor};
  @media (max-width:1024px){
    display: none;
  }
`;

const VerticalLine = styled.div<{opacity?:number}>`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: #15B3E0;
  opacity: ${({opacity}) => opacity?? 100}%;
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

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/bgNet.png');
    background-size: cover;
    background-position: center;
    opacity: 0.2;
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
@media (max-width:710px){
    width: 100%;
}

`
const FooterSecondContainer = styled(Flex)<FlexProps>`
padding: 10px;
width: 40%;
@media (max-width:710px){
    width: 100%;
}
`
export {
  FooterFirstContainer,
   FooterSecondContainer,
    FooterContainer,
     VerticalLine,
      UtilityContainer,
       CustomMenuItem,
        ProductMenuListTrigger,
         ProductMenuTrigger,
          MenuButtonContainer,
           MenuButton,
            MenuListItem,
             NavbarS,
              MenubarS,
               MenuItems
              }