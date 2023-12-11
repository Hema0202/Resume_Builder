import React, { useState ,useEffect} from "react";
import "./Application.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';
import { usePDF } from "react-to-pdf"; 
import Button from "@mui/material/Button";
import { Navigate, useNavigate } from "react-router-dom";

// const name = "hema lohana";

// const phone = 8153841926;

// const linkedinLink = "https://meet.google.com/abc-pqrs-tuv";

// const githubLink = "https://meet.google.com/abc-pqrs-tuv";

// const about = "i learnt react js";

// const skills = ["js", "java", "python"];

// const interest = ["dancing", "singing"];

// const education = [
//   {
//     college: "Sri Krishna Institute of Technology",
//     degree: "12th",
//     percentage: 80,
//     startYear: 2016,
//     endYear: 2018,
//   },
//   {
//     college: "Sri Krishna Institute of Technology",
//     degree: "10th",
//     percentage: 60,
//     startYear: 2015,
//     endYear: 2016,
//   },
// ];

// const project = [
//   {
//     ProjectTitle: "game",
//     projectLink: "https://meet.google.com/abc-pqrs-tuv",
//     ProjectDescription: "this is amazing game ",
//   },
// ];

// const experience = [
//   {
//     companyName: "abc company",
//     designation: "software",
//     description: "this is good company",
//     starting: "22-02-2015",
//     ending: "22-02-2018",
//   },
// ];

// const hobby = ["play", "read"];
// const linkedIn = "https://meet.google.com/abc-pqrs-tuv";

export default function Application() {
  const navigate = useNavigate();
  const [data,setData]=useState({});
  const {toPDF , targetRef} = usePDF({filename:data.name+'-resume.pdf',method:'save'})
  async function fetchData(){
    const userData = await axios.get('http://localhost:4000/resume',{
      params:{
        email:localStorage.getItem('email')
      },
      headers:{
        'x-api-key':localStorage.getItem("token")
      }
     })
     setData(userData.data.data);
    console.log(userData.data)
  }
  useEffect( ()=>{
    fetchData()
  },[])
  
  return (
    <div>
      <div className="application-page-container" ref={targetRef}>

        <h1 align="center" className="main-head">
          Resume
        </h1>
        {/* <EmailIcon />
        <PhoneIcon />
        <LinkedInIcon />
        <GitHubIcon /> */}

        {/*  ################################### Personal ########################################## */}
        
        <div  className="nm left" >
        {data.name ? (
          <div>
            <p>
            <PersonIcon fontSize="small" /> <span className="capitalize">{data.name}</span>
            </p>
          </div>
        ) : (
          ""
        )}
        </div>
        
        <div className="ph left">
        {data.phone ? (
          <div>
            <p>
            <PhoneIcon  fontSize="small" /> <span>{data.phone}</span>
            </p>
          </div>
        ) : (
          ""
        )}
        </div>
        
        <div className="link left">
        {data.linkedinLink ? (
          <div>
            <p>
            <LinkedInIcon fontSize="small" /> <span>{data.linkedinLink}</span>
            </p>
          </div>
        ) : (
          ""
        )}
        </div>
        

        <div className="git left">
        {data.githubLink ? (
          <div>
            <p>
            <GitHubIcon fontSize="small" /> <span>{data.githubLink}</span>
            </p>
          </div>
        ) : (
          ""
        )}
        </div>
        

        <div className="email left">
        {localStorage.getItem('email') ? (
          <div>
            <p>
            <EmailIcon fontSize="small" /> <span>{localStorage.getItem('email')}</span>
            </p>
          </div>
        ) : (
          ""
        )}
        </div>

        
         {/* ################################### Education ######################################*/}
         <div className="resume-content-container">
          <div className="left-container">
        <div className="edu left">
        {(!data.education || data.education?.length == 0) ? (
          ""
        ) : (
          <div>
            <h1>Education</h1><hr></hr>
            <ul>{data.education.map((e, i) => {
              return (
                <li>
                  <p>
                    Degree: <span>{e.degree}</span>
                  </p>
                  <p>
                    college: <span>{e.college}</span>
                  </p>
                  <p>
                    Percentage: <span>{e.percentage}</span>
                  </p>
                  <p>
                    Start Year: <span>{e.startYear}</span>
                  </p>
                  <p>
                    End Year: <span>{e.endYear}</span>
                  </p>
                </li>
              );
            })}</ul>
          </div>
        )}
        </div>



       {/*  ################################### Hobbies ########################################## */}
        
       <div className="hb left">

        {(!data.hobby || data.hobby?.length == 0) ? (
          ""
        ) : (
          <div>
            <h1>Hobby</h1><hr></hr>
            <ul>
            {data.hobby.map((e, i) => {
              return (
                <li>
                  <p>{e}</p>
                </li>
              );
            })}</ul>
          </div>
        )}
        </div>
        

        

        {/* ################################### Interest ########################################  */}
        
        <div className="int left">
        {(!data.interest || data.interest?.length == 0 )? (
          ""
        ) : (
          <div>
            <h1>Interest</h1><hr></hr>
            <ul>{data.interest.map((e, i) => {
              return (
                <li>
                  <p>{e}</p>
                </li>
              );
            })}</ul>
          </div>
        )}
        </div>

        </div>
          
       
           
        {/*  ################################### about ########################################## */}
        
        <div className="right-container">
        <div className="abt right">
        {data.about ? (
          <div>
            <h1>About</h1><hr></hr>
            <p>
               <span>{data.about}</span>
            </p>
          </div>
        ) : (
          ""
        )}
        </div>



 
        {/*  ################################### Project ########################################## */}
        
        <div className="prj right">
        {(!data.project || data.project?.length == 0) ? (
          ""
        ) : (
          <div>
            <h1>Project</h1><hr></hr>
            <ul>{data.project.map((e, i) => {
              return (
                <li>
                  <p>
                    Project Title: <span>{e.ProjectTitle}</span>
                  </p>
                  <p>
                    Project Link: <span>{e.projectLink}</span>
                  </p>
                  <p>
                    Project Description:<span>{e.ProjectDescription}</span>
                  </p>
                </li>
              );
            })}</ul>
          </div>
        )}
        </div>


        {/*  ################################### Skills ########################################## */}
        
        <div className="sk right">
        {(!data.skills || data.skills?.length == 0 )? (
          ""
        ) : (
          <div>
            <h1>Skills</h1><hr></hr>
            <ul>{data.skills.map((e, i) => {
              return (
                <li>
                  <p>{e}</p>
                </li>
              );
            })}</ul>
          </div>
        )}
        </div>

        {/*  ################################### Experience ########################################## */}
        
        <div className="exp right">
        {(!data.experience || data.experience?.length == 0) ? (
          ""
        ) : (
          <div>
            <h1>Experience</h1><hr></hr>
            <ul>{data.experience.map((e, i) => {
              return (
                <li>
                  <p>
                    Company Name: <span>{e.companyName}</span>
                  </p>
                  <p>
                    designation: <span>{e.designation}</span>
                  </p>
                  <p>
                    description:<span>{e.description}</span>
                  </p>
                  <p>
                    starting: <span>{e.starting}</span>
                  </p>
                  <p>
                    ending: <span>{e.ending}</span>
                  </p>
                </li>
              );
            })}</ul>
          </div>
        )}
        </div>
        </div>
        

        </div>
      </div>
      <Button variant="contained" onClick={toPDF}>Download</Button>
      <Button variant="contained" onClick={()=>{navigate('/')}}>edit</Button>
         
    </div>
  );
}
