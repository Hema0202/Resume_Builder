import React from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function SignUp() {
  return (
    <>
    <div className="container3">
    <div className="name1">Sign up</div>
    <br></br>
    <br></br>
    <TextField placeholder="Name" className="box" variant="outlined"/>
    <br></br>
    <br></br>
    <TextField placeholder="Email" className="box" variant="outlined"/>
    <br></br>
    <br></br>
    <TextField placeholder="Password" className="box" variant="outlined"/>
    <br></br>
    <br></br>
    <TextField placeholder="Confirm Password" className="box" variant="outlined"/>
    <br></br>
    <br></br>
    <div className="infor">Already have account? Log In</div>
    <br></br>
    <br></br>
    <Button variant="contained">Sign Up</Button>

    </div>
    </>
  )
}
