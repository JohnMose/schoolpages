import React from 'react';
import './HomePage.css'; 
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Upload from './UploadPage';
import AuthDetails from './AuthDetails';
import SignIn from './auth/SignIn';


const HomePage = () => {

  return (
    
    <div className="home-container">
    
    <HeroSection/>

    <Cards/>
    <Upload/>
    <Footer/>
    <AuthDetails/>
   </div>
    
  );
};

export default HomePage;
