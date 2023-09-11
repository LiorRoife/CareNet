import React from 'react';
import { Container, Button, Grid, Paper,Box } from '@mui/material';
import './styles.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import ROUTES from '../routes/routesModel';

export default function StartPage(){

    const navigate = useNavigate();
    
    return (
        
      <Box  >
      {/* Banner Code */}
      <div className="banner" >
          <div className="banner__content">
              <div className="banner__text">
                  <strong>CareNet </strong>

                  <div className="banner__text-subtitle" style={{ fontSize: '14px' }}>
                      אתה לא לבד
                  </div>
                  
              </div>
              <div className="banner__logo" >
                  <img src="/pics/CareNet_Logo.png" alt="CareNet_Logo" />
              </div>
             <div style={{fontSize: '30px' }}>
          <div className = "secondary_welcome_text"style={{ fontSize: '18px',marginBottom:'10px'}}>
            נשמח לשמוע את כל הפרטים, כך שנוכל להעביר את המקרה לטיפול אחראי החרם בבית הספר בצורה אנונימית
             </div>  
             <Grid container spacing={5} justifyContent="center" style={{maxWidth:'100%'}}>    
             <Grid item  >
              <Button className="boycott_witness"
                       variant="contained"
                       color="primary"
                       style={{backgroundColor:'#38D2D2'}}
              onClick={() => navigate(ROUTES.REPORT)}>
                   אני מעוניין לדווח <br></br>על חרם
            </Button>
            </Grid>
             <Grid item>
                <Button className="boycott_suffer"
                        variant="contained"
                       color="primary" 
                       style={{backgroundColor:'#38D2D2'}}
                      onClick={()=> navigate(ROUTES.LOGIN)}>
                       אני איש צוות  <br></br>אני מעוניין לצפות בדיווחים
                      </Button>
                      </Grid>
               </Grid>
             </div>
          </div>
      </div>
  </Box>
            
      );

}


