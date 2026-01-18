import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import {
  FaUser,
  FaUsers,
  FaHeart,
  FaGraduationCap
} from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EmpDetailsCards = () => {
  const navigate = useNavigate();

  return (
    <Row className="g-4" style={{ paddingBottom: "50px", marginTop: "15px" }}>
      <div className="section-divider"></div>

      {/* بيانات الموظف */}
      <Col md={3}>
        <h6 className="section-title">
          <FaUser className="section-icon" /> بيانات الموظف
        </h6>
        <h6 className="section-title1 text-center mt-4">بيانات شخصية</h6>

        <Card className="profile-card text-center">
          <Card.Body>
            <p><strong>الاسم : <br /></strong>علاء محمد أمين العشي</p>
            <p><strong>الرقم الوظيفي : <br /></strong>405126</p>
            <p><strong>رقم الهوية : <br /></strong>123456789</p>
            <p><strong>القسم : <br /></strong>الإدارة المالية</p>
            <p><strong>المسمى الوظيفي : <br /></strong>موظف إداري</p>
          </Card.Body>
        </Card>
      </Col>

      {/* بيانات العائلة */}
      <Col md={5}>
        <h6 className="section-title d-flex justify-content-center">
          <FaUsers className="section-icon" /> بيانات العائلة
        </h6>

        <Row>
          {/* الزوجة */}
          <Col md={6}>
            <h6 className="section-title1 text-center mt-4">الزوجة</h6>

            <Card className="profile-card">
              <Card.Body className="d-flex flex-column">
                <div>
                  <p><strong>الإسم : <br /></strong>سمر محمد الشيخ خليل</p>
                  <p><strong>الحالة : <br /></strong>زوجة</p>
                  <p><strong>رقم الهوية : <br /></strong>405142414</p>
                </div>

                <button
                  className="btn-gradient-teal mt-auto"
                  onClick={() => navigate("/add-wife")}
                >
                  <FaEdit style={{ marginLeft: "6px" }} />
                  إضافة زوج/ة
                </button>
              </Card.Body>
            </Card>
          </Col>

          {/* الأبناء */}
          <Col md={6}>
            <h6 className="section-title1 text-center mt-4">الأبناء</h6>

            <Card className="profile-card">
              <Card.Body className="d-flex flex-column">
                <div>
                  <p><strong>الإسم : </strong>شهد علاء محمد العشي</p>
                  <p><strong>العمر : </strong>8 سنوات</p>
                  <p><strong>الحالة الدراسية : </strong>طالب</p>
                  <div className="section-divider"></div>
                  <p><strong>الإسم : </strong>محمد علاء محمد العشي</p>
                  <p><strong>العمر : </strong>12 سنوات</p>
                  <p><strong>الحالة الدراسية : </strong>طالب</p>
                </div>

                <button
                  className="btn-gradient-teal mt-auto"
                  onClick={() => navigate("/add-children")}
                >
                  <FaEdit style={{ marginLeft: "6px" }} />
                  إضافة إبن/ة
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>

      {/* المعالون */}
      <Col md={2}>
        <h6 className="section-title">
          <FaHeart className="section-icon" /> المعالون
        </h6>
        <h6 className="section-title1 text-center mt-4">المعالون</h6>

        <Card className="profile-card">
          <Card.Body className="d-flex flex-column">
            <div>
              <p><strong>الإسم : <br /></strong>سميرة العشي</p>
              <p><strong>صلة القرابة : <br /></strong>أم</p>
              <p><strong>سبب الإعالة : <br /></strong>لا تعمل</p>
            </div>

            <button
              className="btn-gradient-teal mt-auto"
              onClick={() => navigate("/add-heart")}>
              <FaEdit style={{ marginLeft: "6px" }} />
              إضافة معال
            </button>
          </Card.Body>
        </Card>
      </Col>

      {/* الشهادات */}
      <Col md={2}>
        <h6 className="section-title">
          <FaGraduationCap className="section-icon" /> الشهادات
        </h6>
        <h6 className="section-title1 text-center mt-4">المؤهلات العلمية</h6>

        <Card className="profile-card">
          <Card.Body className="d-flex flex-column">
            <div>
              <p><strong>بكالوريس : <br /></strong>إدارة اعمال</p>
              <p><strong>الجهة : <br /></strong>جامعة فلسطين</p>
              <p><strong>سنة التخرج : <br /></strong>1999</p>
              <p><strong>أخرى : <br /></strong>دبلوم محاسبة</p>
              <p><strong>الجهة : <br /></strong>جامعة القدس</p>
            </div>

           <button
              className="btn-gradient-teal mt-auto"
              onClick={() => navigate("/add-edu-certificate")}>
              <FaEdit style={{ marginLeft: "6px" }} />
              إضافة شهادة
            </button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default EmpDetailsCards;