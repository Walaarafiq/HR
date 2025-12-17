import React from 'react'
import EmployeesHeader from '../components/EmployeesHeader';
// import EmployeesFilters from '../components/EmployeesFilters';
// import EmployeesTable from '../components/EmployeesTable';
import ProgramsFilter from '../components/ProgramsFilter';
import ProgramsTable from '../components/ProgramsTable';

function Programs() {
  return (
    <div>
      <EmployeesHeader title="برامج التشغيل المؤقت" desc="إدارة المشاريع التي يتم من خلالها تشغيل موظفي العقود المؤقتة."/>
      <ProgramsFilter/>
      <ProgramsTable />
    </div>
  )
}

export default Programs;