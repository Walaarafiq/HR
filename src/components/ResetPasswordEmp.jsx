import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaIdCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ResetPasswordEmp() {
  const navigate = useNavigate();

  return (
    <div
      className="login-page"
      style={{
        minHeight: "100vh",
        fontFamily: "Tajawal, sans-serif",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/images/backg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="login-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(200, 200, 200, 0.4)",
        }}
      ></div>

      <img
        src="/images/logo222.png"
        alt="Logo"
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          width: "220px",
          height: "220px",
          objectFit: "contain",
          zIndex: 10,
        }}
      />

      <div
        className="login-box"
        style={{
          position: "relative",
          background: "rgba(255, 255, 255, 0.85)",
          padding: "35px 30px",
          width: "100%",
          maxWidth: "480px",
          borderRadius: "18px",
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.25)",
          textAlign: "center",
          zIndex: 1,
          backdropFilter: "blur(8px)",
        }}
      >
        <h6 className="login-title">أهلا بك</h6>
        <h5 className="login-subtitle mt-2">نسيت كلمة المرور</h5>

        <p>قم بإدخال رقم الهاتف لإرسال كود تعيين كلمة مرور جديدة</p>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>
              <FaIdCard style={{ marginLeft: "8px" }} />
              رقم الهاتف
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="أدخل رقم الجوال"
              maxLength={9}
            />
          </Form.Group>

          <Button
            type="button"
            className="btn-login w-100"
            onClick={() => navigate("/code-pass")}
            style={{
              background:
                "linear-gradient(to top, #014f56, #016A74, #1b8a95)",
              color: "#dadbdd",
              borderRadius: "12px",
              fontWeight: "600",
            }}
          >
            إرسال الكود
          </Button>
        </Form>

        <p
          className="text-center mt-4"
          style={{ fontSize: "14px", color: "grey" }}
        >
          جميع الحقوق محفوظة
          <br />
          لدى وزارة الإقتصاد الوطني الفلسطيني
        </p>
      </div>
    </div>
  );
}

export default ResetPasswordEmp;
