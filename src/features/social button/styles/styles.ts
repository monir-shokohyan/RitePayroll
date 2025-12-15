import { FiShare2 } from 'react-icons/fi'
import { IoChatbox } from 'react-icons/io5'
import styled, { keyframes } from 'styled-components'

// Keyframes
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(110, 142, 251, 0.4);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(110, 142, 251, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(110, 142, 251, 0);
  }
`

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`

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
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  padding: 14px 28px;
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
  animation: ${pulse} 3s infinite;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      rgba(110, 142, 251, 0.4),
      rgba(167, 119, 227, 0.4)
    );
    filter: blur(15px);
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    transform: scale(0);
    transition: transform 0.6s ease-out;
    z-index: -1;
  }

  &:hover {
    background: linear-gradient(135deg, #a777e3, #6e8efb);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px) scale(1.03);

    &::before {
      opacity: 1;
    }

    &::after {
      transform: scale(1);
    }
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0.3);
      border-radius: inherit;
      animation: ${ripple} 0.6s linear;
    }
  }

  &:focus {
    outline: none;
    box-shadow:
      0 0 0 3px rgba(110, 142, 251, 0.5),
      0 8px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    border-radius: 40px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
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
  bottom: 70px;
  left: -20%;
  transform: translateX(-50%) scale(0.8);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 22px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55),
    transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55),
    visibility 0.5s ease;
  z-index: 100;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 80%;
    transform: translateX(-50%) rotate(180deg);
    border-width: 0 10px 10px 10px;
    border-style: solid;
    border-color: transparent transparent rgba(255, 255, 255, 0.9) transparent;
    filter: drop-shadow(0 -3px 3px rgba(0, 0, 0, 0.1));
  }

  ${TooltipContainer}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) scale(1);
    pointer-events: auto;
  }

  @media (prefers-color-scheme: dark) {
    background: rgba(30, 30, 30, 0.9);
    color: white;

    &::before {
      border-color: transparent transparent rgba(30, 30, 30, 0.9) transparent;
    }
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
    fill: #333;
    transition:
      transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55),
      fill 0.3s ease;
    z-index: 1;
  }

  &.twitter:hover {
    background: linear-gradient(135deg, #1da1f2, #1a91da);
  }

  &.facebook:hover {
    background: linear-gradient(135deg, #1877f2, #165ed0);
  }

  &.linkedin:hover {
    background: linear-gradient(135deg, #0077b5, #005e94);
  }

  @media (prefers-color-scheme: dark) {
    background: #2a2a2a;

    svg {
      fill: #e0e0e0;
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
