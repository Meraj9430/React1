

import './App.css'
import Category from './Category'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
// import Medicines from './components/Medicines'

function App() {


  return (
    <>
      <Navbar/>
      <Category/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
