import { ActionIcon, Paper } from '@mantine/core'
import styled from 'styled-components'

import { SavedColors } from '@shared/constants'

import { ChatType, StyledActionIconProps } from '../types'

export const ChatContainer = styled(Paper)<ChatType>`
  position: fixed;
  bottom: 90px;
  right: 24px;
  width: 420px;
  height: ${(props) => (props.isMinimized ? '80px' : '600px')};
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  overflow: hidden;
  z-index: 7;

  @media (max-width: 480px) {
    width: 90%;
  }
`

export const Header = styled.div`
  background: ${SavedColors.Primaryblue};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 7;
  color: ${SavedColors.PrimaryWhite};
`

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  background: #fbf9f9;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 7;
`

export const MessageBubble = styled.div<{ isUser: boolean }>`
  max-width: 85%;
  padding: 12px 16px;
  border-radius: 16px;
  background: ${(props) =>
    props.isUser ? SavedColors.Primaryblue : '#ffffff'};
  color: ${(props) => (props.isUser ? '#ffffff' : '#1f2937')};
  border: ${(props) => (props.isUser ? 'none' : '1px solid #e5e7eb')};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  z-index: 7;
`

export const ContactBar = styled.div`
  padding: 8px 16px;
  background: linear-gradient(to right, #f9fafb, #eff6ff);
  border-top: 1px solid #e5e7eb;
  z-index: 7;
`

export const InputContainer = styled.div`
  padding: 16px;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  z-index: 7;
`

export const ToggleButton = styled(ActionIcon)<StyledActionIconProps>`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  opacity: 80%;
  background: ${SavedColors.Primaryblue};
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  &:hover {
    background: ${SavedColors.PrimaryWhite};
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    color: ${SavedColors.Primaryblue};
  }
  z-index: 7;
`

export const StatusIndicator = styled.div`
  width: 8px;
  height: 8px;
  background-color: #34d399;
  border-radius: 9999px;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`

export const TypingDot = styled.div<{ delay: string }>`
  width: 8px;
  height: 8px;
  background-color: ${SavedColors.productBlue};
  border-radius: 9999px;
  animation: bounce 1.4s infinite ease-in-out;
  animation-delay: ${(props) => props.delay || '0ms'};

  @keyframes bounce {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`
export const QuickBtnStyle: React.CSSProperties = {
  padding: '10px 16px',
  borderRadius: '12px',
  border: '1px solid #e0e0e0',
  background: '#fff',
  fontSize: '14px',
  fontWeight: 500,
  cursor: 'pointer',
  textAlign: 'left',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  transition: 'all 0.2s',
}

export const quickBtnStyle: React.CSSProperties = {
  padding: '10px 16px',
  borderRadius: '12px',
  border: '1px solid #e0e0e0',
  background: '#fff',
  fontSize: '14px',
  fontWeight: 500,
  cursor: 'pointer',
  textAlign: 'left',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
}
