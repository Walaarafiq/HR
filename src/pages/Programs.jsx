import React, { useState, useEffect } from "react";
import ProgramHeader from "../components/ProgramHeader";
import ProgramsTable from "../components/ProgramsTable";
import { API_BASE_URL } from "../config/api";

function Programs() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_BASE_URL}/temp-contract-projects`, {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        });
        const data = await res.json();
        setProjects(data.data || []);
      } catch (err) {
        console.error("خطأ عند جلب المشاريع:", err);
      }
    };
    fetchProjects();
  }, []);

  const handleAddProject = (newProject) => {
    setProjects(prev => [
      ...prev,
      { ...newProject, id: prev.length ? prev[prev.length - 1].id + 1 : 1 }
    ]);
  };

  return (
    <div className="container my-4">
      <ProgramHeader
        title="برامج التشغيل المؤقت"
        desc="إدارة المشاريع التي يتم من خلالها تشغيل موظفي العقود المؤقتة."
        onAddProject={handleAddProject}
      />
      <ProgramsTable projects={projects} setProjects={setProjects} />
    </div>
  );
}

export default Programs;
