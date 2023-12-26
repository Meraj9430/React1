import './App.css'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
// import Medicines from './components/Medicines'

function App() {


  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
