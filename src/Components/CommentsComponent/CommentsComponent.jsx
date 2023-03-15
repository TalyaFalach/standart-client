import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import LikeIconComponent from "../../Icons/LikeIconComponent/LikeIconComponent";

const CommentsComponent = () => {
  return (
    <div>
      <hr />
      <Row>
        <Col sm={3}>
          <LikeIconComponent />
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default CommentsComponent;
