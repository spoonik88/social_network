import React from "react";
import "./App.scss";
import Header from "./components/Header"
import Nav from "./components/navbar/Nav";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

// import chat_img from './images/chat_img_background.jpg';

const App = () => {
  return (
    <div className="wrapcontent">
  <Header/>   
    <Nav/>
   <Profile/>
   <Footer/>  
         {/* https://mythemestore.com/beehive-preview/activity/ */}
    </div>
  
  );
};

export default App;
