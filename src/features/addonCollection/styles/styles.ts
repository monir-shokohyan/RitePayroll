import { Link, LinkProps } from 'react-router-dom'
import { Button } from '@mantine/core'
import styled from 'styled-components'

import { ButtonType } from '@features/notfound/types'
import { SavedColors } from '@shared/constants'
import { TextWithFamily } from '@shared/ui/Typography'

const WelcomeText = styled(TextWithFamily)`
  font-size: 1.3rem;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`
const WelcomeTitle = styled(TextWithFamily)`
  font-size: 3.2rem;
  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
`
const HoveredButtonWithBorder = styled(Button)<ButtonType>`
  &:hover {
    border: 1px solid ${SavedColors.Primaryblue};
    color: ${SavedColors.Primaryblue};
    background-color: transparent;
    transition: all 0.3s ease-in;
  }
`
const HoveredButtonWithoutBorder = styled(Button)<ButtonType>`
  text-decoration: none;
  color: ${SavedColors.primaryBlue};
  &:hover {
    opacity: 50%;
    background-color: transparent;
    transition: all 0.3s ease-in;
  }
`

export {
  HoveredButtonWithBorder,
  HoveredButtonWithoutBorder,
  WelcomeText,
  WelcomeTitle,
}

export const StyledProductMenu = styled.div`
  position: relative;
  width: 350px;
`

export const MenuContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  overflow: hidden;
`

export const MenuTitle = styled.div`
  font-family: 'Nunito';
  padding: 12px 16px;
  font-size: 18px;
  font-weight: 600;
  color: ${SavedColors.PrimaryWhite};
  background-color: ${SavedColors.Primaryblue};
  border-bottom: 1px solid #e9ecef;
`

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
`
interface StyledLinkProps extends LinkProps {
  $isActive: boolean
}
export const MenuItemOnly = styled(Link)<StyledLinkProps>`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px 12px 30px;
  text-decoration: none;
  color: ${SavedColors.TextColor};
  background-color: ${(props) => (props.$isActive ? '#e7f5ff' : 'transparent')};
  border-bottom: 1px solid ${SavedColors.lightBlue};
  font-size: 16px;
  font-family: 'Roboto';
  transition: all 0.2s ease;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: '#e7f5ff';
    color: ${SavedColors.Primaryblue};
  }

  &:active {
    background-color: e7f5ff;
    transform: translateY(0);
  }
`
export const HoneycombGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  position: relative;
  width: 100%;
`

export const DiamondCardWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const DiamondCard = styled.div`
  background: white;
  box-shadow:
    0 15px 25px -4px rgba(0, 0, 0, 0.2),
    inset 0 -3px 4px -1px rgba(0, 0, 0, 0.1),
    0 -10px 15px -1px rgba(255, 255, 255, 0.3),
    inset 0 3px 4px -1px rgba(255, 255, 255, 0.2),
    inset 0 0 5px 1px rgba(255, 255, 255, 0.1),
    inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 220px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 30px;
  position: relative;
  @media (max-width: 998px) {
    width: 200px;
    height: 200px;
    gap: 20px;
  }
  @media (max-width: 720px) {
    width: 150px;
    height: 150px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
    gap: 5px;
  }
`
