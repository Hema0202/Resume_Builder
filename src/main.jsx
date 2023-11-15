import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Application from './Application.jsx'
import Login from './Login.jsx'
import SignUp from './SignUp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Login /> */}
    <SignUp/>
    {/* <Application ></Application> */}
  </React.StrictMode>
)
