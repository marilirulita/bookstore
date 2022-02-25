import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar panel-bg1">
    <h1 className="Bookstore-CMS1">Bookstore CMS</h1>
    <Link to="/" className="BOOKS Text-Style-3">Books</Link>
    <Link to="/categories" className="CATEGORIES Text-Style-3">Categories</Link>
    <div className="Oval">
      <div className="Mask" />
    </div>
  </div>
);

export default Navbar;
