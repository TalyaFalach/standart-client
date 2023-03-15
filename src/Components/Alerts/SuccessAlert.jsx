import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const SuccessAlert = ({message}) => {
  const navigate = useNavigate();
  return (
    <Alert variant="success">
      <Alert.Heading>Congratulations</Alert.Heading>
      <Alert.Heading>{message}</Alert.Heading>
     
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={() => navigate("/login")} variant="outline-success">
         Login!
        </Button>
      </div>
    </Alert>
  );
};

export default SuccessAlert;
