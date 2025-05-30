import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">GameBlades</Link>
      <div className="nav-links">
        <Link to="/carrito" className="cart-link">🛒 Carrito</Link>
      </div>
    </nav>
  );
};

export default Navbar;
