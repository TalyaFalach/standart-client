import React from "react";
import saleImg from "./../../Images/SaleImg.jpg";
import Card from "react-bootstrap/Card";
import "./Cards.css";

const SaleCardComponent = () => {
  return (
    <div className="my-card ">
      {" "}
      <Card
        className="bg-dark text-white hover"
        style={{ height: "300px" }}
      >
        <Card.Img
          className="opacity-50 w-100 bg-dark"
          src={saleImg}
          alt="Card image"
          style={{ height: "48vh" }}
        />
        <Card.ImgOverlay>
          <Card.Title className="fs-3 fw-lighter mx-auto">
            Sale And Buy
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default SaleCardComponent;
