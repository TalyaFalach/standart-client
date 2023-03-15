import React from "react";
import "./Cards.css"
import connectionImg from "./../../Images/connectionCard.jpg";
import Card from "react-bootstrap/Card";

const ConnectionCardComponent = () => {
  return (
    <div className="my-card">
      {" "}
      <Card className="bg-dark text-white hover m-2" style={{ height: "300" }}>
        <Card.Img
          className="opacity-50"
          src={connectionImg}
          alt="Card image"
          style={{ height: "300" }}
        />
        <Card.ImgOverlay>
          <Card.Title className="fs-3 fw-lighter mx-auto">
            Create New Connections
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default ConnectionCardComponent;
