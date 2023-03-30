import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import NavBarComponent from "../../Components/NavBar/NavBarComponent";
import { signUp, successToast, errorToast } from "./../../utils";
const defaultUserImg =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";

const CreateAccountPage = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    image: defaultUserImg,
    imageFile: null,
    password: "",
    confirmPassword: "",
    about: "",
    words: "",
    playing: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", newUser.firstName);
    formData.append("lastName", newUser.lastName);
    formData.append("email", newUser.email);
    formData.append("birthDate", newUser.birthDate);
    formData.append("imageFile", newUser.imageFile);
    formData.append("password", newUser.password);
    formData.append("confirmPassword", newUser.confirmPassword);

    console.log(formData);
    await signUp(formData)
      .then(() => successToast(toast, "You are signed up! now login"))
      .catch((err) => console.log(err))
      .catch(() => errorToast(toast, "please check all fields and try again"));

  };
  return (
    <div className="bg-dark">
      <NavBarComponent />
      <hr className=" mx-auto text-light" />
      <hr bg="light" />
      <Container className="bg-dark  text-light border rounded w-75 mx-auto p-3 m-3">
        <h1>Sign Up</h1>
        <form className="mx-auto p-4" onSubmit={handleSubmit}>
          <Row>
            <Col sm={6}>
              <Form.Control
                required
                className="m-2"
                type="text"
                placeholder="First Name"
                onChange={(e) =>
                  setNewUser({ ...newUser, firstName: e.target.value })
                }
              />
            </Col>
            <Col sm={6}>
              <Form.Control
                required
                className="m-2"
                type="text"
                placeholder="Last Name"
                onChange={(e) =>
                  setNewUser({ ...newUser, lastName: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                required
                className="m-2"
                type="email"
                placeholder="Email Address"
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                className="m-2"
                type="file"
                placeholder="Image"
                onChange={(e) =>
                  setNewUser({ ...newUser, imageFile: e.target.files[0] })
                }
              />
            </Col>
          </Row>
          <Col>
            <Form.Control
              required
              className="m-2"
              type="date"
              onChange={(e) =>
                setNewUser({ ...newUser, birthDate: e.target.value })
              }
            />
          </Col>
          <Row>
            <Col>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
              />
            </Col>
            <Col>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                onChange={(e) =>
                  setNewUser({ ...newUser, confirmPassword: e.target.value })
                }
              />
            </Col>
          </Row>
          
          <Col>
            <Button className="btn-success w-50 m-3" type="submit">
              Sign Up
            </Button>
            <p>We will not share your personal data with anyone else</p>
          </Col>
        </form>
      </Container>
    </div>
  );
};

export default CreateAccountPage;

// Noam Kapach Noamle7@gmail.com
