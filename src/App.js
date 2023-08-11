import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './Navbar';
import FileUpload from './components/FileUpload/FileUpload';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import StudyResources from './components/StudyResources';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import ChatPage from './components/ChatPage';
import FileUploadWrapper from './components/FileUpload/FileUploadWrapper';
import CustomChatbot from './components/ChatBot/CustomChatbot';
import config from './components/ChatBot/ChatbotConfig';

function App() {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  });

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fileupload" element={<FileUpload />} />
          <Route path="/studyresources" element={<StudyResources />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/chatpage" element={<ChatPage />} />
        </Routes>
      <CustomChatbot/>
      </Router>
      <form onSubmit={handleSubmit}>
      </form>
    </div>
  );
}

export default App;
