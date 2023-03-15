import { useState } from "react";
import { login } from "./../../utils";
import { Button, Row, Form, Col, Card } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import NavBarComponent from "../../Components/NavBar/NavBarComponent";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password)
      .then((data) => dispatch({ type: "SET_USER_DATA", payload: { ...data } }))
      .then(() => navigate("/userprofile"))
      .catch(() => alert("Please Try To Login Again"));
  };

  return (
    <div className="h-100">
      <NavBarComponent />
      talyafalach@gmail.com
      <div className="h-100 bg-light container mt-4">
        <Card style={{ maxWidth: "75%" }} className="mx-auto shadow mt-5 mb-3">
          <Card.Header className="h5">Welcome Back!</Card.Header>
          <Card.Body>
            <form className="mt-3" onSubmit={handleSubmit}>
              <Form.Control
                placeholder="Email"
                type="text"
                className="w-50 mx-auto m-3"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control
                placeholder="Password"
                type="password"
                className="w-50 mx-auto m-3"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button className="w-50" type="submit">
                Login
              </Button>
            </form>
          </Card.Body>
        </Card>
        <span className="h-50 mt-5 fw-bold">
          No account ?<Link to="/createaccount"> Create new account</Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
