import { useState } from "react";
import type { ReactNode } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaSignOutAlt, FaBell, FaAngleDown } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

type SideBarProps = {
  children: ReactNode;
};

function SideBar({ children }: SideBarProps) {
  const [open, setOpen] = useState(true);

  const [openMain2, setOpenMain2] = useState(true);
  const [openMain3, setOpenMain3] = useState(true);
  const [openMain4, setOpenMain4] = useState(false);
  const [openMain5, setOpenMain5] = useState(false);
  const [openMain6, setOpenMain6] = useState(true);
  const [openMain7, setOpenMain7] = useState(true);
  const [openMain8, setOpenMain8] = useState(true);
  const [openMain9, setOpenMain9] = useState(false);

  return (
    <div className="main-layout">

      {/* ===== Sidebar ===== */}
      <div className={`sidebar ${open ? "open" : "closed"}`}>
        <Nav className="flex-column px-3 mt-4">

          <h5 className="text-center titleOfSide">
            وزارة الإقتصاد الوطني
          </h5>
          <hr />

          {/* الرئيسية */}
          <label className="LabelSide">الرئيسية</label>
          <ul className="ulMain">
            <li>لوحة التحكم</li>
          </ul>

          <hr />

          {/* شؤون الموظفين */}
          <label className="LabelSide">إدارة شؤون الموظفين</label>

          <ul>
            <li className="ulMain" onClick={() => setOpenMain2(!openMain2)}>
              شؤون الموظفين
              <FaAngleDown />
            </li>

            {!openMain2 && (
              <ul className="ulAuth">
                <li>
                  <NavLink to="/employees">جميع الموظفين</NavLink>
                </li>
                <li>
                  <NavLink to="/official-employees">الرسميين</NavLink>
                </li>
                <li>
                  <NavLink to="/other-government">
                    رسميين في حكومة أخرى
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dismissd-employees">المفصولين</NavLink>
                </li>
                <li>
                  <NavLink to="/older-employees">المتقاعدين</NavLink>
                </li>
              </ul>
            )}
          </ul>

          <ul>
            <li className="ulMain" onClick={() => setOpenMain3(!openMain3)}>
              عقود التشغيل
              <FaAngleDown />
            </li>

            {!openMain3 && (
              <ul className="ulAuth">
                <li>
                  <NavLink to="/permenant-contrast">عقود تشغيل دائمة</NavLink>
                </li>
                <li>
                  <NavLink to="/temporary-contrast">عقود تشغيل مؤقتة</NavLink>
                </li>
                <li>
                  <NavLink to="/suspended-contrast">عقود تشغيل متوقفة</NavLink>
                </li>
              </ul>
            )}
          </ul>

          <ul>
            <li className="ulMain" onClick={() => setOpenMain4(!openMain4)}>
              برامج التشغيل المؤقتة
              <FaAngleDown />
            </li>

            {!openMain4 && (
              <ul className="ulAuth">
                <li>
                  <NavLink to="/programs">كافة البرامج</NavLink>
                </li>
               <li>
                  <NavLink to="/temporary-contrast-employees">موظفي العقود المؤقتة</NavLink>
                </li>
              </ul>
            )}
          </ul>

          <ul>
            <li className="ulMain" onClick={() => setOpenMain5(!openMain5)}>
              الثوابت والقوائم
              <FaAngleDown />
            </li>

            {!openMain5 && (
              <ul className="ulAuth">
                <li>ثوابت النظام</li>
                <li>القوائم</li>
              </ul>
            )}
          </ul>

          <ul>
            <li className="ulMain" onClick={() => setOpenMain6(!openMain6)}>
              وثائق الموظفين
              <FaAngleDown />
            </li>

            {!openMain6 && (
              <ul className="ulAuth">
                <li>وثائق رسمية</li>
                <li>وثائق أخرى</li>
              </ul>
            )}
          </ul>

          <ul className="ulMain">
            <li>الحضور والانصراف</li>
          </ul>

          <ul className="ulMain">
            <li>التدريب والتطوير</li>
          </ul>

          <ul className="ulMain">
            <li>أرشيف الموظفين</li>
          </ul>

          <hr />

          {/* الشؤون المالية */}
          <label className="LabelSide">إدارة الشؤون المالية</label>

          <ul>
            <li className="ulMain" onClick={() => setOpenMain7(!openMain7)}>
              العلاوات والخصومات
              <FaAngleDown />
            </li>

            {!openMain7 && (
              <ul className="ulAuth">
                <li>العلاوات</li>
                <li>الخصومات</li>
              </ul>
            )}
          </ul>

          <ul>
            <li className="ulMain" onClick={() => setOpenMain8(!openMain8)}>
              قسائم الرواتب
              <FaAngleDown />
            </li>

            {!openMain8 && (
              <ul className="ulAuth">
                <li>جميع القسائم</li>
                <li>المعتمدة</li>
              </ul>
            )}
          </ul>

          <hr />

          {/* النظام */}
          <label className="LabelSide">إدارة النظام</label>

          <ul>
            <li className="ulMain" onClick={() => setOpenMain9(!openMain9)}>
              عمليات النظام
              <FaAngleDown />
            </li>

            {!openMain9 && (
              <ul className="ulAuth">
                <li>السجلات</li>
                <li>الصلاحيات</li>
              </ul>
            )}
          </ul>

        </Nav>
      </div>

      {/* ===== Content ===== */}
      <div className={`content ${open ? "" : "full"}`}>
        <Navbar className="bg-body-tertiary navbar px-3 d-flex justify-content-between">

          <div className="d-flex align-items-center">
            <button className="toggleBtn" onClick={() => setOpen(!open)}>
              ☰
            </button>

            <img
              src="/images/logo.png"
              alt="logo"
              style={{ width: 75, height: 75 }}
              className="ms-3"
            />

            <button className="addEmployee ms-3">
              أضف موظف جديد
            </button>
          </div>

          <div className="d-flex align-items-center">
            <FaSignOutAlt className="icons me-3" />
            <FaBell className="icons me-3" />
            <FaMessage className="icons me-3" />

            <img
              src="/images/employee-02.jpg"
              alt="user"
              className="userImg"
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
              }}
            />
          </div>
        </Navbar>

        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
