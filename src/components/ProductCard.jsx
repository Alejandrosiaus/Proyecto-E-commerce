import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, price, image }) => (
  <div>
    <img src={image} alt={name} width="150" />
    <h3>{name}</h3>
    <p>${price}</p>

    {/* ENLACE QUE DEBE APARECER */}
    <Link to={`/detalle/${id}`}>Ver detalles</Link>

    <button>Agregar al carrito</button>
  </div>
);

export default ProductCard;
