import React from 'react';
import { Box , Button } from "@mui/material";
import './styles.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import ArtChat from './NewReport';
import ROUTES from '../routes/routesModel';

export default function ReportPage() {

  const navigate = useNavigate();

    return (
        <Box>
            {/* Banner Code */}
            <div className="banner">
                <div className="banner__content">
                    <div className="banner__text">
                        <strong>CareNet </strong>

                        <div className="banner__text-subtitle" style={{ fontSize: '14px' }}>
                            אתה לא לבד
                        </div>
                        
                    </div>
                    <div className="banner__logo">
                        <img src="/pics/CareNet_Logo.png" alt="CareNet_Logo" />
                    </div>
                   <div style={{fontSize: '30px' }}>
                   <p>
                   <strong>?היית עד/ה לחרם</strong><br />
                   <strong>זה המקום להושיט יד</strong>
                   </p> 
                <div className = "secondary_welcome_text"style={{ fontSize: '18px',marginBottom:'10px' }}>
                  נשמח לשמוע את כל הפרטים, כך שנוכל להעביר את המקרה לטיפול אחראי החרם בבית הספר בצורה אנונימית
                   </div>  
                   <Button className="boycott_witness"
                   variant="contained"
                    color="primary"
                    onClick={() => navigate(ROUTES.NEW_REPORT)}
 
                    style={{blockSize:'40px', fontSize:'18px', backgroundColor:'#38D2D2'}}>
                    <strong>דיווח על מקרה</strong>                 </Button>
                   </div>
                </div>
            </div>

            {/* Your original content: 
        <Counter /> */}

        </Box>
    )
}
