import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTES from './routesModel';
import HomePage from '../pages/HomePage';
import DashboardPage from '../pages/DashboardPage';
import MorePage from '../pages/MorePage';
import AboutPage from '../pages/AboutPage';
import ContactUsPage from '../pages/ContactUsPage'; // Import the ContactUsPage component

export default function Router() {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<HomePage />} />
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
            <Route path={ROUTES.MORE} element={<MorePage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.CONTACT_US} element={<ContactUsPage />} /> {/* Add the new route for the "ContactUsPage" */}
        </Routes>
    );
}
