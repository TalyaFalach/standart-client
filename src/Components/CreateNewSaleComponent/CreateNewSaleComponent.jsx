import FloatingLabel from "react-bootstrap/FloatingLabel";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { createNewSale } from "./../../utils";

const CreateSaleComponent = ({placement}) => {
  const user = useSelector((state) => state.user);
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [product, setProduct] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    city: "",
    productName: "",
    price: "",
    contact: "",
    description: "",
    photo: "",
    userId: user.userId,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNewSale(product)
      .then(() => alert("created"))
      .catch(() => alert("Oops, please try again"));

   
  };
  return (
    <>
      <Button style={{ backgroundColor: "purple" }} onClick={handleShow}>
        + Create Sale
      </Button>
      

      <Offcanvas show={show} placement='end' onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Hello, {user.firstName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          This is the place to upload a product for sale, make sure you have
          filled in all the fields correctly
          <form className="p-2" onSubmit={handleSubmit}>
           
            <br />
            <input
              type="text"
              onChange={(e) =>
                setProduct({ ...product, productName: e.target.value })
              }
              className="m-1"
              placeholder="Product Name"
            />{" "}
            <br />
            <input
              type="text"
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
              className="m-1"
              placeholder="Price"
            />{" "}
            <select>
              <option>$</option>
              <option>₪</option>
            </select>
            <br />
            <input
              onChange={(e) =>
                setProduct({ ...product, photo: e.target.value })
              }
              type="text"
              className="m-1"
              placeholder="Photo (url)"
            />{" "}
            <br />
            <input
              onChange={(e) =>
                setProduct({ ...product, contact: e.target.value })
              }
              type="text"
              className="m-1"
              placeholder="Email / Phone Number"
            />{" "}
            <br />
            <input
              onChange={(e) => setProduct({ ...product, city: e.target.value })}
              type="text"
              className="m-1"
              placeholder="City (Not required)"
            />{" "}
            <br />
            <FloatingLabel
              controlId="floatingTextarea"
              label="Write a description"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
                as="textarea"
                style={{ resize: "none" }}
                className="m-1"
              />
            </FloatingLabel>
            {/* 
              userId
            */}
            <Button type="submit">Continue</Button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CreateSaleComponent;