import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { getAll } from "./../../utils";
import NavBarLoginComponent from "../../Components/NavBarLogin/NavBarLoginComponent";
import PageTitle from "./../../Components/PageTitle/PageTitle";
import RecommendationCardCompnent from "../../Components/RecommendationCardComponent/RecommendationCardCompnent";
import CreateRecommendationComponent from "../../Components/CreateRecommendationComponent/CreateRecommendationComponent";
const RecommendationsPage = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await getAll("recommendations").then((data) =>
        setRecommendations([...data.data.data])
      );
    };
    fetchData();
  }, []);

  return (
    <div>
      <NavBarLoginComponent />
      <div className="container">
        <PageTitle
          title="Recommendations"
          subTitle="Good shopping experience, nice professionals and only good people"
        />
        <Row>
          <Col></Col>
          <Col>
            <CreateRecommendationComponent />
          </Col>
        </Row>

        <Container>
          <Row className="mt-3 mb-4">
            {recommendations.map((post, index) => {
              return (
                <Col sm={6} key={index}>
                  {" "}
                  <RecommendationCardCompnent post={post} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default RecommendationsPage;
