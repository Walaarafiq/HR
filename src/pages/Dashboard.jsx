import React from 'react'
import DashboardCards from '../components/DashboardCards'
// import DonutChart from '../components/DonutChart'
import AttendanceChart from '../components/AttendanceChart'

import EmployeesByOfficeChart from '../components/EmployeesByOfficeChart'

function Dashboard() {
  return (
    <div>
        <DashboardCards/>
        {/* <DonutChart/> */}
       <div className='d-flex mt-3'>
         <div className="col-md-6">
            <AttendanceChart />
          </div>
          <div className="col-md-6">
            <EmployeesByOfficeChart />
          </div>
       </div>
    </div>
  )
}

export default Dashboard