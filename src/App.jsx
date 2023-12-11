import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DateRangeIcon from "@mui/icons-material/DateRange";
import {Navigate, useNavigate} from "react-router-dom";
import axios from 'axios';


function App() {
  const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // const [linkedinName, setLinkedinName] = useState('');
  const [linkedinLink, setLinkedinLink] = useState('');
  // const [githubName, setGithubName] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [skills, setSkills] = useState([]);
  const [interest, setInterest] = useState([]);
  const [hobby, setHobby] = useState([]);
  const [education , setEducation] =useState([]);
  const [project, setProject] = useState([]);
  const [experience, setExperience] = useState([]);
  const navigate = useNavigate()
  
  async function submit(){
    let data = {
     name:name,
     phone:phone,
     linkedinLink:linkedinLink,
     githubLink:githubLink,
     skills:skills,
     interest:interest,
     hobby:hobby,
     education:education,
     project:project,
     experience:experience,
     email:localStorage.getItem('email')
    }
    
    let res = await axios.post('http://localhost:4000/resume',
    data,{headers:{
      'x-api-key':localStorage.getItem("token")
    }}
   
    )
    console.log(res)
    if(res.data.status==false){
      alert(res.data.message)
    }
    else{
      alert(res.data.message)
      navigate('/resume');
    }
}


  function changeNameHandler(event){
   setName ( event.target.value)
  }

  function changeEmailHandler(event){
    setEmail ( event.target.value)
   }

   function changePhoneHandler(event){
    setPhone ( event.target.value)
   }

  //  function changeLinkedinNameHandler(event){
  //   setLinkedinName ( event.target.value)
  //  }

   function changeLinkedinLinkHandler(event){
    setLinkedinLink ( event.target.value)
   }

  //  function changeGithubNameHandler(event){
  //   setName ( event.target.value)
  //  }

   function changeGithubLinkHandler(event){
    setGithubLink ( event.target.value)
   }

  function addSkill() {
    let temp = [...skills];
    temp.push("");
    setSkills(temp);
    console.log("hi");
  }

  function removeSkill(index) {
    let temp = [...skills];
    console.log(temp);
    temp.splice(index, 1);
    setSkills(temp);
  }

  function skillChangeHandler(e,index){
      let temp =[...skills];
      temp[index]=e.target.value;
      setSkills(temp);
  }

  function addInterest(){
    let temp= [...interest];
    temp.push("");
    setInterest(temp);
}

function removeInterest(index){
  let temp= [...interest];
  temp.splice(index, 1);
  setInterest(temp);
  console.log(index);
}

function interestChangeHandler(e, index){
let temp = [...interest];
temp[index]=e.target.value;
setInterest(temp);
}

function addHobby(){
  let temp =[...hobby];
  temp.push("");
  setHobby(temp);
}

function removeHobby(index){
  let temp=[...hobby];
  temp.splice(index, 1);
  setHobby(temp);
  console.log(index)
}

function hobbyChangeHandler(e,index){
  let temp=[...hobby];
  temp[index]=e.target.value;
  setHobby(temp);
}
function addEducation(){
  let temp = [...education];
  let obj = {
    college : '',
    degree : '',
    percentage: '',
    startYear: '',
    endYear: ''
  }
  temp.push(obj);
  setEducation(temp);
}

function removeEducation(index){
  let temp=[...education];
  temp.splice(index,1);
  setEducation(temp);
}

function changeEducationHandler(event, index, field){
  let temp =[...education];
  temp[index][field]=event.target.value;
  setEducation(temp);
}

function addProject(){
  let temp=[...project];
  let obj={
    projectTitle:'',
    projectLink:'',
    projectDescription:''
  }
  temp.push(obj);
  setProject(temp);
}

function removeProject(index){
  let temp = [...project];
  temp.splice(index,1);
  setProject(temp);
}

function changeProjectHandler(event,index, field){
  let temp=[...project];
  temp[index][field]=event.target.value
  setProject(temp);
}

function addExperience(){
  let temp = [...experience];
  let obj={
    companyName:'',
    designation:'' ,
    description:'',
    starting:'',
    ending: ''
  }
  temp.push(obj);
  setExperience(temp);
}

function removeExperience(index){
  let temp = [...experience];
  temp.splice(index, 1);
  setExperience(temp);
}

function changeExperienceHandler(event, index, field){
  let temp = [...experience];
  temp[index][field]=event.target.value
  setExperience(temp);
}


  return (
    <>
    {!localStorage.getItem('token') && <Navigate to="/login"/>}
      <div className="form">
        <div className="container">
          <br></br>
          <br></br>
          <h1 align="center" className="main-heading">
            Resume Builder
          </h1>
          <br></br>
          <br></br>
          <div className="Box">
            <div className="info">
              If you do not wish to include information in a specific tab, there
              is no requirement to fill it.Skipping data in a tab means it will
              not appear in your resume.
            </div>
          </div>
          <br></br>

          {/*  ################################### Personal ########################################## */}

          <div type="text" className="heading">
            Personal details:
            <hr></hr>
          </div>
          <br></br>
          <br></br>

          <div className="box-container">
            <div type="text">Name:</div>
            <TextField
              placeholder="Name"
              label=""
              className="box"
              variant="outlined"
              value={name}
              onChange={(event)=>changeNameHandler(event)}
            />
          </div>
          <br></br>
          <br></br>

          {/* <div className="box-container">
            <div type="text">Email:</div>
            <TextField placeholder="Email" className="box" variant="outlined" 
            value={email}
            onChange={(event)=>changeEmailHandler(event)}/>
          </div> */}
          

          <div className="box-container">
            <div type="text">Phone No.</div>
            <TextField
              placeholder="Phone no"
              className="box"
              variant="outlined"
              value={phone}
              onChange={(event)=>changePhoneHandler(event)}
            />
          </div>
          <br></br>
          <br></br>

          {/* <div className="box-container">
            <div type="text">Linkedin Name:</div>
            <TextField
              placeholder="Linkedin name"
              className="box"
              variant="outlined"
              value={linkedinName}
              onChange={(event)=>changeLinkedinNameHandler(event)}
            />
          </div> */}
          <br></br>
          <br></br>

          <div className="box-container">
            <div type="text">Linkedin Link:</div>
            <TextField
              placeholder="Linkedin link"
              className="box"
              variant="outlined"
              value={linkedinLink}
              onChange={(event)=>changeLinkedinLinkHandler(event)}
            />
          </div>
          <br></br>
          <br></br>

          {/* <div className="box-container">
            <div type="text">Github Name:</div>
            <TextField
              placeholder="Github name"
              className="box"
              variant="outlined"
              value={githubName}
              onChange={(event)=>changeGithubNameHandler(event)}
            />
          </div>
          <br></br>
          <br></br> */}

          <div className="box-container">
            <div type="text">Github Link:</div>
            <TextField
              placeholder="Github link"
              className="box"
              variant="outlined"
              value={githubLink}
              onChange={(event)=>changeGithubLinkHandler(event)}
            />
          </div>
          <br></br>
          <br></br>

          <div className="box-container">
            <div type="text">About:</div>
            <TextField placeholder="about" className="box" variant="outlined" />
          </div>
          <br></br>
          <br></br>

{/*  ################################### Skills ########################################## */}

          <div className="box-container" id="num">
            <div type="text">Skills:</div>
            {/* <TextField placeholder="Enter a skill:" classname="box" variant="outlined" />
            <Button variant="text">Remove</Button>
            <br></br>
            <br></br> */}
            {skills.map((element, index) => {
              return (
                <div key={"skill" + index}>
                  <TextField
                    placeholder="Enter a skill:"
                    className="box"
                    variant="outlined"
                    value={element}
                    onChange={e=>skillChangeHandler(e, index)}
                  />
                  <Button variant="text" onClick={() => removeSkill(index)}>
                    Remove
                  </Button>
                  <br></br>
                  <br></br>
                </div>
              );
            })}
            <Button variant="contained" onClick={addSkill}>
              Add Skill
            </Button>
          </div>
          <br></br>
          <br></br>

 {/* ################################### Interest ########################################  */}

          <div className="box-container">
            <div type="text">Area of interest:</div>
            {/* <TextField placeholder="Enter a interest" className="box" variant="outlined"
            />
            <Button variant="text">Remove</Button>
            <br></br>
            <br></br> */}
            {interest.map((element, index) => {
              return (
                <div key={"interest" + index}>
                  <TextField
                    placeholder="Enter a interest"
                    className="box"
                    variant="outlined"
                    value={element}
                    onChange={e=>interestChangeHandler(e,index)}
                  />
                  <Button variant="text" onClick={()=> removeInterest(index)}>Remove</Button>
            <br></br>
            <br></br>
                </div>
              );
            })}

            <Button variant="contained" onClick={addInterest}>Add interest</Button>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

 {/* ################################### Education ######################################*/}

          <div type="text" className="heading">
            Education:
          </div>
          <br></br>
          <br></br>

          {education.map((element,index)=>{
            return(
              <>
          <div className="class-container">
            <div type="text">College/School</div>
            <TextField
              placeholder="ex.Miranda college"
              className="box"
              variant="outlined"
              value={element.college}
              onChange={(event)=>
              changeEducationHandler(event,index,'college' )}
            />
          </div>
          <br></br>
          <br></br>
          

          <div className="class-container">
            <div type="text">Degree</div>
            <TextField
              placeholder="Bachlor's information Technology/Higher seondary education"
              className="box"
              variant="outlined"
              value={element.degree}
              onChange={(event)=>
              changeEducationHandler(event,index,'degree' )}
            />
          </div>
          <br></br>
          <br></br>

          <div className="class-container">
            <div type="text">Percentage</div>
            <TextField placeholder="80%" className="box" variant="outlined" 
            value={element.percentage}
            onChange={(event)=>
            changeEducationHandler(event,index,'percentage' )}
            />
          </div>
          <br></br>
          <br></br>

          <div className="class-container">
            <div type="text">Start year</div>
            <TextField
              placeholder="ex.2020"
              className="box"
              variant="outlined"
              value={element.startYear}
              onChange={(event)=>
              changeEducationHandler(event,index,'startYear' )}
            />
          </div>
          <br></br>
          <br></br>

          <div className="class-container">
            <div type="text">End year</div>
            <TextField
              placeholder="ex.2024"
              className="box"
              variant="outlined"
              value={element.endYear}
              onChange={(event)=>
              changeEducationHandler(event,index,'endYear' )}
            />
          </div>
          <br></br>
          <br></br>

          <Button variant="text" onClick={()=>removeEducation(index)}>Remove</Button>
          <br></br>
          <br></br>
          </>
          )
        })}


          <Button variant="contained" onClick={addEducation}>Add Education</Button>
          <br></br>
          <br></br>

          <div type="text" className="heading">
            Project
          </div>
          <br></br>
          <br></br>


           {/*  ################################### Project ########################################## */}

          {project.map((element,index)=>{
            return(
              <>
          <div className="box-container">
            <div type="text">Project title:</div>
            <TextField
              placeholder="ex.Resume Builder"
              className="box"
              variant="outlined"
              value={element.ProjectTitle}
              onChange={(event)=>changeProjectHandler(event,index,'projectTitle')}
            />
          </div>
          <br></br>
          <br></br>

          <div className="box-container">
            <div type="text">Project Link:</div>
            <TextField
              placeholder="project direct link"
              className="box"
              variant="outlined"
              value={element.projectLink}
              onChange={(event)=>changeProjectHandler(event,index,'projectLink')}
            />
          </div>
          <br></br>
          <br></br>

          <div className="box-container">
            <div type="text">Project Description:</div>
            <TextField
              placeholder="ex. A website where user can generate their resume in a standard format"
              className="box"
              variant="outlined"
              value={element.ProjectDescription}
              onChange={(event)=>changeProjectHandler(event,index,'projectDescription')}
            />
          </div>
          <br></br>
          <br></br>

          <Button variant="text" onClick={()=>
          removeProject(index)}>Remove</Button>
          <br></br>
          <br></br>
          </>
            )
          })}
          <Button variant="contained" onClick={addProject}>Add Project</Button>
          <br></br>
          <br></br>

          {/*  ################################### Experience ########################################## */}

          <div className="heading" type="text">
            Experience:
          </div>
          <br></br>
          <br></br>

          {experience.map((element,index)=>{
            return(
              <>
            <div className="box-container">
            <div type="text">Company Name:</div>
            <TextField
              placeholder="ex.company name"
              className="box"
              variant="outlined"
              value={element.companyName}
              onChange={(event)=>changeExperienceHandler(event, index, 'companyName')}
            />
          </div>
          <br></br>
          <br></br>

          <div className="box-container">
            <div type="text">Designation:</div>
            <TextField
              placeholder="ex. your designation"
              className="box"
              variant="outlined"
              value={element.designation}
              onChange={(event)=>changeExperienceHandler(event, index, 'designation')}
            />
          </div>
          <br></br>
          <br></br>

          <div className="box-container">
            <div type="text">Description:</div>
            <TextField
              placeholder="ex. your responsibilities or your work experience"
              className="box"
              variant="outlined"
              value={element.description}
              onChange={(event)=>changeExperienceHandler(event, index, 'description')}
            />
          </div>
          <br></br>
          <br></br>

          <div className="box-container">
            <div type="text">Starting:</div>
            <TextField
              
              type="date"
              className="box"
              variant="outlined"
              value={element.starting}
              onChange={(event)=>changeExperienceHandler(event, index, 'starting')}
            />
          </div>
          <br></br>
          <br></br>

          <div className="box-container">
            <div type="text">Ending:</div>
            <TextField
              type="date"
              className="box"
              variant="outlined"
              value={element.ending}
              onChange={(event)=>changeExperienceHandler(event, index, 'ending')}
            />
          </div>
          <br></br>
          <br></br>

          <Button variant="text" onClick={()=>removeExperience(index)}>Remove</Button>
          <br></br>
          <br></br>
          </>
            )
          })
          }
          <Button variant="contained" onClick={addExperience}>Add Experience</Button>
          <br></br>
          <br></br>

          {/*  ################################### Hobbies ########################################## */}


          <div className="box-container">
            <div type="text">Hobbies:</div>
            {/* <TextField
              placeholder="Enter Hobbies"
              className="box"
              variant="outlined"
            />
          </div>
          <br></br>
          <br></br>
             
          <Button variant="text">Remove</Button>
          <br></br>
          <br></br> */}
          {hobby.map((element, index) => {
            return(
              <div key={"hobby" + index}>
                <TextField
              placeholder="Enter Hobbies"
              className="box"
              variant="outlined"
              value={element}
              onChange={e=>hobbyChangeHandler(e,index)}
            />
            <Button variant="text" onClick={()=> removeHobby(index)}>Remove</Button>
                
              </div>
            )
          })

          }
          <Button variant="contained" onClick={addHobby}>Add a Hobby</Button>
          <br></br>
          <br></br>

          <Button variant="contained" onClick={submit}>Submit</Button>
          <br></br>
          <br></br>
        </div>
      </div>
      </div>
    </>
  );
}
export default App;
