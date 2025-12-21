import { useState } from "react";
import GovermentsHeader from "../components/GovermentsHeader";
import GovermentsTable from "../components/GovermentsTable";

function Goverments() {

  const [employees, setEmployees] = useState([
    { id: 1, GovName: "وزارة الإقتصاد", EmpNum: "974334252" },
    { id: 2, GovName: "وزارة الصحة", EmpNum: "974334252" },
  ]);

  const handleAddItem = (item) => {
    setEmployees(prev => [
      ...prev,
      {
        id: Date.now(),
        GovName: item.name,
        EmpNum: item.secondValue || "-"
      }
    ]);
  };

  return (
    <>
      <GovermentsHeader
        title="الجهات الحكومية"
        desc="إدارة الجهات الحكومية"
        onAddItem={handleAddItem}
      />

      <GovermentsTable employees={employees} />
    </>
  );
}

export default Goverments;
