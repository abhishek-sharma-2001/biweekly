import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/MPCorner_logo.png";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <div className="header">
        <div className="left-content">
          <img src={logo} alt="MP Corner Logo" className="logo" />
          <div className="left-title">MP Corner</div>
        </div>
        <div className="right-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/performance">Performance</Link>
          <Link to="/excel">Excel</Link>
        </div>
      </div>{" "}
    </Container>
  );
};

export default Header;
