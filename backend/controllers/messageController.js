const Message = require('../models/Message');

const addMessage =async (req, res) => {
    try{
        const msg = req.body.message;

        await Message.create({
            message: msg
        })

        res.json({
            "message": "success"
        })
    }catch(err){
        console.log(err.message);
        res.json({
            "message": "error"
        })
    }  
}

const getMessage = async (req, res) => {
    try{
        const messages = await Message.find();
        res.json({
            messages
        })
    }catch(err){
        console.log(err.message);
        res.json({
            "message": "error"
        })
    }
}

module.exports = { addMessage, getMessage }