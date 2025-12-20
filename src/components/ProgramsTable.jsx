import React, { useState } from "react";

function ProgramsTable({ projects, setProjects }) {
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleDelete = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const openViewModal = (project) => {
    setSelectedProject(project);
    setShowViewModal(true);
  };

  return (
    <div className="card mt-4">
      <div className="card-body">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-light">
            <tr style={{fontSize:'14px'}}>
              <th>م</th>
              <th>إسم المشروع</th>
              <th>مدة المشروع</th>
              <th>بداية المشروع</th>
              <th>نهاية المشروع</th>
              <th>الجهة الممولة</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj, index) => (
              <tr key={proj.id}>
                <td>{index + 1}</td>
                <td>{proj.name}</td>
                <td>{proj.interval}</td>
                <td>{proj.ProStart}</td>
                <td>{proj.ProFinished}</td>
                <td>{proj.Organize}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-danger me-2" onClick={() => handleDelete(emp.id)}>🗑</button>
                    <button className="btn btn-sm btn-outline-primary me-2">✏</button>
                    <button className="btn btn-sm btn-outline-warning me-2" onClick={() => { setSelectedEmployee(emp); setShowWizard(true); }}>👁</button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showViewModal && selectedProject && (
        <div style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000
        }}>
          <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", width: "500px" }}>
            <h5>بيانات المشروع</h5>
            <p><strong>اسم المشروع:</strong> {selectedProject.name}</p>
            <p><strong>مدة المشروع:</strong> {selectedProject.interval}</p>
            <p><strong>بداية المشروع:</strong> {selectedProject.ProStart}</p>
            <p><strong>نهاية المشروع:</strong> {selectedProject.ProFinished}</p>
            <p><strong>الجهة الممولة:</strong> {selectedProject.Organize}</p>
            <button className="btn btn-dark" onClick={() => setShowViewModal(false)}>إغلاق</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProgramsTable;
