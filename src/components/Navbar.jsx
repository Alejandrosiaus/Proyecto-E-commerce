import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="metal-title">GameBlades</Link>
      <div className="nav-links">
        <Link to="/carrito" className="cart-link">🛒 Carrito                    i                                  .</Link>
      </div>
    </nav>
  );
};

export default Navbar;
