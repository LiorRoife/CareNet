import React from 'react';
import { Container, Button, Grid, Paper } from '@mui/material';
import './styles.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import ROUTES from '../routes/routesModel';

export default function StartPage(){

    const navigate = useNavigate();
    
    return (
        
  <Container maxWidth="sm">
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <img src="/pics/CareNet_Logo.png" alt="Sample" width="100%" />       
          </Paper>
          <div style={{ marginTop: '30px',marginRight:'20px' }}>
          <div className="welcome_text" dir='rtl'  style={{ marginTop: '30px',marginRight:'20px' , marginBottom:'30px'}}>
               <strong>שלום לך</strong>
                <div className = "secondary_welcome_text"style={{ fontSize: '18px' }}>
                  אשמח לסייע , במה אוכל לעזור?
                   </div>    
              </div>
              <Grid container spacing={3} justifyContent="center">    
                <Grid item>
                  <Button className="boycott_witness"
                   variant="contained"
                    color="primary"
                    onClick={() => navigate(ROUTES.REPORT)}>
                    אני עד לחרם
                  </Button>
                </Grid>
                <Grid item>
                <Button className="boycott_suffer"
                 variant="contained"
                  color="primary" >
                   יש עליי חרם
                  </Button>
                </Grid>
              </Grid>
            </div>
        </Container>
            
      );

}