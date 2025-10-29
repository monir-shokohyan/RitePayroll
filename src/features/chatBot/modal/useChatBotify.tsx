import { useState, useRef, useEffect } from "react";
import { getAIResponse } from "../libs/ai";
import { Message } from "../types";

const useChatBotifyBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: "bot", text: "Hello! Welcome to **Lotus Soft Technologies**. How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const quickBtnStyle: React.CSSProperties = {
    padding: "10px 16px",
    borderRadius: "12px",
    border: "1px solid #e0e0e0",
    background: "#fff",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    textAlign: "left",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  };

  const botSettings = {
    chatWindow: { showScrollbar: false, showHeader: false, showFooter: false },

    flow: {
      start: { message: "", path: "quick_actions" },

      quick_actions: {
        render: (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "8px" }}>
            <button onClick={() => botSettings.injectMessage?.("Show me your products")} style={quickBtnStyle}>
              View Products
            </button>
            <button onClick={() => botSettings.injectMessage?.("Request a demo")} style={quickBtnStyle}>
              Request Demo
            </button>
            <button onClick={() => botSettings.injectMessage?.("Contact information")} style={quickBtnStyle}>
              Contact Us
            </button>
          </div>
        ),
        path: "handle_input",
      },

      handle_input: {
        function: async (params:any) => {
          const userMsg = params.userInput?.trim();
          if (!userMsg) return;

          setMessages(prev => [...prev, { type: "user", text: userMsg }]);
          setInput("");
          setIsTyping(true);

          const response = await getAIResponse(userMsg);
          setTimeout(() => {
            setMessages(prev => [
              ...prev,
              { type: "bot", text: response.text, showWhatsApp: response.showWhatsApp }
            ]);
            setIsTyping(false);
          }, 600);
        },
      },
    },

    injectMessage: async (msg: string) => {
      setMessages(prev => [...prev, { type: "user", text: msg }]);
      setIsTyping(true);
      setInput("");

      const response = await getAIResponse(msg);
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { type: "bot", text: response.text, showWhatsApp: response.showWhatsApp }
        ]);
        setIsTyping(false);
      }, 500);
    },
  };

  const handleSend = () => {
    if (!input.trim()) return;
    botSettings.injectMessage?.(input);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickAction = (action: string) => {
    setInput(action);
    setTimeout(() => botSettings.injectMessage?.(action), 0);
  };

  return {
    isOpen, setIsOpen,
    isMinimized, setIsMinimized,
    messages, messagesEndRef,
    input, setInput,
    isTyping,
    handleKeyPress, handleSend, handleQuickAction
  };
};

export default useChatBotifyBot;