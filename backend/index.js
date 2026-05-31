const express = require('express');
const mongoose = require('mongoose')
const { Server } = require('socket.io')
const http = require('http');
const app = express();
const server = http.createServer(app);
const cors = require('cors')
require('dotenv').config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        server.listen(5000, () => {
            console.log("Server is running on port 5000")
        })
        console.log("MongoDB connected...")
    }catch(err){
        console.log(err.message)
    }
}

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173'
    }
})

io.on('connection', (socket) => {
    socket.on("send-message", (data) => {
        io.emit('receive-message', data)
    })
})

app.use(express.json());
app.use(cors());
app.use('/auth/message', require('./routes/messageRoutes'));

app.get('/', (req, res)=>{
    res.send("hello world");
})

connectDB();