import './App.css'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Appfun from './app/context/Appfun'
// import Medicines from './components/Medicines'

function App() {


  return (
    <><Appfun>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </Appfun>
    </>
  )
}

export default App
