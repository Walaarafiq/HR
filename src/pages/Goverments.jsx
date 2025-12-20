import React from 'react'
import EmployeesFilters from '../components/EmployeesFilters';
import GovermentsTable from '../components/GovermentsTable';
import GovermentsHeader from '../components/GovermentsHeader';
function Goverments() {
  return (
    <div>
      <GovermentsHeader title="الوزارات" desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."/>
      <EmployeesFilters/>       
      <GovermentsTable />
    </div>
  )
}

export default Goverments;
