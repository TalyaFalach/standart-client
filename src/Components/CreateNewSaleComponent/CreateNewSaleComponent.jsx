import FloatingLabel from "react-bootstrap/FloatingLabel";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import {
  createNewSale,
  getTodayDate,
  successToast,
  errorToast,
} from "./../../utils";
import { toast } from "react-toastify";

const CreateSaleComponent = () => {
  const user = useSelector((state) => state.user);
  const salesCategory = useSelector((state) => state.salesCategory);

  const [show, setShow] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [product, setProduct] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    category: "Guitar",
    city: "",
    productName: "",
    price: "",
    contact: "",
    description: "",
    image: "",
    imageFile: null,
    userId: user.userId,
    date: getTodayDate(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", product.firstName);
    formData.append("lastName", product.lastName);
    formData.append("category", product.category);
    formData.append("city", product.city);
    formData.append("productName", product.productName);
    formData.append("price", product.price);
    formData.append("contact", product.contact);
    formData.append("description", product.description);
    formData.append("imageFile", product.imageFile);
    formData.append("userId", product.userId);
    formData.append("date", product.date);
    await createNewSale(formData)
      .then(() => successToast(toast, "created"))
      .then(() => setIsClicked(!isClicked))
      .catch(() => errorToast(toast, "Oops, please try again"));
    console.log(formData);
  };
  return (
    <>
      <Button style={{ backgroundColor: "purple" }} onClick={handleShow}>
        + Create Sale
      </Button>

      <Offcanvas show={show} placement="end" onHide={handleClose}>
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
            <br />
            <input
              onChange={(e) =>
                setProduct({ ...product, imageFile: e.target.files[0] })
              }
              type="file"
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
            <select
              defaultValue="category"
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            >
              <option disabled value="category">
                category
              </option>
              {salesCategory.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
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
            <Button type="submit">Continue</Button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CreateSaleComponent;
