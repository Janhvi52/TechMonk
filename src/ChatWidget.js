import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");
//to establish a connection to socket.io server(install a library(npm install socket.io-client) to connect any any kind of frontend to socket.io)
//connecting frontend to backend

function ChatWidget() {
  const [username, setUsername] = useState(""); //creating a state which represents username
  const [room, setRoom] = useState("");         ////creating a state which represents room
  const [showChat, setShowChat] = useState(false);
 

  const joinRoom = () => {    //this function primarily used to establish the connection between the user who logged and wants to enter the room and to achieve this first we alter the values of username state and room to be equal to whatever we've written on input
   
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="app">
     <div className="caution">
      <h3>Caution ⚠️: Don't share any personal details in the ChatRoom!</h3>
    </div>
    <div className="App">
    {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join Chat</h3>
          <input
            type="text" placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);  //target.value is accessing the value of input and thus setting the username state to that value
            }}
          />
          <input
            type="text" placeholder="Room ID"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
    
    </div>
  );
}

export default ChatWidget;
 