import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <div className="links">
      <h1 className="Bookstore-CMS1">Bookstore CMS</h1>
      <Link to="/" className="BOOKS">BOOKS</Link>
      <Link to="/categories" className="CATEGORIES">CATEGORIES</Link>
    </div>
    <div className="Oval">
      <div className="Mask" />
    </div>
  </div>
);

export default Navbar;
