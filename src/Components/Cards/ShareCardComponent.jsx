import React from "react";
import youtubeImg from "./../../Images/youtube.jpg";
import Card from "react-bootstrap/Card";
import "./Cards.css";

const ShareCardComponent = () => {
  return (
    <div className="hover my-card">
      {" "}
      <Card className="bg-dark text-white m-2 " style={{ height: "300px" }}>
        <Card.Img
          className="opacity-50"
          src={youtubeImg}
          alt="Card image"
          style={{ height: "300px" }}
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
