import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateUser, successToast, errorToast } from "./../../utils";

const EditProfileComponent = () => {
    const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user);
  const [editUser, setEditUser] = useState({ ...user });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(user.userId,editUser)
      .then(() => successToast(toast, "Updated! Please login again"))
      .then(()=>navigate("/login"))
      .catch(() => errorToast(toast, "Please try again later"));
  };
  return (
    <>
      <Button style={{backgroundColor:"purple"}} onClick={handleShow}>
        Edit Your Profile
      </Button>

      <Offcanvas
        placement="end"
        style={{ width: "50vw" }}
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-danger ">
            
              Please note, after update, you will have to login again.
            
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setEditUser({ ...editUser, firstName: e.target.value })
                }
                size="sm"
                type="text"
                defaultValue={user.firstName}
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setEditUser({ ...editUser, lastName: e.target.value })
                }
                size="sm"
                type="text"
                defaultValue={user.lastName}
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setEditUser({ ...editUser, email: e.target.value })
                }
                size="sm"
                type="email"
                defaultValue={user.email}
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setEditUser({ ...editUser, birthDate: e.target.value })
                }
                size="sm"
                type="date"
                defaultValue={user.birthDate}
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setEditUser({ ...editUser, image: e.target.value })
                }
                size="sm"
                type="text"
                defaultValue={user.image}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Container>
      </Offcanvas>
    </>
  );
};

export default EditProfileComponent;
