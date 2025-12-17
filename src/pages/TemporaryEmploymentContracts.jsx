import React from 'react'
import EmployeesHeader from '../components/EmployeesHeader';
import EmployeesFilters from '../components/EmployeesFilters';
import EmployeesTable from '../components/EmployeesTable';
function TemporaryEmploymentContracts() {
  return (
    <div>
      <EmployeesHeader title="عقود تشغيل مؤقتة" desc="يمكنك استعراض بيانات الموظفين والبحث المتقدم عبر الفلاتر التخصصية"/>
      <EmployeesFilters/>       
      <EmployeesTable />
    </div>
  )
}

export default TemporaryEmploymentContracts