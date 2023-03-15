import React, { useEffect, useState } from "react";
import { DeleteSale } from "./../../utils";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function DeleteSaleComponent({ prodId }) {
 

  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handleCancel = () => {
    setShow(!show);
  };
  const handleDelete = async () => {
    console.log(prodId);
    await DeleteSale(prodId)
      .then(() => alert("The post has been deleted"))
      .catch(() => alert("oops, somethong went wrong"));
    setShow(!show);
  };
  return (
    <>
      <Alert show={show} variant="danger">
        <span
          className="d-flex justify-content-end fw-bold"
          style={{ cursor: "pointer" }}
          onClick={handleCancel}
        >
          X
        </span>
        <Alert.Heading>Are You Sure ?</Alert.Heading>
       
        <hr />

        <div className="">
          <Button onClick={handleDelete} variant="outline-danger">
            Yes
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default DeleteSaleComponent;
