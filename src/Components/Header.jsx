import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/MPCorner_logo.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <Navbar expand="lg" className="header">
        <div className="left-content">
          <img src={logo} alt="MP Corner Logo" className="logo" />
          <div className="left-title">MP Corner</div>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="right-links">
              <Link to="/">Home</Link>
              {/* <Link to="/about">About</Link> */}
              <Link to="/performance">Performance</Link>
              <Link to="/activity">Activity</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
