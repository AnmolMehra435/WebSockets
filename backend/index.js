const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')
require('dotenv').config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        app.listen(5000, () => {
            console.log("Server is running on port 5000")
        })
        console.log("MongoDB connected...")
    }catch(err){
        console.log(err.message)
    }
}

app.use(express.json());
app.use(cors());
app.use('/auth/message', require('./routes/messageRoutes'));

app.get('/', (req, res)=>{
    res.send("hello world");
})

connectDB();