import React from "react";
import youtubeImg from "./../../Images/youtube.jpg";
import Card from "react-bootstrap/Card";
import "./Cards.css";

const ShareCardComponent = () => {
  return (
    <div className="my-card ">
      {" "}
      <Card
        className="bg-dark text-white hover"
        style={{ height: "300px" }}
      >
        <Card.Img
          className="opacity-50 w-100 bg-dark"
          src={youtubeImg}
          alt="Card image"
          style={{ height: "48vh" }}
        />
        <Card.ImgOverlay>
          <Card.Title className="fs-3 fw-lighter mx-auto">
            <p>Share Your Music</p>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default ShareCardComponent;
