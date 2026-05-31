import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from 'axios'
import { io } from 'socket.io-client'
const socket = io('http://localhost:5000')
function Server(){
    const navigate = useNavigate();
    const [msg, setMsg] = useState([]);
    const back = () => {
        navigate('/')
    }

    useEffect(() => {
        socket.on('receive-message', (msg) => {
            setMsg(prev => [...prev, msg])
        });

        return () => {
            socket.off('receive-message');
        }
    }, [])

    useEffect(() => {
        const getMessages = async () => {
            try{
                const response = await axios.get(
                    'http://localhost:5000/auth/message/getmessage'
                )

                setMsg(response.data.messages)

            }catch(err){
                console.log(err.message);
            }
        }

        getMessages();
    }, []);

    return (
        <div className="container bg-blue-400 h-screen max-w-full flex justify-center items-center">
            <div className="display flex flex-col bg-black h-max pb-10 w-100 rounded-2xl">
                <button onClick={back} className="text-black-300 bg-white px-4 m-4 h-10 w-20 mx-auto rounded-lg hover:bg-blue-300 hover:cursor-pointer">Back</button>
                <div className= "h-max mx-10 px-3 py-5 rounded-2xl bg-amber-200">
                    <div className="messages">
                        {
                            msg.map((message, idx) => (
                                <li className='text-lg text-black-300 list-none' key={idx}>{message.message} {message.createdAt?.split('T')[1].split('.')[0]}</li>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Server