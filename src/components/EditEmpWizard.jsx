import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const steps = [
  {
    title: <div className="headerOfCard">
        <p>بيانات الموظف الأساسية</p>
    </div>,
    content: (
      <div className="row g-3 cardValue" style={{textAlign:'right'}}>
        {[
          { label: "الإسم كامل", value: "أحمد محمد منصور" },
          { label: "رقم الهوية", value: "4051485674" },
          { label: "الرقم الوظيفي", value: "245126" },
          { label: "رقم الجوال الأساسي", value: "-" },
          { label: "رقم الجوال البديل", value: "-" },
          { label: "تاريخ الميلاد", value: "29/06/1999" },
          { label: "الجنس", value: "-" },
          { label: "الحالة الإجتماعية", value: "-" },
          { label: "المحافظة", value: "الشمال" },
          { label: "المدينة", value: "غزة" },
          { label: "عنوان السكن", value: "-" },
        ].map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-3">
            <Card className="shadow-sm h-100 cardEmp">
              <Card.Header className="cardHeader">{item.label}</Card.Header>
              <Card.Body className="d-flex align-items-center " style={{ minHeight: "60px",textAlign:'right',color:'grey' }}>
                {item.value}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: <div className="headerOfCard">
       البيانات التنظيمية
    </div>
,
    content: (
     <div className="row g-3 cardValue" style={{textAlign:'right'}}>
        {[
          { label: "الوزارة", value: "وزارة الإقتصاد" },
          { label: "الإدارة العامة", value: "الادارة العامة للمكاتب الفرعية والمعابر" },
          { label: "الدائرة", value: "245126" },
          { label: "القسم", value: "-" },
          { label: "الشعبة", value: "-" },
          { label: "الوحدة", value: "29/06/1999" },
          { label: "المكتب الفرعي", value: "مكتب خانيونيس" },
          { label: "المعبر", value: "-" },
        ].map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-3">
            <Card className="shadow-sm h-100 cardEmp">
              <Card.Header className="cardHeader">{item.label}</Card.Header>
              <Card.Body className="d-flex align-items-center " style={{ minHeight: "60px",textAlign:'right',color:'grey' }}>
                {item.value}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    ),
  },
  {
    title:<div className="headerOfCard">
      البيانات الوظيفية
    </div>,
    content: (
      <div className="row g-3 cardValue" style={{textAlign:'right'}}>
        {[
          { label: "المسمى الوظيفي", value: "رئيس قسم التراخيص الصناعية" },
          { label: "الحالة الوظيفية", value: "على رأس عمله" },
          { label: "نوع التوظيف", value: "رسمي" },
          { label: "البرنامج", value: "موظفين غير موزعين على برنامج" },
          { label: "العقد", value: "-" },
          { label: "تاريخ التعيين", value: "29/06/1999" },
        ].map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-3">
            <Card className="shadow-sm h-100 cardEmp">
              <Card.Header className="cardHeader">{item.label}</Card.Header>
              <Card.Body className="d-flex align-items-center " style={{ minHeight: "60px",textAlign:'right',color:'grey' }}>
                {item.value}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: <div className="headerOfCard">البيانات المهنية والتصنيفية</div>
  ,
    content: (
      <div className="row g-3 cardValue" style={{textAlign:'right'}}>
        {[
          { label: "التصنيف", value: "زراعة" },
          { label: "الفئة", value: "الفئة الثانية-6" },
          { label: "الدرجة الوظيفية", value: "2" },
          { label: "السلم الوظيفي", value: "-" },
          { label: "الأقدمية", value: "-" },
          { label: "المؤهل العلمي", value: "29/06/1999" },
          { label: "خدمة فعلية", value: "مكتب خانيونيس" },
          { label: "الترقيات", value: "-" },
          { label: "لأغراض الراتب", value: "-" },
          { label: "التجزئة", value: "1000" },
          { label: "سنة التقاعد المتوقعة", value: "2023" },
        ].map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-3">
            <Card className="shadow-sm h-100 cardEmp">
              <Card.Header className="cardHeader">{item.label}</Card.Header>
              <Card.Body className="d-flex align-items-center " style={{ minHeight: "60px",textAlign:'right',color:'grey' }}>
                {item.value}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>         
    ),
  },
  {
    title: <div className="headerOfCard">البيانات المالية</div>,
    content: (
      <div className="row g-3 cardValue" style={{textAlign:'right'}}>
        {[
          { label: "البنك", value: "بنك القاهرة عمان" },
          { label: "رقم الحساب البنكي", value: "660001924192" },
          { label: "الأيبان", value: "PS16CAAB081500000660001924192" },
        ].map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4">
            <Card className="shadow-sm h-100 cardEmp">
              <Card.Header className="cardHeader">{item.label}</Card.Header>
              <Card.Body className="d-flex align-items-center " style={{ minHeight: "60px",textAlign:'right',color:'grey' }}>
                {item.value}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: <div className="headerOfCard">عائلة الموظف</div>,
    content: (
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <label className="form-label">أبناء الموظف:</label>
           <p className="mt-4" style={{color:'grey'}}>لا توجد بيانات</p>
          {/* <input type="number" placeholder="أدخل عدد الأبناء" className="form-control" /> */}
        </div>
        <div className="col-12 col-md-6" style={{borderRight:"1px solid grey"}}>
          <label className="form-label">الأزواج/الزوجات:</label>
          <p className="mt-4" style={{color:'grey'}}>لا توجد بيانات</p>
          {/* <select className="form-select">
            <option>أعزب</option>
            <option>متزوج</option>
          </select> */}
        </div>
      </div>
    ),
  },
];

function EditEmpWizard() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="container my-5" style={{height:"550px"}}>
      <h4 className="employeeName">علاء عبدالله سليمان قديح</h4>
      <p className="employeeRole">رئيس قسم التراخيص الصناعية</p>
      {/* العناوين */}
      <div className="d-flex flex-wrap overflow-auto mb-4">
        {steps.map((step, index) => (
          <div
            key={index}
            onClick={() => setActiveStep(index)}
            className={`px-3 py-2 me-2 mb-2 border-bottom ${activeStep === index ? "border-primary fw-bold text-primary" : "border-transparent text-secondary"}`}
            style={{ cursor: "pointer", minWidth: "200px", textAlign: "center" }}
          >
            {step.title}
          </div>
        ))}
      </div>

      {/* المحتوى */}
      <div className="p-4 border rounded shadow-sm">{steps[activeStep].content}</div>

      {/* أزرار التنقل */}
      {/* <div className="d-flex justify-content-between mt-4">
        <button
          onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
          disabled={activeStep === 0}
          className="btn btn-outline-secondary"
        >
          العودة
        </button>

        <button
          onClick={() => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))}
          disabled={activeStep === steps.length - 1}
          className="btn btn-primary"
        >
          التالي
        </button>
      </div> */}
    </div>
  );
}

export default EditEmpWizard;
