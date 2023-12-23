
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Header/Navbar'
// import Login from './components/auth/Login'

function App() {
 

  return (
    <>
    <Navbar/>
    {/* <Login/> */}
    <Outlet/>
    
    </>
  )
}

export default App
