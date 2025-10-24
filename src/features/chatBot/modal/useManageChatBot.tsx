import { useEffect, useRef, useState } from "react";
import { Message } from "../types";
import { getSmartResponse } from "./engine";

const useManageChatBot = () => {
     const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', text: 'Hello! 👋 Welcome to Lotus Soft Technologies. I\'m your AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getSmartResponse(input);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: response.text,
        showWhatsApp: response.showWhatsApp 
      }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickAction = (action: string) => {
    setInput(action);
  };
  return {
    isMinimized, setIsMinimized, isOpen, setIsOpen, isTyping, messages,messagesEndRef,input, setInput, handleKeyPress, handleSend, handleQuickAction
  }
}

export default useManageChatBot
