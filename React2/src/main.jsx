import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Communications from "./pages/Communications.jsx";
import Feedback from "./pages/Feedback.jsx";
import Profile from "./pages/Profile.jsx";
import Media from "./pages/Media.jsx";
import Payment from "./pages/Payment.jsx";
import Refer_Earn from "./pages/Refer_Earn.jsx";
import Settings from "./pages/Settings.jsx";
import Medical_Records from "./pages/Medical_Records.jsx";
import Online_Consultation from "./pages/Online_Consultation.jsx";
import Refer_Patient from "./pages/Refer_Patient.jsx";
import Login from "./components/auth/Login.jsx";
import Login_otp from "./components/auth/Login_otp.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/" element={<Login />}/>
      <Route path="Login_with_otp" element={<Login_otp />}/>
      <Route path="dashboard" element={<Sidebar />}>
        <Route path="communications" element={<Communications />} />
        <Route path="Medical_Records" element={<Medical_Records />} />
        <Route path="Online_Consultation" element={<Online_Consultation />} />
        <Route path="Refer_Patient" element={<Refer_Patient />} />
        <Route path="Feedback" element={<Feedback />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Media" element={<Media />} />
        <Route path="Payment" element={<Payment />} />
        <Route path="Refer_Earn" element={<Refer_Earn />} />
        <Route path="Settings" element={<Settings />} />
      </Route>
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
