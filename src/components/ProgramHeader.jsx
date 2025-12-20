import { useState } from "react";
import { Link } from "react-router-dom";
import AddProgramsModal from "./AddProgramsModal";

function ProgramHeader({ title, desc, onAddProject }) {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      <div className="employees-header d-flex justify-content-between align-items-center">
        <div>
          <h4 style={{ fontSize: "18px", fontWeight: "bold" }}>{title}</h4>
          <p style={{ fontSize: "14px" }}>{desc}</p>
        </div>

        <div className="d-flex gap-2">
          <Link
            to="/temporary-contrast-employees"
            className="btn btn-outline-warning"
            style={{ fontSize: "13px" }}
          >
            الإنتقال إلى موظفي العقود المؤقتة
          </Link>

          <button
            className="btn btn-dark"
            style={{ fontSize: "13px" }}
            onClick={() => setShowAddModal(true)}
          >
            إضافة مشروع جديد
          </button>
        </div>
      </div>

      {showAddModal && (
        <AddProgramsModal
          onClose={() => setShowAddModal(false)}
          onSave={(project) => {
            onAddProject(project);
            setShowAddModal(false);
          }}
        />
      )}
    </>
  );
}

export default ProgramHeader;
