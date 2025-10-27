import { FaComment, FaTimes, FaPaperPlane, FaCompress, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { Button, TextInput, Text, Group, Paper, ActionIcon } from '@mantine/core';
import { SavedColors } from '@shared/constants';
import { ChatContainer, ContactBar, Header, InputContainer, MessageBubble, MessagesContainer, StatusIndicator, ToggleButton, TypingDot } from '../styles';
import useManageChatBot from '../modal/useManageChatBot';
import { memo } from 'react';

export const Ui = memo(() => {
  const { isOpen, isMinimized, setIsMinimized, setIsOpen, messages, handleKeyPress, handleSend, isTyping, messagesEndRef, input, setInput, handleQuickAction } = useManageChatBot();

  return (
    <div>
      {isOpen && (
        <ChatContainer isMinimized={isMinimized} shadow="xl" radius="lg">
          <Header>
            <Group>
              <Paper radius="lg" p="sm" withBorder style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FaComment size={24} color={SavedColors.Primaryblue} />
              </Paper>
              <div>
                <Text fw={700} size="lg">Lotus Assistant</Text>
                <Group gap={4}>
                  <StatusIndicator />
                  <Text size="xs" c="blue.1">Online • Ready to help</Text>
                </Group>
              </div>
            </Group>
            <Group gap={8}>
              <ActionIcon onClick={() => setIsMinimized(!isMinimized)} variant="transparent" color="white">
                <FaCompress size={16} />
              </ActionIcon>
              <ActionIcon onClick={() => setIsOpen(false)} variant="transparent" color="white">
                <FaTimes size={16} />
              </ActionIcon>
            </Group>
          </Header>

          {!isMinimized && (
            <>
              {messages.length <= 1 && (
                <Paper p="md" style={{ background: 'linear-gradient(to bottom, #eff6ff, #ffffff)', borderBottom: '1px solid #e5e7eb' }}>
                  <Text size="xs" c="dimmed" mb="sm" fw={500}>Quick Actions:</Text>
                  <Group gap={8}>
                    <Button size="xs" variant="outline" onClick={() => handleQuickAction('Show me your products')}>
                      🛍️ View Products
                    </Button>
                    <Button size="xs" variant="outline" onClick={() => handleQuickAction('Request a demo')}>
                      🎯 Request Demo
                    </Button>
                    <Button size="xs" variant="outline" onClick={() => handleQuickAction('Contact information')}>
                      📞 Contact Us
                    </Button>
                  </Group>
                </Paper>
              )}

              <MessagesContainer>
                {messages.map((msg, idx) => (
                  <MessageBubble key={idx} isUser={msg.type === 'user'}>
                    <Text size="sm" style={{ whiteSpace: 'pre-line' }}>{msg.text}</Text>
                  </MessageBubble>
                ))}
                
                {isTyping && (
                  <MessageBubble isUser={false}>
                    <Group gap={6}>
                      <TypingDot delay="0ms" />
                      <TypingDot delay="150ms" />
                      <TypingDot delay="300ms" />
                    </Group>
                  </MessageBubble>
                )}
                <div ref={messagesEndRef} />
              </MessagesContainer>

              <ContactBar>
                <Group justify="center" gap={16}>
                  <Text component="a" href="tel:+256755818183" c={SavedColors.productBlue} size="xs" fw={500}>
                    <Group gap={4}>
                      <FaPhone size={12} />
                      +256 755 818183
                    </Group>
                  </Text>
                  <Text component="a" href="mailto:sales@lotus.co.ug" c={SavedColors.productBlue} size="xs" fw={500}>
                    <Group gap={4}>
                      <FaEnvelope size={12} />
                      sales@lotus.co.ug
                    </Group>
                  </Text>
                </Group>
                <Group justify="center" gap={16} mt="sm">
                  <Text size="xs" c="dimmed" fw={500}>Not satisfied? Kindly contact us through WhatsApp:</Text>
                  <Text component="a" href="https://wa.me/+256755818183?text=I'm%20not%20satisfied%20with%20the%20bot.%20Please%20assist%20me." c={SavedColors.productBlue} size="xs" fw={500} target="_blank">
                    <Group gap={4}>
                      <FaWhatsapp size={12} />
                      +256 755 818183
                    </Group>
                  </Text>
                </Group>
              </ContactBar>

              <InputContainer>
                <Group gap={8}>
                  <TextInput
                    value={input}
                    onChange={(e) => setInput(e.currentTarget.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    style={{ flex: 1 }}
                    radius="xl"
                  />
                  <ActionIcon
                    onClick={handleSend}
                    disabled={!input.trim()}
                    variant="gradient"
                    color={SavedColors.productBlue}
                    size="lg"
                    radius="xl"
                  >
                    <FaPaperPlane size={20} />
                  </ActionIcon>
                </Group>
              </InputContainer>
            </>
          )}
        </ChatContainer>
      )}

      <ToggleButton
        onClick={() => setIsOpen(!isOpen)}
        size="sm"
        variant="gradient"
        gradient={{ from: 'blue', to: 'indigo' }}
        aria-label="toggle-button"
      >
        {isOpen ? (
          <FaTimes size={22} />
        ) : (
          <>
            <FaComment size={22} className="group-hover:animate-bounce" />
          </>
        )}
      </ToggleButton>
    </div>
  );
})