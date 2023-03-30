
import NavBarComponent from "../../Components/NavBar/NavBarComponent";
import Card1 from "../../Components/Cards/JobsCardComponent";
import Card2 from "../../Components/Cards/RecommendationsCardComponent";
import Card3 from "../../Components/Cards/SaleCardComponent";
import Card4 from "../../Components/Cards/ShareCardComponent";
import React from "react";
import img from "./../../Images/kahal2.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";


function HomePage() {
  return (
    <div className="bg-dark">
      <Container fluid className="p-0">
        <Row noGutters>
          <Col xs={12}>
            <div className="position-relative" style={{ height: "100vh" }}>
              <div bg="dark" style={{ height: "90px" }}>
                <NavBarComponent />
              </div>
              <img
                src={img}
                alt="example"
                className="w-100 h-100"
                style={{ opacity: 0.7 }}
              />
              <div className="position-absolute top-50 start-50 translate-middle text-center">
                <div className="display-1 fw-lighter text-light ">STANDART</div>{" "}
                <h3 className="display-6 text-light  ">
                  A social network for musicians
                </h3>{" "}
                <p className="fw-lighter text-light lead">
                  standart is designed to accommodate the needs of every
                  musician, in one place. 
                  Viewing the site's content is free To share your own posts,
                  you can register and log in
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ backgroundColor: "black" }}>
          <Col sm={3}>
            <Card1 />
          </Col>
          <Col sm={3}>
            <Card2 />
          </Col>
          <Col sm={3}>
            <Card3 />
          </Col>
          <Col sm={3}>
            <Card4 />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
