import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Client from './pages/Client'
import Server from './pages/Server'

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/client' element={<Client/>}/>
        <Route path='/server' element={<Server/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App