import { useEffect, useRef, useState } from 'react'

import { getAIResponse } from '../libs/ai'
import { Message } from '../types'
import { quickBtnStyle } from '../styles'

const useChatBotifyBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      text: 'Hello! Welcome to **Lotus Soft Technologies**. How can I help you?',
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  
  const botSettings = {
    chatWindow: { showScrollbar: false, showHeader: false, showFooter: false },

    flow: {
      start: { message: '', path: 'quick_actions' },

      quick_actions: {
        render: (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              padding: '8px',
            }}
          >
            <button
              onClick={() =>
                botSettings.injectMessage?.('Show me your products')
              }
              style={quickBtnStyle}
            >
              View Products
            </button>
            <button
              onClick={() => botSettings.injectMessage?.('Request a demo')}
              style={quickBtnStyle}
            >
              Request Demo
            </button>
            <button
              onClick={() => botSettings.injectMessage?.('Contact information')}
              style={quickBtnStyle}
            >
              Contact Us
            </button>
          </div>
        ),
        path: 'handle_input',
      },

      handle_input: {
        function: async (params: any) => {
          const userMsg = params.userInput?.trim()
          if (!userMsg) return

          setMessages((prev) => [...prev, { type: 'user', text: userMsg }])
          setInput('')
          setIsTyping(true)

          // Normal AI response
          const response = await getAIResponse(userMsg)

          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                type: 'bot',
                text: response.text,
                showWhatsApp: response.showWhatsApp,
                showSocialMedia: response.showSocialMedia,
              },
            ])
            setIsTyping(false)
          }, 600)
        },
      },
    },

    injectMessage: async (msg: string) => {
      setMessages((prev) => [...prev, { type: 'user', text: msg }])
      setIsTyping(true)
      setInput('')

      const response = await getAIResponse(msg)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: 'bot',
            text: response.text,
            showWhatsApp: response.showWhatsApp,
            showSocialMedia: response.showSocialMedia,
          },
        ])
        setIsTyping(false)
      }, 500)
    },
  }

  const handleSend = () => {
    if (!input.trim()) return

    botSettings.injectMessage?.(input)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleQuickAction = (action: string) => {
    setInput(action)
    setTimeout(() => botSettings.injectMessage?.(action), 0)
  }

  return {
    isOpen,
    setIsOpen,
    isMinimized,
    setIsMinimized,
    messages,
    messagesEndRef,
    input,
    setInput,
    isTyping,
    handleKeyPress,
    handleSend,
    handleQuickAction,
  }
}

export default useChatBotifyBot
