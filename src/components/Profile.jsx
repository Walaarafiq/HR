import React from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";

const Profile = () => {
  return (
    <Row className="g-4 mt-3">
      <Col md={6}>
        <Card className="p-4 shadow-sm h-100">
          <h6 className="mb-3 fw-bold">المعلومات الشخصية</h6>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>الاسم الأول</Form.Label>
              <Form.Control type="text" placeholder="أدخل الاسم " />
            </Form.Group>
             <Form.Group className="mb-3">
              <Form.Label>إسم العائلة</Form.Label>
              <Form.Control type="text" placeholder="العائلة" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>رقم الجوال</Form.Label>
              <Form.Control type="text" placeholder="أدخل رقم الجوال" />
            </Form.Group>
             <Form.Group className="mb-3">
              <Form.Label>البريد الإلكتروني</Form.Label>
              <Form.Control type="text" placeholder="xxxx@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>مكان السكن</Form.Label>
              <Form.Control type="text" placeholder="أدخل مكان السكن" />
            </Form.Group>

            <Button variant="success" className="sendData">حفظ التعديلات</Button>
          </Form>
        </Card>
      </Col>

      <Col md={6}>
        <Card className="p-4 shadow-sm h-100">
          <h6 className="mb-3 fw-bold">تغيير كلمة المرور</h6>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>كلمة المرور الحالية</Form.Label>
              <Form.Control type="password" placeholder="كلمة المرور الحالية" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>كلمة المرور الجديدة</Form.Label>
              <Form.Control type="password" placeholder="كلمة المرور الجديدة" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>تأكيد كلمة المرور</Form.Label>
              <Form.Control type="password" placeholder="تأكيد كلمة المرور" />
            </Form.Group>

            <Button variant="primary" className="sendData">تغيير كلمة المرور</Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Profile;