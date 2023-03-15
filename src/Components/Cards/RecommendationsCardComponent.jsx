
import React from "react";
import toolsImg from "./../../Images/tools.jpg";
import Card from "react-bootstrap/Card";
import "./Cards.css";

const RecommendationsCardComponent = () => {
  return (
    <div className="my-card">
      {" "}
      <Card
        className="bg-dark text-white hover m-2"
        style={{ height: "300" }}
      >
        <Card.Img
          className="opacity-50"
          src={toolsImg}
          alt="Card image"
          style={{ height: "300" }}
        />
        <Card.ImgOverlay>
          <Card.Title className="fs-3 fw-lighter mx-auto">
            Recommendations from professionals
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default RecommendationsCardComponent;