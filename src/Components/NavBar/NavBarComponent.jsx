import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const NavBarComponent = () => {

const navigate = useNavigate()  
  return (
    <Navbar className="text-light my-bg">
      <Container>
        <h4 style={{cursor:'pointer'}} onClick={()=>navigate('/')}>Welcome</h4>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Navbar.Text className="text-light">
              {" "}
              <Button variant="outline-light" onClick={()=>navigate('/login')}>
                Login
              </Button>
            </Navbar.Text>
            <Navbar.Text>
              {" "}
              <Button onClick={()=> navigate("/createaccount")} variant="outline-light">Create Account</Button>
            </Navbar.Text>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
