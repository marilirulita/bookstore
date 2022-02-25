/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import { ImUser } from "react-icons/im";

const Navbar = () => (
  <div className="navbar">
    <div className="links">
      <h1 className="Bookstore-CMS1">Bookstore CMS</h1>
      <Link to="/" className="BOOKS">
        BOOKS
      </Link>
      <Link to="/categories" className="CATEGORIES">
        CATEGORIES
      </Link>
    </div>
    <div className="Oval">
      <ImUser className="Mask" />
    </div>
  </div>
);

export default Navbar;
