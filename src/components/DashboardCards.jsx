import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaUsers, FaClipboardList, FaBell, FaChartLine } from "react-icons/fa";

const DashboardCards = () => {
  const cardsData = [
    { title: "الموظفين الكلي", number: 256, icon: <FaUsers size={25} />, color: "#4e73df" },
    { title: "الرسميين", number: 12, icon: <FaClipboardList size={25} />, color: "#1cc88a" },
    { title: "رسميين في حكومة أخرى", number: 5, icon: <FaBell size={25} />, color: "#f6c23e" },
    { title: "المتقاعدين", number: 85, icon: <FaChartLine size={25} />, color: "#e74a3b" },
  ];

  return (
    <Row className="g-4">
      {cardsData.map((card, index) => (
        <Col md={3} key={index}>
          <Card 
            style={{
              borderRadius: "12px",
              backgroundColor: "#f8f9fc",
              boxShadow: "0 4px 6px rgba(0,0,0,0.2)", 
              border: "1px solid white",
              cursor: "pointer",
              transition: "transform 0.2s",}}
            className="h-100"
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
            <Card.Body className="d-flex align-items-center">
              <div 
                style={{
                  backgroundColor: card.color,
                  color: "white",
                  borderRadius: "50%",
                  width: "55px",
                  height: "55px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "15px"
                }}>
                {card.icon}
              </div>
              <div>
                <Card.Title className="mb-1 mx-2 mt-2 cardDashTit">{card.title}</Card.Title>
                <h4 className="mx-3 mt-2 cardDashNum">{card.number}</h4>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default DashboardCards;
