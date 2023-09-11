import React from 'react';
import Login from '../components/Login';
import { Box,Card } from "@mui/material";
import axios from 'axios';


export default function LoginPage(){

return(
  <Box component="span" style={{display:'flex',flexDirection:'column',alignItems:'center',
  justifyContent:'flex-start',minHeight:'100vh'}}>
    <div className="banner__text" style={{marginRight:'30px', paddingTop:"30px" ,minHeight:'20px'}}>
         <strong>CareNet </strong>
        <div className="banner__text-subtitle" style={{ fontSize: '14px' }}>
                    אתה לא לבד
       </div>
    </div>
    <Card className="loginPageCard"
    style={{
      margin:'0',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#40E0D0',
      boxShadow:'none'
    }}><Login/></Card>
    
</Box>

)}