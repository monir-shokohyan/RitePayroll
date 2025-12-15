import { IoChatbox } from 'react-icons/io5'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'

export const TooltipContainer = styled.div`
  position: fixed;
  right: 20px;
  bottom: 30px;
  display: inline-block;
  font-family: 'Arial', sans-serif;
  overflow: visible;
  z-index: 999;
`

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${SavedColors.primaryBlue};
  color: white;
  padding: 15px;
  border-radius: 50px;
  cursor: pointer;
  transition:
    background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    transform 0.3s ease,
    box-shadow 0.4s ease;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
  overflow: hidden;
  &:hover {
    background-color: ${SavedColors.darkBlue};
  }
`

export const ShareIcon = styled(IoChatbox)`
  width: 24px;
  height: 24px;
  fill: white;
  transition:
    transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55),
    fill 0.3s ease;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
`

export const TooltipContent = styled.div`
  position: absolute;
  bottom: 60px;
  left: -50%;
  transform: translateX(-50%) scale(0.8);
  background: ${SavedColors.primaryBlue};
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 22px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  transition:
    opacity 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55),
    transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55),
    visibility 0.5s ease;
  z-index: 100;

  &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 80%;
    transform: translateX(-50%) rotate(180deg);
    border-width: 0 10px 10px 10px;
    border-style: solid;
    border-color: transparent transparent ${SavedColors.primaryBlue} transparent;
    filter: drop-shadow(0 -3px 3px rgba(0, 0, 0, 0.1));
  }

  @media (max-width: 768px) {
    width: 240px;
    padding: 18px;
  }

  @media (max-width: 480px) {
    width: 200px;
    padding: 15px;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #f0f0f0;
  transition:
    transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55),
    background 0.3s ease,
    box-shadow 0.4s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

    &::before {
      opacity: 1;
    }

    svg {
      transform: scale(1.2);
      fill: white;
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 24px;
    height: 24px;
    fill: #ffffff;
    transition:
      transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55),
      fill 0.3s ease;
    z-index: 1;
  }

  &.github:hover {
    background: linear-gradient(135deg, #1da1f2, #1a91da);
  }

  &.phone:hover {
    background: linear-gradient(135deg, #1877f2, #165ed0);
  }

  &.email:hover {
    background: linear-gradient(135deg, #0077b5, #005e94);
  }

  @media (prefers-color-scheme: dark) {
    background: #ffffff;

    svg {
      fill: ${SavedColors.primaryBlue};
    }
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`
