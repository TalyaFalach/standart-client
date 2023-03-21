import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const NavBarLoginComponent = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <>
      <Navbar bg="light" expand="lg" className="container">
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/userprofile")}
        >
          STANDART
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/sales")}>Sales</Nav.Link>
            <Nav.Link onClick={() => navigate("/recommendations")}>
              Recommendations
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/articletips")}>
              articles / tips
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/music")}>Music</Nav.Link>
            <Nav.Link onClick={() => navigate("/jobs")}>Job</Nav.Link>
            <Nav.Link style={{ color: "red" }} onClick={handleLogout}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="p-2 ">
          <img
            src={user.image}
            class="rounded float-end rounded-circle"
            alt="user"
            style={{ height: "120px" }}
          />
        </div>
      </Navbar>
      <hr />
    </>
  );
};

export default NavBarLoginComponent;
