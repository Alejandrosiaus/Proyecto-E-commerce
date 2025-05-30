import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
const ProductCard = ({ id, name, price, image, oldPrice, favoritesRef, updateFavorites }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart({ id, name, price, image });
  };
  
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        {oldPrice && (
          <p style={{ textDecoration: 'line-through', color: '#94a3b8' }}>${oldPrice}</p>
        )}
        <p>Precio: ${price}</p>
        <div className="product-buttons">
          <FavoriteButton productId={id} favoritesRef={favoritesRef} updateFavorites={updateFavorites} />
          <Link to={`/detalle/${id}`}>
            <button>Ver detalles</button>
          </Link>
          <button onClick={handleAdd}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
