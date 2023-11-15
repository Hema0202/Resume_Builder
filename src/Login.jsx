import React from 'react'
import './Login.css'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
export default function Login() {
  return (
   <>
   {/* <div className="hi">Hello world</div> */}
   <div className="container2">
    <div className="name">Login</div>
    <div className="infor">Doesn't have account yet?Sign Up</div>
    <div type="text">Email Address</div>
            <TextField placeholder="Email" className="box" variant="outlined"/>
    <br></br>
    <div type="text">Password</div>
    <TextField placeholder='enter your password' className='box' variant='outlined'/>

   </div>
   </>
  )
}
