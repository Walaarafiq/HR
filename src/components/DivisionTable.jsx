import React, { useState } from "react";
import EditEmpWizard from "../components/EditEmpWizard";
import JobScale from "../pages/JobScale";

function DivisionTable() {
  const initialEmployees = [
    { id: 1, GovName: "ادخال بيانات الاستيراد", EmpNum: "1 موظف"},
    { id: 2, GovName: "استلام العينات", EmpNum: "10 موظفين"},
    { id: 3, GovName: "اعداد الموزانة وجمع المعلومات", EmpNum: "3 موظفين"},
];

  const [employees, setEmployees] = useState(initialEmployees);
  const [showWizard, setShowWizard] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(employees.length / itemsPerPage);
  const currentData = employees.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePrev = () => { if(currentPage>1) setCurrentPage(currentPage-1); };
  const handleNext = () => { if(currentPage<totalPages) setCurrentPage(currentPage+1); };
  const handleDelete = (empId) => {
    const emp = employees.find(e => e.id === empId);
    if(window.confirm(`هل أنت متأكد أنك تريد حذف الموظف "${emp.GovName}"؟`)) {
      setEmployees(prev => prev.filter(e => e.id !== empId));
    }
  };

  

  return (
    <>
      <div className="card mt-4" style={{overflow:'visible'}}>
        <div className="card-body">
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light" style={{ fontSize: "14px" }}>
              <tr>
                <th>م</th>
                <th>القيمة</th>
                <th>عدد الموظفين</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "13px" }}>
              {currentData.map((emp, index) => (
                <tr key={emp.id}>
                  <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td>{emp.GovName}</td>
                  <td>{emp.EmpNum}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-danger me-2" onClick={() => handleDelete(emp.id)}>🗑</button>
                    <button className="btn btn-sm btn-outline-primary me-2">✏</button>
                    {/* <button className="btn btn-sm btn-outline-warning me-2" onClick={() => { setSelectedEmployee(emp); setShowWizard(true); }}>👁</button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <button className="btn btn-outline-dark me-1" onClick={handlePrev} disabled={currentPage === 1}>&lt; السابق</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button key={page} className={`btn me-1 ${page === currentPage ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setCurrentPage(page)}>{page}</button>
            ))}
            <button className="btn btn-outline-dark me-1" onClick={handleNext} disabled={currentPage === totalPages}>التالي &gt;</button>
          </div>
        </div>
      </div>

      {/* المودال */}
      {showWizard && (
        <div className="modal-backdrop" style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
          justifyContent: "center", alignItems: "center", zIndex: 1000
        }}>
          <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", maxWidth: "90%", maxHeight: "100%", overflowY: "auto" }}>
            <EditEmpWizard employee={selectedEmployee} />
            <button className="btn btn-danger mt-2" onClick={() => setShowWizard(false)}>إغلاق</button>
          </div>
        </div>
      )}
    </>
  );
}

export default DivisionTable;
