
import React, { useState } from 'react';
import RenderErrorMessage from './renderErrorMessage';
import './component.css';
import { Card, Button } from 'semantic-ui-react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import axios from 'axios';
import ROUTES from '../routes/routesModel';


// JSX code for login form
function RenderForm() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const[userName,setUserName]=useState("");
  const [ userPassword,setUserPassword]=useState("");


  const navigate = useNavigate();

  const handlePassword = (e) => {
    setUserPassword(e.target.value);
};

const handleName = (e) => {
  setUserName(e.target.value);
};

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check login logic and set error messages if needed
    var loginData={
      uname:userName,
      pass:userPassword,
    }

    axios
    .post(ROUTES.LOGIN,loginData)
    .then((response) => {
      if(response.data.success){
        console.log(response.data.success);
        setIsSubmitted(true);
       navigate(`/start/history-report/${loginData.uname}`);
    }})
    .catch((error) => {
      if (error.response && error.response.status != 400) {
        setErrorMessages({ name: 'uname', message: 'An error occurred during login' });
      } else {
        // Handle other errors, e.g., network issues
        setErrorMessages({ name: 'uname', message: 'שם משתמש או סיסמא לא תקינים' });
        
      }
    });
  };

  return (
     <Card className="loginCard">
     <label style={{paddingBottom:'20px'}}>
     <h1 style={{fontStyle:'italic'}}>התחבר למשתמש</h1>
     </label> 
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label><strong>שם בית הספר</strong></label>
          <input onChange={handleName} type="text" name="uname" required value={userName} />
          <RenderErrorMessage name="uname" errorMessages={errorMessages} />
        </div>
        <div className="input-container">
          <label><strong>סיסמא</strong></label>
          <input onChange={handlePassword} type="password" name="pass" required value={userPassword} />
          <RenderErrorMessage name="pass" errorMessages={errorMessages} />
          </div>   
          <Button className="submit" variant="contained">
          <strong>התחברות</strong>
          </Button>
          <br></br>
          <Button className="sign-up" variant="contained"
          onClick={(e) =>{
            e.preventDefault();
            navigate(ROUTES.SIGN_UP)}
          } >
          <strong>הרשמה</strong></Button>   
      </form>
      </div>
      </Card>
  );
  }

export default RenderForm











