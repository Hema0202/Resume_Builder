import React, { useState } from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  function changeUsernameHandler(event){
    setUsername ( event.target.value)
   }
  function changePasswordHandler(event){
    setPassword ( event.target.value)
   }
  async function login() {
    const res=await axios.post('http://localhost:4000/login',{
      email:username,
      password:password
    })
    console.log(res.data.status)
    if(res.data.status==false){
      alert(res.data.message)
    }
    else{
      localStorage.setItem("token",res.data.token);
      localStorage.setItem('email',res.data.data.email);
      navigate('/')
    }
  }
  

  function redirectToSignup(){
    navigate('/signup')
  }
  return (
    <>
      <div className="login-page-container">
        <h1>Login</h1>
        <hr />
        <TextField
          placeholder="Username"
          className="login-input"
          variant="standard"
          value={username}
          onChange={(event)=>changeUsernameHandler(event)}
        />
        <TextField
          placeholder="Password"
          className="login-input"
          variant="standard"
          value={password}
          onChange={(event)=>changePasswordHandler(event)}
          type="password"
        />
        <Button variant="contained" onClick={login}>
          Login
        </Button>
        <div>
          Not a Member? <span onClick={redirectToSignup}>Signup</span>
        </div>
      </div>
    </>
  );
}
