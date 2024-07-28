'use client'
import React, { useState } from 'react';
import { ChatBubbleIcon } from '@radix-ui/react-icons';
import { Cross2Icon } from '@radix-ui/react-icons';
import EmbeddedIframe from './Embed';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition duration-300 z-50"
      >
        <ChatBubbleIcon width={30} height={30} />
      </button>
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-96 h-100 shadow-lg rounded-lg z-50 p-2">
          <button
            onClick={closeChat}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition duration-300"
          >
            <Cross2Icon width={20} height={20} />
          </button>
          <EmbeddedIframe />
        </div>
      )}
    </>
  );
};

export default ChatButton;
