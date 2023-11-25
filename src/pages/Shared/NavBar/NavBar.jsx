// import { Link } from "react-router-dom";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="header">
      <div className="header-first">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/">Schedules</Link></div>
        <div><Link to="/">Membership</Link></div>
        <div><Link to="/">Pricing</Link></div>
      </div>
      <div className="header-last">
        <div>
          <Link to="/">Offers</Link>
        </div>
        <div><Link className='bg-orange' to="/">Course</Link></div>
      </div>
    </nav>
  );
};

export default NavBar;
