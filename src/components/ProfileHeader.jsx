import React from "react";
import { Card } from "react-bootstrap";

const ProfileHeader = () => {
  return (
    <Card className="p-3 d-flex flex-row align-items-center shadow-sm">
      <img
        src="/images/employee-02.jpg"
        alt="الصورة الشخصية "
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          objectFit: "cover",
          marginLeft: "15px",}}/>
      <div>
        <h6 style={{ margin: 10, fontWeight: "bold" }}>
          علاء محمد أمين العشي
        </h6>
        <small className="" style={{ color: "#6c757d"}}>
موظف إداري - وزارة الإقتصاد الوطني الفلسطيني
        </small>
      </div>
    </Card>
  );
};

export default ProfileHeader;