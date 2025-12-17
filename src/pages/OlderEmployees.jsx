import React from 'react'
import EmployeesHeader from '../components/EmployeesHeader';
import EmployeesFilters from '../components/EmployeesFilters';
import EmployeesTable from '../components/EmployeesTable';
import YearNumber from '../components/YearNumber';
function OlderEmployees() {
  return (
    <div>
      <EmployeesHeader title="المتقاعدين" desc="قائمة بأسماء الموظفين النتقاعدين حاليا (قبل هذا الشهر)" onApplyFilters={setFilters}/>
      <YearNumber/>
      <EmployeesFilters/>       
      <EmployeesTable filters={filters} />
    </div>
  )
}

export default OlderEmployees;