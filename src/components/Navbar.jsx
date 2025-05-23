import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Inicio</Link> | 
    <Link to="/carrito">Carrito</Link>
  </nav>
);

export default Navbar;
