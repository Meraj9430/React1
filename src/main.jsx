import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
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
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="Medicines" element={<Medicines />} />
      <Route path="find_doctor" element={<Find_doctors />} />
      <Route path="Video_consult" element={<Video_consult />} />
      <Route path="Labs_test" element={<Labs_test />} />
      <Route path="Hospital" element={<Hospital />} />
      <Route path="Doc_Registration_form" element={<Doc_Registration_form />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
