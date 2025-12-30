import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const steps = [
{
  title: (
    <div className="headerOfCard1">
      <p>بيانات الموظف الأساسية</p>
    </div>
  ),
  content: (
    <div className="row g-3 cardValue1" style={{ textAlign: "right" }}>
        <p>تحديد موقع الموظف داخل المستوى الإداري</p>
      {[
        { label: "الإسم الأول", type: "text" },
        { label: "إسم الأب", type: "text" },
        { label: "رقم الهوية", type: "number" },
        { label: "الرقم الوظيفي", type: "number" },
        { label: "تاريخ التعيين", type: "date" },
        {
          label: "الجنس",
          type: "select",
          options: ["رسمي", "عقد"]
        },
        {
          label: "الحالة الإجتماعية",
          type: "select",
          options: ["متزوج", "منفصل"]
        },
        { label: "رقم الجوال", type: "number" },
        { label: "رقم الجوال البديل", type: "number" },
        { label: "تاريخ الميلاد", type: "date" },
         {
          label: "المحافظة",
          type: "select",
          options: ["متزوج", "منفصل"]
        },
         {
          label: "المدينة",
          type: "select",
          options: ["متزوج", "منفصل"]
        },
         { label: "عنوان السكن بالتفصيل", type: "text" },
      ].map((item, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-3">
          <div className="h-100 cardEmp1">
            <div className="cardHeader1">{item.label}</div>

            <div
              className="d-flex align-items-center"
              style={{ minHeight: "50px" }}
            >
              {item.type === "select" ? (
                <select className="inputEmpInfo">
                  <option value="">اختر</option>
                  {item.options.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={item.type}
                  className="inputEmpInfo"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
},
{
  title: (
    <div className="headerOfCard1">
      <p>البيانات التنظيمية</p>
    </div>
  ),
  content: (
    <div className="row g-3 cardValue1" style={{ textAlign: "right" }}>
        <p>تحديد موقع الموظف داخل المستوى الإداري</p>
      {[
        {
          label: "الوزارة",
          type: "select",
          options: ["رسمي", "عقد"]
        },
        {
          label: "الإدارة العامة",
          type: "select",
          options: ["متزوج", "منفصل"]
        },
         {
          label: "الوحدة",
          type: "select",
          options: ["متزوج", "منفصل"]
        }
    ,
     {
          label: "المعبر",
          type: "select",
          options: ["متزوج", "منفصل"]
        },
         {
          label: "الدائرة",
          type: "select",
          options: ["متزوج", "منفصل"]
        },
         {
          label: "القسم",
          type: "select",
          options: ["متزوج", "منفصل"]
        },
         {
          label: "الشعبة",
          type: "select",
          options: ["متزوج", "منفصل"]
        },
         {
          label: "مكان العمل",
          type: "select",
          options: ["متزوج", "منفصل"]
        },
      ].map((item, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-3">
          <div className="h-100 cardEmp1">
            <div className="cardHeader1">{item.label}</div>

            <div
              className="d-flex align-items-center"
              style={{ minHeight: "50px" }}
            >
              {item.type === "select" ? (
                <select className="inputEmpInfo">
                  <option value="">اختر</option>
                  {item.options.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={item.type}
                  className="inputEmpInfo"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
},
 {
  title: (
    <div className="headerOfCard1">
      <p>البيانات الوظيفية</p>
    </div>
  ),
  content: (
    <div className="row g-3 cardValue1" style={{ textAlign: "right" }}>
        <p>تحديد طبيعة الوظيفة ومسماها ومستواها الإداري</p>
      {[
        {
          label: "المسمى الوظيفي",
          type: "select",
          options: ["رسمي", "عقد"]
        },
        {
          label: "الحالة الوظيفية",
          type: "select",
          options: ["متزوج", "منفصل"]
        },
         {
          label: "البرنامج",
          type: "select",
          options: ["متزوج", "منفصل"]
        }
    ,
     {
          label: "سلم الرواتب",
          type: "select",
          options: ["متزوج", "منفصل"]
        },
      ].map((item, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-3">
          <div className="h-100 cardEmp1">
            <div className="cardHeader1">{item.label}</div>

            <div
              className="d-flex align-items-center"
              style={{ minHeight: "50px" }}
            >
              {item.type === "select" ? (
                <select className="inputEmpInfo">
                  <option value="">اختر</option>
                  {item.options.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={item.type}
                  className="inputEmpInfo"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
},
  {
  title: (
    <div className="headerOfCard1">
      <p>البيانات المهنية</p>
    </div>
  ),
  content: (
    <div>
      <div className="row g-3 cardValue1" style={{ textAlign: "right" }}>
        <p>تحديد الفئة والدرجة والأقدمية الوظيفية</p>
      {[
        {
          label: "التصنيف",
          type: "select",
          options: ["رسمي", "عقد"]
        },
        {
          label: "الفئة",
          type: "select",
          options: ["متزوج", "منفصل"]
        },
         {
          label: "الدرجة الوظيفية",
          type: "select",
          options: ["متزوج", "منفصل"]
        }
    ,
     {
          label: "الأقدمية",
          type: "select",
          options: ["متزوج", "منفصل"]
        },
      ].map((item, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-3">
          <div className="h-100 cardEmp1">
            <div className="cardHeader1">{item.label}</div>

            <div
              className="d-flex align-items-center"
              style={{ minHeight: "50px" }}
            >
              {item.type === "select" ? (
                <select className="inputEmpInfo">
                  <option value="">اختر</option>
                  {item.options.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={item.type}
                  className="inputEmpInfo"
                />
              )}
            </div>
            <br></br>
          </div>
        </div>
        
      ))}
    </div>
    <div className="row g-3 cardValue1" style={{ textAlign: "right" }}>
        <p>معلومات الخدمة الفعلية والشهادات والترقيات</p>
      {[
        {
          label: "المؤهل العلمي",
          type: "select",
          options: ["رسمي", "عقد"]
        },
        {
          label: "خدمة فعلية",
          type: "select",
          options: ["متزوج", "منفصل"]
        },
         {
          label: "ترقية",
          type: "select",
          options: ["متزوج", "منفصل"]
        }
    ,
     {
          label: "لأغراض الراتب",
          type: "select",
          options: ["متزوج", "منفصل"]
        },
      ].map((item, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-3">
          <div className="h-100 cardEmp1">
            <div className="cardHeader1">{item.label}</div>

            <div
              className="d-flex align-items-center"
              style={{ minHeight: "50px" }}
            >
              {item.type === "select" ? (
                <select className="inputEmpInfo">
                  <option value="">اختر</option>
                  {item.options.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={item.type}
                  className="inputEmpInfo"
                />
              )}
            </div>
            <br></br>
          </div>
        </div>
      ))}
    </div>
    <div className="row g-3 cardValue1" style={{ textAlign: "right" }}>
        <p>معلومات إدارية مساعدة أو خاصة بالحالة الوظيفية</p>
      {[
         {
          label: "التجزئة",
          type: "select",
          options: ["متزوج", "منفصل"]
        }
    ,
      ].map((item, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-3">
          <div className="h-100 cardEmp1">
            <div className="cardHeader1">{item.label}</div>

            <div
              className="d-flex align-items-center"
              style={{ minHeight: "50px" }}
            >
              {item.type === "select" ? (
                <select className="inputEmpInfo">
                  <option value="">اختر</option>
                  {item.options.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={item.type}
                  className="inputEmpInfo"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  ),
},
  {
  title: (
    <div className="headerOfCard1">
      <p>البيانات المالية</p>
    </div>
  ),
  content: (
    <div className="row g-3 cardValue1" style={{ textAlign: "right" }}>
        <p>إدخال بيانات الموظف البنكية</p>
      {[
        {
          label: "إسم البنك",
          type: "select",
          options: ["رسمي", "عقد"]
        },
          { label: "رقم الحساب", type: "number" },
    ,
       { label: "الأيبان", type: "number" },,
      ].map((item, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-3">
          <div className="h-100 cardEmp1">
            <div className="cardHeader1">{item.label}</div>

            <div
              className="d-flex align-items-center"
              style={{ minHeight: "50px" }}
            >
              {item.type === "select" ? (
                <select className="inputEmpInfo">
                  <option value="">اختر</option>
                  {item.options.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={item.type}
                  className="inputEmpInfo"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
},
  {
  title: (
    <div className="headerOfCard1">
      <p>مراجعة وإنهاء</p>
    </div>
  ),
  content: (
    <div className="row g-3 cardValue1" style={{ textAlign: "right" }}>
        <p>الإنهاء والمراجعة</p>
        <div className="backTextColor">
          <p>يرجى مراجعة جميع البيانات قبل الإرسال.</p>
        <p>تأكد من صحة المعلومات المدخلة في جميع الخطوات السابقة.</p>
        </div>
      {/* {[
        { label: "الإسم الأول", type: "text" },
        { label: "إسم الأب", type: "text" },
        { label: "رقم الهوية", type: "number" },
        { label: "الرقم الوظيفي", type: "number" },
        { label: "تاريخ التعيين", type: "date" },
        {
          label: "الجنس",
          type: "select",
          options: ["رسمي", "عقد"]
        },
        {
          label: "الحالة الإجتماعية",
          type: "select",
          options: ["متزوج", "منفصل"]
        },
        { label: "رقم الجوال", type: "number" },
        { label: "رقم الجوال البديل", type: "number" },
        { label: "تاريخ الميلاد", type: "date" },
         {
          label: "المحافظة",
          type: "select",
          options: ["متزوج", "منفصل"]
        },
         {
          label: "المدينة",
          type: "select",
          options: ["متزوج", "منفصل"]
        },
         { label: "عنوان السكن بالتفصيل", type: "text" },
      ].map((item, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-3">
          <div className="h-100 cardEmp1">
            <div className="cardHeader1">{item.label}</div>

            <div
              className="d-flex align-items-center"
              style={{ minHeight: "50px" }}
            >
              {item.type === "select" ? (
                <select className="inputEmpInfo">
                  <option value="">اختر</option>
                  {item.options.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={item.type}
                  className="inputEmpInfo"
                />
              )}
            </div>
          </div>
        </div>
      ))} */}
    </div>
  ),
},
];

function AddEmployeesforms() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="container my-5" style={{height:"650px", width:"100%"}}>
      <h4 className="employeeName" style={{marginBottom:"20px"}}>تسجيل موظف جديد</h4>
      {/* <p className="employeeRole">رئيس قسم التراخيص الصناعية</p> */}
      {/* العناوين */}
      <div className="d-flex flex-wrap overflow-auto mb-4">
        {steps.map((step, index) => (
          <div
            key={index}
            onClick={() => setActiveStep(index)}
            className={`px-3 py-1 me-3 mb-2 border-bottom ${activeStep === index ? "border-primary fw-bold text-primary" : "border-transparent text-secondary"}`}
            style={{ cursor: "pointer", minWidth: "100px", textAlign: "center"}}>
            {step.title}
          </div>
        ))}
      </div>

      {/* المحتوى */}
      <div className="p-4 border rounded shadow-sm">{steps[activeStep].content}</div>

      <div className="d-flex justify-content-between mt-4">
        <button
          onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
          disabled={activeStep === 0}
          className="btn btn-outline-secondary">
          العودة
        </button>

        <button
          onClick={() => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))}
          disabled={activeStep === steps.length - 1}
          className="btn btn-primary">
          التالي
        </button>
      </div>
    </div>
  );
}

export default AddEmployeesforms;
