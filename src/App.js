import React from "react";
import "./index.css";
import Home from "./routes/Home";
// import Chatroom from "./routes/Chatroom";
// import Chatroom from "./Chat-App/achat/client";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
// import Resources from "./components/Resources";
import ChatWidget from "./ChatWidget";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/ChatRoom" element={<ChatWidget />}/>
        {/* <Route path="/Resources" element={<Resources />}/> */}
      </Routes>
    </>
  );
}

export default App;
