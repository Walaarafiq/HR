import React from 'react'
import EmployeesHeader from '../components/EmployeesHeader';
import EmployeesFilters from '../components/EmployeesFilters';
import EmployeesTable from '../components/EmployeesTable';
import YearNumber from '../components/YearNumber';
function OlderEmployees() {
  return (
    <div>
      <EmployeesHeader title="المتقاعدين" desc="قائمة بأسماء الموظفين النتقاعدين حاليا (قبل هذا الشهر)"/>
      <YearNumber/>
      <EmployeesFilters/>       
      <EmployeesTable/>
    </div>
  )
}

export default OlderEmployees;