import React from 'react'
import { Box } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Counter from '../components/Counter'
import './styles.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import ROUTES from '../routes/routesModel';

export default function HomePage() {

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
                    <button 
                     className ="get_help"
                    size="large"
                    onClick={() => navigate(ROUTES.START)} ><ArrowForwardIcon/>
                    </button> 
                </div>
            </div>

            {/* Your original content: 
        <Counter /> */}

        </Box>
    )
}
