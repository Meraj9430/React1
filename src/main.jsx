import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Home from './components/Home.jsx'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Medicines from './components/Medicines.jsx'
import Find_doctors from './components/Find_doctors.jsx'
import Video_consult from './components/Video_consult.jsx'
import Labs_test from './components/Labs_test.jsx'
import Hospital from './components/Hospital.jsx'
import Doc_Registration_form from './components/Doc_Registration_form.jsx'
import Home_page from './components/Home_page.jsx'
import Book_Appointment from './components/Book_Appointment/Book_Appointment.jsx';
import Sidebar from './pages/Sidebar.jsx';
import My_Appointment from './pages/User_pages/My_Appointment.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home_page />} />
      <Route path="Medicines" element={<Medicines />} />
      <Route path="find_doctor" element={<Find_doctors />} />
      <Route path="Video_consult" element={<Video_consult />} />
      <Route path="Labs_test" element={<Labs_test />} />
      <Route path="Hospital" element={<Hospital />} />
      <Route path="Doc_Registration_form" element={<Doc_Registration_form />} />
      <Route path="Book_Appointment/:id" element={<Book_Appointment />} />
      <Route path="User" element={<Sidebar />}>
        <Route path='My_Appointment' element={<My_Appointment/>}  />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
