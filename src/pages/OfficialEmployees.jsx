import React from 'react'
import EmployeesHeader from '../components/EmployeesHeader';
import EmployeesFilters from '../components/EmployeesFilters';
import EmployeesTable from '../components/EmployeesTable';
function OfficialEmployees() {
  return (
    <div>
      <EmployeesHeader title="قاعدة بيانات الموظفين" desc="يمكنك استعراض بيانات الموظفين والبحث المتقدم عبر الفلاتر التخصصية"/>
      <EmployeesFilters/>       
      <EmployeesTable />
    </div>
  )
}

export default OfficialEmployees