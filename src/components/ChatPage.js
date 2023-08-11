import React from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import useChat from './chat';

const ChatPage = () => {
  const { messages, isTyping, handleSend } = useChat();

  return (
    <div style={{ position: 'relative', height: '500px', width: '500px' }}>
      <MainContainer>
        <ChatContainer>
          <MessageList
            scrollBehavior="smooth"
            typingIndicator={isTyping ? <TypingIndicator content="Study AI is typing" /> : null}
          >
            {messages.map((message, i) => {
              console.log(message);
              return <Message key={i} model={message} />;
            })}
          </MessageList>
          <MessageInput
            placeholder="Type your question here"
            onSend={handleSend}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatPage;
//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