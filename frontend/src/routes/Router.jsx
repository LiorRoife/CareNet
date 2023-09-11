import React from 'react';
import { Route, Routes } from "react-router-dom";
import ROUTES from './routesModel';
import HomePage from '../pages/HomePage';
import DashboardPage from '../pages/DashboardPage';
import StartPage from '../pages/StartPage';
import ReportPage from '../pages/ReportPage';
import NewReport from '../pages/NewReport';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import HistoryReport from '../pages/HistoryReport';
import MorePage from '../pages/MorePage';
import AboutPage from '../pages/AboutPage';
import ContactUsPage from '../pages/ContactUsPage';

export default function Router() {
    return (
        <Routes>
        
            <Route path={ROUTES.ROOT} element={<HomePage />} />
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
            <Route path={ROUTES.START} element={<StartPage/>} />  
            <Route path={ROUTES.REPORT} element={<ReportPage/>} />  
            <Route path={ROUTES.NEW_REPORT} element={<NewReport/>} />  
            <Route path={ROUTES.LOGIN} element={<LoginPage/>} />
            <Route path={ROUTES.SIGN_UP} element={<SignUpPage/>} />
            <Route path={ROUTES.HISTORY_REP} element={<HistoryReport/>} />
            <Route path={ROUTES.CONTACT_US} element={<ContactUsPage />} /> 
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.MORE} element={<MorePage />} />

      </Routes>
    );
}
