import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Application from './Application.jsx'
import Login from './Login.jsx'
import SignUp from './SignUp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Login /> */}
    {/* <SignUp/> */}
    {/* <Application ></Application> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/resume' element={<Application />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
