const express = require("express");
const app = express();
const http = require("http"); //to build our server together with a socket io
const cors = require("cors"); //using this library to resolve bugs related to connection
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);
//the var server is going to use the http library and using a function called createServer we just pass an express app inside of it and it should generate a server for us

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", //origin specifies the url which server is going to be calling and making calls to our socket.io server(basically it is a react server that is running)
    methods: ["GET", "POST"],  //specifying which methods we accept
  },
});
//instantiate the server by creating the variable io and it is the connection we're going to be establishing and setting this to new instance of server class that we imported from socket.io 
//if we are dealing with cors issues then we can solve them by adding an object along with server which takes a single cors and here we can specify some credintials or setting we want to have related to cors in our socket.io server

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});
//since socket.io work is based on events
//--connection-- checks for someone connected to the socket.io server

server.listen(3001, () => {
  console.log("Server running!");
});
//connecting backend to frontend
