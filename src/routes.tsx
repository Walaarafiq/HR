import { createBrowserRouter } from "react-router-dom";
import Layout  from "./layouts/Layout";
import Login from "./components/Login";
import SideBar from './components/SideBar';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import EmployeesPage from './pages/Employess.jsx';
import OfficialEmployees from './pages/OfficialEmployees.jsx';
import OfficialsOfAnotherGovernment from './pages/OfficialsOfAnotherGovernment.jsx';
import EditEmpWizard from './components/EditEmpWizard';
import OlderEmployees from './pages/OlderEmployees';
import DismissedEmployees from './pages/DismissedEmployees';
import PermanentEmploymentContracts from './pages/PermanentEmploymentContracts';
import TemporaryEmploymentContracts from './pages/TemporaryEmploymentContracts';
import SuspendedEmploymentContracts from './pages/SuspendedEmploymentContracts';
import TemporaryContrastEmployees from './pages/TemporaryContrastEmployees';
import Programs from './pages/Programs';
import Goverments from './pages/Goverments';
import TypeOfEmpTable from './components/TypeOfEmpTable';
import EmpType from './pages/EmpType';
import EmpClassifications from './pages/EmpClassifications';
import Categories from './pages/Categories';
import JobScale from "./pages/JobScale";
import Degree from "./pages/Degree";
import Programs2 from "./pages/Programs2";
import Certificates from "./pages/Certificates";
import GovernmentDepartment from "./pages/GovernmentDepartment";
import JobTitle from "./pages/JobTitle";
import Division from "./pages/Division";
import Section from "./pages/Section";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "auth",
    children: [
      { path: "login", element: <Login/> },
    ],
  },
  ,
  {
    
    path: "/",
    element: <Layout />,
    children: [
      { path: "temporary-contrast", element: <TemporaryEmploymentContracts /> },
      { path: "employees", element: <EmployeesPage /> },
      { path: "official-employees", element: <OfficialEmployees /> },
      { path: "other-government", element: <OfficialsOfAnotherGovernment /> },
      { path: "dismissd-employees", element: <DismissedEmployees /> },
      { path: "older-employees", element: <OlderEmployees /> },
      { path: "permenant-contrast", element: <PermanentEmploymentContracts /> },
      { path: "suspended-contrast", element: <SuspendedEmploymentContracts /> },
      { path: "programs", element: <Programs /> },
      { path: "temporary-contrast-employees", element: <TemporaryContrastEmployees /> },
      { path: "goverments", element: <Goverments /> },
      { path: "emp-type", element: <EmpType /> },
      { path: "emp-classifications", element: <EmpClassifications /> },
      { path: "categories", element: <Categories /> },
      { path: "job-scale", element: <JobScale /> },
      { path: "degrees", element: <Degree /> },
      { path: "programs2", element: <Programs2 /> },
      { path: "certificates", element:<Certificates/>},
      { path: "departments", element:<GovernmentDepartment/>},
      { path: "job-title", element:<JobTitle/>},
      { path: "divisions", element:<Division/>},
      { path: "section", element:<Section/>},
      { path: "dashboard", element:<Dashboard/>}
    ],
  },
]);

export default router;
