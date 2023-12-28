import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
// import Login from './components/auth/Login'
import AppFun from "./context_API/AppFun";

function App() {
  return (
    <>
      <AppFun>
        <Navbar />
        <Outlet />
      </AppFun>
    </>
  );
}

export default App;
