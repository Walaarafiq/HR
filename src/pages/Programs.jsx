import React, { useState } from 'react';
import ProgramHeader from '../components/ProgramHeader';
import ProgramsTable from '../components/ProgramsTable';

function Programs() {
  const [projects, setProjects] = useState([]);

  const handleAddProject = (newProject) => {
    setProjects(prev => [
      ...prev,
      { ...newProject, id: prev.length ? prev[prev.length - 1].id + 1 : 1 }
    ]);
  };

  return (
    <div>
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
