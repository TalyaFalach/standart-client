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
    const res = await login(email, password)
      .then((data) => dispatch({ type: "SET_USER_DATA", payload: { ...data } }))
      
      .then(() => navigate("/userprofile"))
      .catch(() => alert("Please Try To Login Again"));
      console.log("res", res);
  };

  return (
    <div className="h-100 bg-dark text-light">
      <NavBarComponent />
      <hr className=" mx-auto" />
     
      talyafalach@gmail.com
      <hr className="w-50 mx-auto" />
      <div className="display-4 mt-2 ">Welcome Back</div>
      <hr className="w-50 mx-auto" />
      <div className="h-100  container mt-3">
       
        <form className="mt-4 p-4" onSubmit={handleSubmit}>
          <Form.Control
            placeholder="Email"
            type="text"
            className="w-50 mt-4 mb-4 mx-auto mt-2 "
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            placeholder="Password"
            type="password"
            className="w-50 mx-auto m-3"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="btn btn-success w-50 mt-4" type="submit">
            Login
          </Button>
          
        </form>
    
        <span className="h-50 mt-5 fw-bold">
          No account ?<Link to="/createaccount"> Create new account</Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
