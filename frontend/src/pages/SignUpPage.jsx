import React,{useState} from 'react';
import './signup-style.css';
import { Button } from 'semantic-ui-react';
import { Box, Card} from '@mui/material';
import axios from 'axios';
import ROUTES from '../routes/routesModel';
import { useNavigate} from 'react-router-dom';

export default function SignUpPage() {
    const navigate =useNavigate();
// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
const[exist,setExist] = useState(false);

// Handling the name change
const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
        setError(true);
    } else {
       // setSubmitted(true);
        //setError(false);
        saveData();      
    }
};

function saveData(){
    var data={
        userName:name,
        userEmail:email,
        userPassword:password,
    }
    console.log(data);
    axios
    .post(ROUTES.SIGN_UP,data)
    .then((response) => {
        console.log(response.data);
       
        if(response.data.success){
            console.log(response.data.success);
            setSubmitted(true);
            setError(false);
            setExist(false);
            navigate(ROUTES.LOGIN);
        }
        else{
            console.log("unexpected response: ", response.data);
            setExist(false);
            setError(true);
            setSubmitted(false);
        }
      })
      .catch((error) => {
        console.error('Error saving messages:', error.response.data);
        setSubmitted(false);
        setError(true);
        setExist(true);
     });
}

const emailExistMessage = () =>{
    return (
        <div className="exist"
            style={{
                display: error && exist ? '' : 'none',
            }}>
            <h1 style={{fontSize:"100%"}}>  בית הספר שציינת כבר קיים במערכת</h1>
        </div>
    )
}
// Showing success message
const successMessage = () => {
    return (
        <div
            className="success"
            style={{
                display: submitted ? '' : 'none',
            }}>
            <h1 style={{fontSize:"100%"}}>  המשתמש {name} נרשם בהצלחה!!</h1>
        </div>
    );
};

// Showing error message if error is true
const errorMessage = () => {
    return (
        <div
            className="error"
            style={{
                display: error && !exist ? '' : 'none',
            }}>
            <h1>בבקשה למלא את השדות החסרים</h1>
        </div>
    );
};

return (
    <Box component="span">
      <div className="banner__text" style={{marginLeft:"20px",paddingTop:"30px"}}>
         <strong>CareNet </strong>
        <div className="banner__text-subtitle" style={{ fontSize: '14px' }}>
                    אתה לא לבד
       </div>
    </div>
    <div className="sign-form">
    <Card className="sign-upCard">
        <div>
            <h1>הרשמה למערכת</h1>
        </div>

        {/* Calling to the methods */}
        <div className="messages">
            {emailExistMessage()}
            {errorMessage()}
            {successMessage()}
        </div>
       
  
        <form >
            {/* Labels and inputs for form data */}
            <label className="label"><strong>שם בית הספר</strong></label>
            <input onChange={handleName} className="input" name="userName" style={{width:"80%"}}
                value={name} type="text" />

            <label className="label"><strong>אימייל</strong></label>
            <input onChange={handleEmail} className="input" name="userEmail" style={{width:"80%"}}
                value={email}  type="email" />

            <label className="label"><strong>סיסמא</strong></label>
            <input onChange={handlePassword} className="input" name="userPassword" style={{width:"80%" }}
                value={password} type="password" />
             <br></br>
            <Button onClick={handleSubmit} className="btn"
                  variant="contained"  type="submit">
                  <strong>הרשמה</strong>
            </Button>
        </form>
        </Card>
    </div>
    </Box>
);}

