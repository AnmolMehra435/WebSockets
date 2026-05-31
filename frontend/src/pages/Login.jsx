import { useNavigate } from 'react-router-dom'

function Login(){
    const navigate = useNavigate();
    const clientRedirect = () => {
        navigate('/client')
    }

    const serverRedirect = () => {
        navigate('/server')
    }

    return (
        <div className="container bg-blue-400 h-screen max-w-full flex justify-center items-center">
            <div className="login-btn flex justify-evenly bg-black h-50 w-100 rounded-2xl">
                <button onClick={clientRedirect}className='text-black-300 bg-white px-4 mr-10 h-10 m-auto rounded-lg hover:bg-blue-300 hover:cursor-pointer'>Client</button>
                <button onClick={serverRedirect}className='text-black-300 ml-10 bg-white px-4 h-10 m-auto rounded-lg hover:bg-blue-300 hover:cursor-pointer'>Server</button>
            </div>
        </div>
    )
}

export default Login;