import React, { useEffect, useState } from "react";
import { DeleteSale } from "./../../utils";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function DeleteSaleComponent({ prodId }) {
 
  const [show, setShow] = useState(true);
  useEffect(() => {
   setShow(true)
  }, [])
  

  const handleCancel = () => {
    setShow(false);
  };
  const handleDelete = async () => {
    console.log(prodId);
    await DeleteSale(prodId)
      .then(() => alert("The post has been deleted"))
      .catch(() => alert("oops, somethong went wrong"));
    setShow(!show);
  };
  return (
    <div>
      <Alert show={show} variant="">
        <span
          className="d-flex justify-content-end fw-bold"
          style={{ cursor: "pointer" }}
          onClick={handleCancel}
        >
          X
        </span>
        <h5>Are You Sure ?</h5>
       
        <hr />

        <div className="">
          <Button onClick={handleDelete} variant="outline-danger">
            Yes
          </Button>
        </div>
      </Alert>
    </div>
  );
}

export default DeleteSaleComponent;
