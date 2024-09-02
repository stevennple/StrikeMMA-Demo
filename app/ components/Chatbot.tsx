'use client';
import logo from '/public/chatbotlogo.png'; 
import Image from 'next/image';
import React, { useEffect, useRef, useState, useCallback } from 'react';

// Type for messages
type Message = {
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
};

// Utility function to format timestamps
const formatTimestamp = (): string => {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

// Debounce function to prevent rapid-fire sends
const debounce = (func: Function, delay: number): (...args: any[]) => void => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null); // Ref for auto-scrolling

  // Add the default message when the component mounts
  useEffect(() => {
    const defaultMessage: Message = {
      text: "Hi! I'm your virtual MMA coach. How can I assist you today?",
      sender: 'bot',
      timestamp: formatTimestamp(),
    };
    setMessages([defaultMessage]);
  }, []);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userPrompt: input,
          history: messages,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);

      const userMessage: Message = {
        text: input,
        sender: 'user',
        timestamp: formatTimestamp(),
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');

      const botMessage: Message = {
        text: data.data.text, // Ensure to access the text field correctly
        sender: 'bot',
        timestamp: formatTimestamp(),
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        text: 'Sorry, something went wrong. Please try again later.',
        sender: 'bot',
        timestamp: formatTimestamp(),
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const debouncedHandleSend = useCallback(debounce(handleSend, 300), [handleSend]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents the default action of form submission
      debouncedHandleSend();
    }
  };

  const MessageBubble = React.memo(({ message }: { message: Message }) => (
    <div
      className={`flex items-start mb-3 max-w-[75%] ${
        message.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
      }`}
    >
      {message.sender === 'bot' && (
        <Image
          src={logo}
          alt="Bot Avatar"
          className="w-8 h-8 rounded-full mr-2"
        />
      )}
      <div>
        <div
          className={`p-2 rounded-lg ${
            message.sender === 'user' ? 'bg-[#0026FF] text-white' : 'bg-[#444444] text-[#ffffff]'
          }`}
        >
          {message.text}
        </div>
        {message.sender === 'bot' && (
          <div className="text-xs text-gray-400 mt-1">
            Coach
          </div>
        )}
        <div className="text-xs text-gray-400 mt-1">
          {message.timestamp}
        </div>
      </div>
    </div>
  ));

  MessageBubble.displayName = "MessageBubble"; // Assign display name for the memoized component

  return (
    <div className="h-full flex flex-col w-full max-w-md md:h-[600px] border border-transparent rounded-lg bg-[#1A1A1A] shadow-lg overflow-hidden">
      <div className="p-4 bg-[#0026FF] border-b border-transparent text-center text-white font-bold rounded-t-lg">
        StrikeMMA Chatbot
      </div>
      <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-[#0026FF] scrollbar-track-[#1A1A1A]">
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
        <div ref={messagesEndRef} /> {/* Auto-scroll reference */}
      </div>
      <div className="flex items-center p-4 bg-[#1A1A1A] border-t border-transparent rounded-b-lg">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-1 p-2 border border-gray-600 rounded-full outline-none focus:border-[#0026FF] bg-[#1A1A1A] text-white"
          aria-label="Message input"
          disabled={loading}
        />
        <button
          onClick={debouncedHandleSend}
          className={`ml-3 px-4 py-2 bg-[#0026FF] text-white rounded-full hover:bg-[#001F99] ${loading ? 'opacity-50' : ''}`}
          aria-label="Send message"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
