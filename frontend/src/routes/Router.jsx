import React from 'react'
import { Route, Routes } from "react-router-dom"
import ROUTES from './routesModel'
import HomePage from '../pages/HomePage'
import DashboardPage from '../pages/DashboardPage'
import StartPage from '../pages/StartPage'
import ReportPage from '../pages/ReportPage'

export default function Router() {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<HomePage />} />
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
            <Route path={ROUTES.START} element={<StartPage/>} />  
            <Route path={ROUTES.REPORT} element={<ReportPage/>} />  


      </Routes>
    )
}
