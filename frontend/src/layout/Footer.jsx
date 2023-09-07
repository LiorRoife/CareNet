import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Style';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CallIcon from '@mui/icons-material/Call';
import PhonePopupModal from './PhonePopupModal'; // Import the PhonePopupModal component

import ROUTES from '../routes/routesModel';

export default function Footer() {
    const navigate = useNavigate();

    return (
        <>
            <Paper
                sx={{ position: 'sticky', bottom: 0, left: 0, right: 0 }}
                elevation={3}
            >
                <BottomNavigation showLabels>
                    <BottomNavigationAction
                        label="מידע נוסף"
                        icon={<MoreHorizIcon />}
                        onClick={() => navigate(ROUTES.MORE)}
                    />
                    <BottomNavigationAction
                        label="קו-חם"
                        icon={<CallIcon />}
                        onClick={() => navigate(ROUTES.PHONE_POPUP)}
                    />
                    <BottomNavigationAction
                        label="Dashboard"
                        icon={<InfoIcon />}
                        onClick={() => navigate(ROUTES.DASHBOARD)}
                    />
                    <BottomNavigationAction
                        label="בית"
                        icon={<HomeIcon />}
                        onClick={() => navigate(ROUTES.ROOT)}
                    />
                </BottomNavigation>
            </Paper>
        </>
    );
}
