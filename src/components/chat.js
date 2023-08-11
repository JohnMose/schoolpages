import { useState } from 'react';

const useChat = () => {
  const API_KEY = "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";
  const systemMessage = {
    role: 'system',
    content: "Explain things like you're talking to a software professional with 2 years of experience.",
  };

  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: 'just now',
      sender: 'ChatGPT',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    setIsTyping(true);
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: 'user',
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    const apiMessages = newMessages.map((messageObject) => {
      const role = messageObject.sender === 'ChatGPT' ? 'assistant' : 'user';
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        systemMessage,
        ...apiMessages,
      ],
    };

    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      console.log(data.choices[0].message.content);
      setMessages([...messages, {
        message: data.choices[0].message.content,
        sender: 'chatGPT'
      }]);
      setIsTyping(false);
    });
  };

  return { messages, isTyping, handleSend };
};

export default useChat;
