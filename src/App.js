import React from "react";
import "./index.css";
import Home from "./routes/Home";
// import Chatroom from "./routes/Chatroom";
// import Chatroom from "./Chat-App/achat/client";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Resources from "./components/Resources";
import ChatWidget from "./ChatWidget";
import Joinus from "./components/Joinus";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Joinus />}/>
        <Route path="/Home" element={<Home />}/> 
        <Route path="/About" element={<About />}/>
        <Route path="/ChatRoom" element={<ChatWidget />}/>
        <Route path="/Resources" element={<Resources />}/>
      </Routes>
    </>
  );
}

export default App;
