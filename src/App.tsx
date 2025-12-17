import './App.css';
import SideBar from './components/SideBar';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
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
function App() {

  return (
    // <Login></Login>
    // <SideBar></SideBar>
    // <EditEmpWizard/>
    // <div>
      <Routes>
       <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
   <Route 
         path="/employees" 
         element={
           <SideBar>
             <EmployeesPage />
           </SideBar>
         } 
       />
       <Route 
          path="/official-employees" 
          element={
            <SideBar>
              <OfficialEmployees />
           </SideBar>
         } 
        />
        <Route 
         path="/other-government" 
          element={
             <SideBar>
             <OfficialsOfAnotherGovernment />
             </SideBar>
           } 
        />
        <Route 
         path="/dismissd-employees" 
          element={
             <SideBar>
             <DismissedEmployees />
             </SideBar>
           } 
        />
         <Route 
         path="/older-employees" 
          element={
             <SideBar>
             <OlderEmployees />
             </SideBar>
           } 
        />
         <Route 
         path="/permenant-contrast" 
          element={
             <SideBar>
             <PermanentEmploymentContracts />
             </SideBar>
           } 
        />
         <Route 
         path="/temporary-contrast" 
          element={
             <SideBar>
             <TemporaryEmploymentContracts />
             </SideBar>
           } 
        />
        <Route 
         path="/programs" 
          element={
             <SideBar>
             <Programs />
             </SideBar>
           } 
        />
        <Route 
         path="/temporary-contrast-employees" 
          element={
             <SideBar>
             <TemporaryContrastEmployees />
             </SideBar>
           } 
        />
      </Routes>
  )
}

export default App
