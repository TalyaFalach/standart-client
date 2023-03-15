import { useEffect, useState } from "react";
import NavBarComponent from "../../Components/NavBar/NavBarComponent";
import Card1 from "../../Components/Cards/ConnectionCardComponent";
import Card2 from "../../Components/Cards/RecommendationsCardComponent";
import Card3 from "../../Components/Cards/SaleCardComponent";
import Card4 from "../../Components/Cards/ShareCardComponent";

import React from "react";
import img from "./../../Images/kahal2.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";
import LoginPage from "../LoginPage/LoginPage";

function HomePage() {
  

  return (
    <div style={{ backgroundColor: "black" }}>
      <Container fluid className="p-0">
        <Row noGutters>
          <Col xs={12}>
            <div className="position-relative" style={{ height: "100vh" }}>
              <div
                bg="dark"
                style={{ height: "90px", backgroundColor: "black" }}
              >
                <NavBarComponent />
              </div>
              <img
                src={img}
                alt="example"
                className="w-100"
                style={{ opacity: 0.7 }}
              />
              <div className="position-absolute top-50 start-50 translate-middle text-center">
                <div className="display-1 fw-lighter text-light ">STANDART</div>{" "}
                <h3 className="display-6 text-light  ">
                  A social network for musicians
                </h3>{" "}
                <p className="text-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam veritatis vero nobis maiores facere! Fuga accusantium
                  voluptatum adipisci distinctio deserunt?
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Card1 />
          </Col>
          <Col sm={6}>
            <Card2 />
          </Col>
          <Col sm={6}>
            <Card3 />
          </Col>
          <Col sm={6}>
            <Card4 />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
