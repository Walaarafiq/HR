import React from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import { FaUserTie } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

const Salary = () => {
  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4 fw-bold d-flex justify-content-center align-items-center gap-2">
        <FaWallet style={{color:"#016a74"}} />
        قسيمة الراتب
        </h3>
      <Row className="mb-4 justify-content-center">
        <Col md={3}>
          <Form.Group>
            <Form.Label>&nbsp;</Form.Label>
            <div>
                <Button variant="primary" className="w-100 sendData">
                عرض
                </Button>
            </div>
            </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group>
            <Form.Label>السنة / الشهر</Form.Label>
            <Form.Control type="month" />
          </Form.Group>
        </Col>
      </Row>

{/* كارد الموظف */}
     <Row className="justify-content-center">
  <Col md={8}>
    <Card
      style={{
        borderRadius: "18px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Card.Body style={{ padding: "30px" }}>

        <h5
          className="mb-4 fw-bold text-center d-flex justify-content-center align-items-center gap-2"
          style={{ color: "#016a74" }}
        >
          <FaUserTie size={20} />
          البيانات الشخصية للموظف
        </h5>

        <Row className="mb-3">
          <Col md={6}>
            <strong>الاسم الكامل:</strong> محمد أحمد علي
          </Col>
          <Col md={6}>
            <strong>الرقم الوظيفي:</strong> 10234
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <strong>المسمى الوظيفي:</strong> موظف إداري
          </Col>
          <Col md={6}>
            <strong>القسم:</strong> الموارد البشرية
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <strong>الراتب الأساسي:</strong> 3500 شيكل
          </Col>
          <Col md={6}>
            <strong>البدلات:</strong> 1000 شيكل
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <strong>الخصومات:</strong> 1200 شيكل
          </Col>
          <Col md={6}>
            <strong>صافي الراتب:</strong> 5800 شيكل
          </Col>
        </Row>

        <div className="d-flex gap-3 justify-content-end mt-4">
         <Button className="sendData"
            onClick={() => {
                const link = document.createElement("a");
                link.href = "/images/salaryWalaa.pdf";
                link.download = "قسيمة_الراتب.pdf";
                link.click();
            }}
            >
            تحميل قسيمة الراتب
            </Button>


          <Button variant="outline-secondary">
            طباعة
          </Button>
        </div>

      </Card.Body>
    </Card>
  </Col>
</Row>


    </div>
  );
};

export default Salary;