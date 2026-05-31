import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from 'axios'
import { io } from 'socket.io-client'
const socket = io('http://localhost:5000')

function Client(){
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');

    const back = () => {
        navigate('/')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await axios.post(
                'http://localhost:5000/auth/message/sendmessage',
                {
                    message: msg
                }
            )
            setMsg('');
            socket.emit('send-message', {
                message: msg,
                createdAt: new Date().toISOString()
            })
        }catch(err){
            console.log(err.message)
        }

    }

    return (
        <div className="container bg-blue-400 h-screen max-w-full flex justify-center items-center">
            <div className="display flex flex-col bg-black h-50 w-100 rounded-2xl">
                <button onClick={back} className="text-black-300 bg-white px-4 m-4 h-10 w-20 mx-auto rounded-lg hover:bg-blue-300 hover:cursor-pointer">Back</button>
                <div className= "h-25 mx-10 bg-amber-200 h-">
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <input className="mx-auto my-2 bg-blue-300 pl-2 pr-10 py-1 rounded-lg" type='text' placeholder='Enter Broadcast Message' value={msg} onChange={(e) => {setMsg(e.target.value)}}/>
                        <button type="submit" className="text-cyan-50 bg-black mx-auto h-8 w-20 rounded-lg hover:bg-amber-700 hover:cursor-pointer">Send</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Client