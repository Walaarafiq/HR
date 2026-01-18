import React from 'react';
import EmpGateSideBar from '../components/EmpGateSideBar';
import { Outlet } from "react-router-dom";
import DashHeader from '../components/DashHeader';
import EmpDashCards from '../components/EmpDashCards';
import ServicesHeader from '../components/ServicesHeader';
import EmpDetailsCards from '../components/EmpDetailsCards';

function EmpDashboard() {
  return (
    <div>
      <EmpGateSideBar>
        <DashHeader name="علاء" />
        <EmpDashCards />
        <ServicesHeader />
        <EmpDetailsCards />
        <Outlet />
      </EmpGateSideBar>
    </div>
  );
}

export default EmpDashboard;
