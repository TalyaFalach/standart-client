import React from "react";
import "./Cards.css"
import connectionImg from "./../../Images/connectionCard.jpg";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const ConnectionCardComponent = () => {
  const navigate = useNavigate()
  return (
    <div className="my-card hover">
      {" "}
      <Card className="bg-dark text-white hover" style={{ height: "300px", cursor:"pointer" }} onClick={()=>navigate("/jobs")}>
        <Card.Img
          className="opacity-50 w-100 bg-dark"
          src={connectionImg}
          alt="Card image"
          style={{ height: "48vh" }}
        />
        <Card.ImgOverlay>
          <Card.Title className="fs-3 fw-lighter mx-auto">
           Jobs
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default ConnectionCardComponent;
