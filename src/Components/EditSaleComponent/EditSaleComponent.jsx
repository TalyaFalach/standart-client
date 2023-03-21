import React, { useState } from "react";
import { EditSale, successToast, errorToast } from "./../../utils";
import "./EditSaleComponent.css";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

const EditSaleComponent = ({ prod }) => {
  const [initialProd, setInitialProd] = useState({
    photo: prod.photo,
    contact: prod.contact,
    city: prod.city,
    description: prod.description,
    price: prod.price,
    productName: prod.productName,
  });

  const [show, setShow] = useState(true);
  const handleCancel = () => {
    setShow(!show);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await EditSale(prod._id, initialProd)
      .then(() => successToast(toast, "Updated!"))
      .catch(() => errorToast(toast, "Please try again"));
  };

  return (
    <form onSubmit={handleSubmit} className="p-3">
      <Alert show={show} variant="">
        <h5>Edit Your Post Here</h5>
        <span
          onClick={handleCancel}
          className="d-flex justify-content-end fw-bold"
          style={{ cursor: "pointer" }}
        >
          X
        </span>
        <input
          type="form-control"
          placeholder={`City: ${prod.city}`}
          onChange={(e) =>
            setInitialProd({ ...initialProd, city: e.target.value })
          }
        />
        <br />
        <input
          placeholder={`Contact: ${prod.contact}`}
          onChange={(e) =>
            setInitialProd({ ...initialProd, contact: e.target.value })
          }
        />{" "}
        <br />
        <input
          placeholder={`Photo: ${prod.photo}`}
          onChange={(e) =>
            setInitialProd({ ...initialProd, photo: e.target.value })
          }
        />
        <input
          placeholder={`Price: ${prod.price}`}
          onChange={(e) =>
            setInitialProd({ ...initialProd, price: e.target.value })
          }
        />{" "}
        <br />
        <input
          placeholder={`Product Name: ${prod.productName}`}
          onChange={(e) =>
            setInitialProd({ ...initialProd, productName: e.target.value })
          }
        />
        <br />
        <textarea
          placeholder={prod.description}
          style={{ resize: "none" }}
          onChange={(e) =>
            setInitialProd({ ...initialProd, description: e.target.value })
          }
        />
        <Button variant="outline-primary" type="submit">
          Edit
        </Button>
      </Alert>
    </form>
  );
};

export default EditSaleComponent;
