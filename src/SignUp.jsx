import React, { useState } from "react";
import Button from "@mui/material/Button";
import './SignUp.css';
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate()

  function signup(){
    
  }
  function changeNameHandler(event){
    setName ( event.target.value)
   }
   function changeEmailHandler(event){
    setEmail ( event.target.value)
   }
   function changePasswordHandler(event){
    setPassword ( event.target.value)
   }
   function changeConfirmHandler(event){
    setConfirm ( event.target.value)
   }

   function redirectToLogin(){
        navigate('/login')
   }
  return (
    <>
    
      <div className="signup-page-container">
        <h1>Signup</h1>
        <hr />
        <TextField
          placeholder="Name"
          className="signup-input"
          variant="standard"
          value={name}
          onChange={(event)=>changeNameHandler(event)}
        />
        <TextField
          placeholder="Email"
          className="signup-input"
          variant="standard"
          value={email}
          onChange={(event)=>changeEmailHandler(event)}
          
        />
        <TextField
          placeholder="Password"
          className="signup-input"
          variant="standard"
          value={password}
          onChange={(event)=>changePasswordHandler(event)}
          type="password"
        />
        <TextField
          placeholder="Confirm Password"
          className="signup-input"
          variant="standard"
          value={confirm}
          onChange={(event)=>changeConfirmHandler(event)}
          type="password"
        />
        <Button variant="contained" onClick={signup}>
          Signup
        </Button>
        <div>
          Already have account? <span onClick={redirectToLogin}>Login</span>
        </div>
      </div>

    </>
  )
}
