import React from 'react';
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { FaPaperclip } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUser, FaUserTie } from "react-icons/fa";

function MaritalStatus() {
  const [works, setWorks] = useState(false);
  const childrenData = [
    {
      name: "شهد علاء العشي",
      birthDate: "2016-05-12",
      gender: "أنثى",
    },
    {
      name: "محمد علاء العشي",
      birthDate: "2012-09-20",
      gender: "ذكر",
    },
  ];
  return (
    <div>
      <Row className="g-4 mt-3">
           <Col md={12}>
             <Card className="p-4 shadow-sm h-100">            
        <h5 className="mb-3 fw-bold text-center">
          <FaHeart style={{ marginLeft: "8px", color: "#016A74" }} />الحالة الإجتماعية للموظف 
        </h5>
     
               <Form>
                 <Form.Group className="mb-3">
                   <Form.Label>الاسم كامل</Form.Label>
                   <Form.Control type="text" placeholder="أدخل الاسم " />
                 </Form.Group>
                 <Form.Group className="mb-3">
                   <Form.Label>رقم الهوية</Form.Label>
                   <Form.Control type="text" placeholder="أدخل رقم الهوية" />
                 </Form.Group>
                 <Form.Group className="mb-3">
                    <Form.Label>تاريخ الميلاد</Form.Label>
                    <Form.Control
                        type="date"/>
                    </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>الجنس</Form.Label>
                    <Form.Select>
                        <option value="">اختر</option>
                        <option value="">ذكر</option>
                        <option value="">أنثى</option>
                    </Form.Select>
                    </Form.Group>
                 <Form.Group className="mb-3">
                   <Form.Label>مكان السكن</Form.Label>
                   <Form.Control type="text" placeholder="أدخل مكان السكن" />
                 </Form.Group>
                </Form>

               <br>
               </br>
               <h5 className="mb-3 fw-bold text-center">
                <FaUserTie style={{ marginLeft: "8px", color: "#016A74" }} />
                بيانات الزوج/ة</h5>
               <Form>
                 <Form.Group className="mb-3">
                   <Form.Label>الاسم كامل</Form.Label>
                   <Form.Control type="text" placeholder="أدخل الاسم " />
                 </Form.Group>
                 <Form.Group className="mb-3">
                   <Form.Label>رقم الهوية</Form.Label>
                   <Form.Control type="text" placeholder="أدخل رقم الهوية" />
                 </Form.Group>
                 <Form.Group className="mb-3">
                    <Form.Label>تاريخ الميلاد</Form.Label>
                    <Form.Control
                        type="date"/>
                    </Form.Group>
                   <Form.Group className="mb-3">
                        <Form.Label>حالة العمل</Form.Label>

                        <div className="d-flex gap-4 mt-2">
                            <Form.Check
                            type="checkbox"
                            label="تعمل"
                            />

                            <Form.Check
                            type="checkbox"
                            label="لا تعمل"
                            />
                        </div>
                        </Form.Group>
                    <br>
                    </br>
                     <h5 className="mb-3 fw-bold text-center">
                    <FaChild style={{ marginLeft: "8px", color: "#016A74" }} />
                    الأبناء
                  </h5>

                     <Table striped bordered hover responsive className="text-center">
                        <thead>
                            <tr>
                            <th>اسم الابن</th>
                            <th>تاريخ الميلاد</th>
                            <th>الجنس</th>
                            </tr>
                        </thead>
                        <tbody>
                            {childrenData.map((child, index) => (
                            <tr key={index}>
                                <td>{child.name}</td>
                                <td>{child.birthDate}</td>
                                <td>{child.gender}</td>
                            </tr>
                            ))}
                        </tbody>
                         
                        </Table>
                        <Button variant="success" className="sendData ">إضافة إبن/ة</Button>
<br></br>
<Row className="mb-4">
         <h5 className="mb-3 fw-bold text-center">المرفقات</h5>

      <Col md={4}>
        <Card className="p-3 text-center shadow-sm">
          <FaPaperclip size={28} className="mb-2 text-secondary" />
          <h6>شهادة الميلاد</h6>
          <Form.Control type="file" />
        </Card>
      </Col>

      <Col md={4}>
        <Card className="p-3 text-center shadow-sm">
          <FaPaperclip size={28} className="mb-2 text-secondary" />
          <h6>عقد الزواج</h6>
          <Form.Control type="file" />
        </Card>
      </Col>

      <Col md={4}>
        <Card className="p-3 text-center shadow-sm">
          <FaPaperclip size={28} className="mb-2 text-secondary" />
          <h6>شهادة الوفاة</h6>
          <Form.Control type="file" />
        </Card>
      </Col>
    </Row>

                 <Button variant="success" className="sendData ">حفظ التغييرات</Button>
                 <Button variant="secondary" className=" mx-2">إلغاء </Button>
               </Form>
             </Card>
           </Col>
     
           {/* <Col md={6}>
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
           </Col> */}
         </Row>   
    </div>
  )
}

export default MaritalStatus