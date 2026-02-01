import React, { useRef, useState } from "react";

function OTPInput({ onSubmit }) {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 4) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text").slice(0, 5);
    if (!/^\d+$/.test(pasteData)) return;

    const newOtp = pasteData.split("");
    while (newOtp.length < 5) newOtp.push("");
    setOtp(newOtp);
  };

  const submitCode = () => {
    const code = otp.join("");
    if (code.length === 5) {
      onSubmit(code); // إرسال الكود للـ API
    } else {
      alert("Please enter the 5-digit code");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h4>Enter Verification Code</h4>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            style={{
              width: "45px",
              height: "45px",
              textAlign: "center",
              fontSize: "18px",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          />
        ))}
      </div>

      <button
        onClick={submitCode}
        style={{
          marginTop: "20px",
          padding: "10px 25px",
          backgroundColor: "#0d6efd",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Verify
      </button>
    </div>
  );
}

export default OTPInput;