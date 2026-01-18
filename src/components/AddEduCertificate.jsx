import { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

const AddEduCertificate = ({ onSubmit, onCancel }) => {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [marriageDate, setMarriageDate] = useState("");
  const [marriageStatus, setMarriageStatus] = useState("");
  const [phone, setPhone] = useState("");
  const [works, setWorks] = useState(false);
  const [marriageContract, setMarriageContract] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const spouseData = {
      fullName,
      nationalId,
      marriageDate,
      marriageStatus,
      phone,
      works,
      marriageContract,
    };
    if (onSubmit) onSubmit(spouseData);
  };

  return (
    <Card 
      className="p-4 shadow-sm"
      style={{ borderRadius: "15px", background: "#fff" }}
    >
      <h5 className="mb-4 text-center" style={{ fontWeight: 600, color: "#00695c" }}>
        إضافة شهادة تعليمية 
      </h5>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Label>إسم الشهادة</Form.Label>
            <Form.Control
              type="text"
              placeholder="أدخل الشهادة الحاصل عليها "
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              style={{ borderRadius: "10px" }}
            />
          </Col>
         
          <Col>
            <Form.Label>التخصص</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
              required
              style={{ borderRadius: "10px" }}
            />
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col>
            <Form.Label>نوع الشهادة</Form.Label>
            <Form.Select
              value={marriageStatus}
              onChange={(e) => setMarriageStatus(e.target.value)}
              required
              style={{ borderRadius: "10px" }}>
              <option value="">اختر</option>
              <option value="متزوجة">دبلوم</option>
              <option value="مطلقة">بكالوريس</option>
              <option value="أرملة">دكتوراة</option>
              <option value="أرملة">بروفسوراة</option>
            </Form.Select>
          </Col>

          <Col  md={3}>
            <Form.Label>سنة التخرج</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ borderRadius: "10px" }}
            />
          </Col>
          <Col md={3}>
            <Form.Label>الدولة</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ borderRadius: "10px" }}
            />
          </Col>
          <Col md={6}>
            <Form.Label>الملاحظات</Form.Label>
            <Form.Control
              type="text"
              placeholder="أدخل ملاحظاتك "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ borderRadius: "10px" }}
            />
          </Col>
         
        </Row>

        <Form.Group className="mb-4">
          <Form.Label>مرفق لصورة الشهادة</Form.Label>
          <Form.Control
            type="file"
            accept=".pdf,.jpg,.png"
            onChange={(e) => setMarriageContract(e.target.files[0])}
          />
          {marriageContract && (
            <small className="text-muted mt-1 d-block">
              الملف المختار: {marriageContract.name}
            </small>
          )}
        </Form.Group>
        
        <div className="alertYellow">
            <p> البيانات المضافة ستكون في حالة "انتظار الموافقة" حتى يتم اعتمادها من قبل الإدارة.
            </p>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <Button 
          className="sendData"
            variant="success" 
            type="submit"
            style={{ borderRadius: "10px", fontWeight: "500", padding: "8px 25px" }}>
            إرسال البيانات
          </Button>
          <Button 
            variant="outline-secondary" 
            onClick={onCancel}
            style={{ borderRadius: "10px", fontWeight: "500", padding: "8px 25px" }}>
            إلغاء
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default AddEduCertificate;