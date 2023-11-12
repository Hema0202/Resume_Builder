import React from 'react'
import './Application.css'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Application() {
    return (
    <div className='form1'>
      <div className="container1">
        <h1 align="center" className='main-head'>Resume</h1>
        <EmailIcon />
        <PhoneIcon/>
        <LinkedInIcon/>
        <GitHubIcon/>

        <div className="head">Education</div>
        <div className="head">Experience</div>
        <div className="head">Area of Interest</div>
        <div className="head">About</div>
        <div className="head">Project</div>
        <div className="head">Skills</div>
      </div>
    </div>
  )

}
