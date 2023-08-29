import {
    BottomNavigation,
    BottomNavigationAction,
    Paper,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";
import InfoIcon from "@mui/icons-material/Info";

import StyleIcon from "@mui/icons-material/Style";

export default function Footer() {
    const navigate = useNavigate();

    return (
        <>
            <Paper
                sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
                elevation={3}
            >
                <BottomNavigation showLabels>
                    <BottomNavigationAction
                        label="Dashboard"
                        icon={<InfoIcon />}
                        onClick={() => navigate(ROUTES.DASHBOARD)}
                    />
                    <BottomNavigationAction
                        label="Home"
                        icon={<StyleIcon />}
                        onClick={() => navigate(ROUTES.ROOT)}
                    />


                </BottomNavigation>
            </Paper>
        </>
    );
}