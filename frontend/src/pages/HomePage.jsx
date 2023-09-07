import React from 'react'
import { Box } from "@mui/material"
import Counter from '../components/Counter'
import './styles.css';
export default function HomePage() {
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
                </div>
            </div>

            {/* original content: */}

        </Box>
    )
}
