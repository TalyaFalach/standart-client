
import React from "react";
import toolsImg from "./../../Images/tools.jpg";
import Card from "react-bootstrap/Card";
import "./Cards.css";
import { useNavigate } from "react-router-dom";

const RecommendationsCardComponent = () => {
  const navigate = useNavigate()
  return (
    <div className="my-card hover">
      {" "}
      <Card
       className="bg-dark text-white hover"
        style={{ height: "300px" , cursor:"pointer"}}
        onClick={()=>navigate("recommendations")}
      >
        <Card.Img
          className="opacity-50 w-100 bg-dark"
          src={toolsImg}
          alt="Card image"
          style={{ height: "48vh" }}
        />
        <Card.ImgOverlay>
          <Card.Title className="fs-3 fw-lighter mx-auto">
            Recommendations And Tips
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default RecommendationsCardComponent;