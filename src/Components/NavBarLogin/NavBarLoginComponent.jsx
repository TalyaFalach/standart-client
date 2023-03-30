import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const imgUrl = `http://localhost:8000`;

const NavBarLoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch({
      type: "LOGOUT",
      payload: {
        firstName: "",
        lastName: "",
        userId: "",
        image: "",
        email: "",
      },
    });

    navigate("/");
  };
  return (
    <>
      <Navbar bg="light" expand="lg" className="p-3">
        {user.userId === "" ? (
          <Navbar.Brand
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            STANDART
          </Navbar.Brand>
        ) : (
          <Navbar.Brand
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/userprofile")}
          >
            {user.firstName + " " + user.lastName}
          </Navbar.Brand>
        )}
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
            {user.userId === "" ? null : (
              <Nav.Link style={{ color: "red" }} onClick={handleLogout}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
        {user.userId === "" ? (
          <div className="p-4 fw-lighter">
            <Button
              className="m-1"
              variant="outline-dark"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button variant="outline-dark" onClick={() => navigate("/login")}>
              Create Account
            </Button>
          </div>
        ) : (
          <div className="p-2 ">
            <img
              src={`${imgUrl}/api/images/${user.image}`}
              class="rounded float-end rounded-circle w-75"
              alt="user"
              style={{ height: "120px" }}
            />
          </div>
        )}
      </Navbar>
    </>
  );
};

export default NavBarLoginComponent;
