import '../App.css'
import logo from '../assets/MPCorner_logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="left-content">
        <img src={logo} alt="MP Corner Logo" className="logo" />
        <div className="left-title">MP Corner</div>
      </div>
      <div className="right-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Performance</a>
        <a href="#">Excel</a>
      </div>
    </div>
  );
};

export default Header;
