import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ErrorAlert from "../../Components/Alerts/ErrorAlert";
import SuccessAlert from "../../Components/Alerts/SuccessAlert";
import NavBarComponent from "../../Components/NavBar/NavBarComponent";
import { signUp } from "./../../utils";
const defaultUserImg =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";

const CreateAccountPage = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    image: defaultUserImg,
    password: "",
    confirmPassword: "",
  });
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signUp(newUser)
    if(res.status ==="failed"){
      setErrorAlert(!errorAlert);
    }else if(res.status ==='success'){
      setSuccessAlert(!successAlert);
    }
    

      console.log(res.status);
  };
  return (
    <div>
      <NavBarComponent />
      <Container className="border w-75 mx-auto p-3 m-3">
      {successAlert ? <SuccessAlert/> : null}
      {errorAlert ? <ErrorAlert/>:null}
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
                type="email"
                placeholder="Image"
                onChange={(e) =>
                  setNewUser({ ...newUser, image: e.target.value })
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
          <Row>
            <Col>
              <Button className="btn-success w-50 m-3" type="submit">
                Sign Up
              </Button>
            </Col>
          </Row>
          <p>We will not share your personal data with anyone else</p>
        </form>
      </Container>
    </div>
  );
};

export default CreateAccountPage;

// Noam Kapach Noamle7@gmail.com
