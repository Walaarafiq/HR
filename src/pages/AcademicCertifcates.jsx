import React from 'react'
import AcademicCertifactesHeader from '../components/AcademicCertificatesHeader'
import AcademicCertifactesFilters from '../components/AcademicCertifcatesFilters'
import AcademicCertifcatesTables from '../components/AcademicCertificatesTables'

function AcademicCertifcates() {
  return (
    <div>
        <AcademicCertifactesHeader title="قاعدة بيانات الموظفين" desc="يمكنك استعراض بيانات الموظفين والبحث المتقدم عبر الفلاتر التخصصية"/>
        <AcademicCertifactesFilters/>
        <AcademicCertifcatesTables/>
    </div>
  )
}

export default AcademicCertifcates;