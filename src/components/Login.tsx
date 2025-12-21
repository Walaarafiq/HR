import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaIdCard, FaLock } from 'react-icons/fa';
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";


function Login() {
  return (
    <div className="container-fluid mainLogin m-0 p-0" style={{ minHeight: '100vh' }}>
      <div className="row m-0" style={{ minHeight: '100vh' }}>
        {/* الصورة على يمين */}
        <div className="col-12 col-md-6 p-0 d-none d-md-block">
          <img
            src="/images/mainlogo.webp"
            alt="Logo"
            style={{
              width: '75%',
              height: '75%',
              objectFit: 'contain',
              display: 'block',
              margin: '50px auto',  
              paddingTop: '50px'
            }}
          />
        </div>

        {/* الفورم */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <div className="login-box w-100" style={{ maxWidth: 550, height: 560, backgroundColor: '#fff', padding: '3rem', borderRadius: '10px', boxShadow: '0 0 15px rgba(0,0,0,0.2)' }}>
            <h5 className="tit0 text-center mb-2">نظام إدارة معلومات الموظفين الإداري والمالي</h5>
            <h4 className="tit1 text-center mb-4">الخدمات الإلكترونية للموظفين</h4>

            <form
              method="POST"
              action="https://gold-woodcock-352801.hostingersite.com/login">
              <input
                type="hidden"
                name="_token"
                value="iZgS1VxpY30JZCNjwJYnohFmJewBzB3iHDxUufLL"
                autoComplete="off"/>

              {/* رقم الهوية */}
              <Form.Group className=" label0" controlId="national_id">
                <Form.Label>
                  <FaIdCard style={{ marginLeft: '8px'}} />
                  رقم الهوية الوطنية
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="أدخل رقم الهوية (9 أرقام)"
                  maxLength={9}
                  required
                  autoComplete="username"/>
              </Form.Group>

              {/* كلمة المرور */}
              <Form.Group className="label0" controlId="password">
                <Form.Label>
                  <FaLock style={{ marginLeft: '8px' }} />
                  كلمة المرور
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="أدخل كلمة المرور"
                  required
                  autoComplete="current-password"/>
              </Form.Group>

              {/* تذكرني + نسيت كلمة المرور */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <Form.Check type="checkbox" label="تذكرني" className='forgetpass'/>
                <a href="#" className='forgetpass'>هل نسيت كلمة المرور؟</a>
              </div>
            <NavLink to="/other-government" className="loginButton nav-link w-100 text-center" style={{ textDecoration: 'none' }}>
              تسجيل الدخول
              </NavLink>
              {/* <Nav.Link type="submit" as={NavLink} to="/"  >
                تسجيل الدخول
              </Nav.Link> */}
            </form>

            <p className="footer-text text-center mt-4 footerText">
              جميع الحقوق محفوظة لدى وزارة الإقتصاد
            </p>
            <p className="footer-text text-center footerText" style={{ marginTop: -10 }}>
              يرجى التأكد من دخولك للبوابة عبر الرابط الرسمي للحفاظ على أمن معلوماتك
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;