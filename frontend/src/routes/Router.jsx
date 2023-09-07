import React from 'react';
import { Route, Routes } from "react-router-dom";
import ROUTES from './routesModel';
import HomePage from '../pages/HomePage';
import DashboardPage from '../pages/DashboardPage';
import MorePage from '../pages/MorePage'; // Import the MorePage component

export default function Router() {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<HomePage />} />
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
            <Route path={ROUTES.MORE} element={<MorePage />} /> {/* added new route for "More" page */}
        </Routes>
    );
}
