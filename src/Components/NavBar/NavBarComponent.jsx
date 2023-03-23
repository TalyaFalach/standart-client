import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const NavBarComponent = () => {

const navigate = useNavigate()  
  return (
    <Navbar className="bg-dark text-light my-bg">
      <Container>
        <div className="fw-lighter lead" style={{cursor:'pointer'}} onClick={()=>navigate('/')}>STANDART</div>

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
