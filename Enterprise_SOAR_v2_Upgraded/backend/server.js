const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const alertRoutes = require("./routes/alerts");

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/soarDB")
.then(()=>console.log("MongoDB Connected"));

app.set("io", io);

app.use("/api/alerts", alertRoutes);

io.on("connection", (socket)=>{
    console.log("SOC Dashboard Connected");
});

server.listen(5000, ()=>console.log("Server running on port 5000"));