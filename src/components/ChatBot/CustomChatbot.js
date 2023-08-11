import { IconName } from "react-icons/";
import {MdMarkUnreadChatAlt} from 'react-icons/md';
import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'

import config from "./ChatbotConfig";
import MessageParser from "./MessageParsesr";
import './CustomChatBot.css';

// Make sure the path is correct for ActionProvider
import ActionProvider from "./ActionProvider";

const CustomChatbot = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(prevState => !prevState);
  };

  return (
    <div>
      {chatbotOpen ? (
        <div className="chatbot-container">
          <div className="chatbot-close" onClick={toggleChatbot}>
            <span>&times;</span>
          </div>
          <div style={{ maxWidth: '400px', margin: 'auto' }}>
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />

          </div>
        </div>
      ) : (
        <div className="chatbot-icon" onClick={toggleChatbot}>
          <MdMarkUnreadChatAlt className="chat-icon"/>
        </div>
      )}
    </div>
  );
}

export default CustomChatbot;
