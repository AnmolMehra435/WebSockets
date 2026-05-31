import { useNavigate } from "react-router-dom"
import { useState } from "react";

function Server(){
    const navigate = useNavigate();
    const [msg, setMsg] = useState(["hello", "world"]);

    const back = () => {
        navigate('/')
    }

    return (
        <div className="container bg-blue-400 h-screen max-w-full flex justify-center items-center">
            <div className="display flex flex-col bg-black h-max pb-10 w-100 rounded-2xl">
                <button onClick={back} className="text-black-300 bg-white px-4 m-4 h-10 w-20 mx-auto rounded-lg hover:bg-blue-300 hover:cursor-pointer">Back</button>
                <div className= "h-max mx-10 px-3 py-5 rounded-2xl bg-amber-200">
                    <div className="messages">
                        {
                            msg.map((message, idx) => (
                                <li className='text-lg text-black-300 list-none' key={idx}>{message}</li>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Server