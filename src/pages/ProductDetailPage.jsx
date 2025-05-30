import { useParams } from 'react-router-dom';
import { useContext, useEffect, useMemo } from 'react';
import { CartContext } from '../contexts/CartContext';
import { products } from '../data/products';
import { visitedIds } from '../data/visited';
import Navbar from '../components/Navbar';


const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const productId = Number(id);

  const product = products.find((p) => p.id === productId);

  // Guardar producto visitado globalmente
  useEffect(() => {
    if (product) {
      visitedIds.add(product.id);
    }
  }, [product]);

  const recommendations = useMemo(() => {
    if (!product) return [];

    // Buscar productos de la misma franquicia no visitados
    const sameFranchise = products.filter(
      (p) =>
        p.id !== product.id &&
        p.franchise === product.franchise &&
        !visitedIds.has(p.id)
    );

    if (sameFranchise.length > 0) return sameFranchise.slice(0, 3);

    // Si no hay más de la misma franquicia, recomendar otros no visitados
    const other = products.filter(
      (p) =>
        p.id !== product.id &&
        !visitedIds.has(p.id)
    );

    return other.slice(0, 3);
  }, [product]);

  if (!product) return <p>Producto no encontrado</p>;

  return (
  <div className="product-container">
    <h1 className="metal-title">{product.name}</h1>
    <div className="rating">
  {[1, 2, 3, 4, 5].map((star) => (
    <span key={star}>
      {star <= product.rating ? '★' : '☆'}
    </span>
  ))}
</div>

    <img src={product.image} alt={product.name} width="200" />
    <p>{product.description}</p>

    {product.oldPrice && (
      <p style={{ textDecoration: 'line-through', color: '#94a3b8' }}>${product.oldPrice}</p>
    )}
    <p style={{ fontSize: '18px' }}>Precio: ${product.price}</p>
    <button onClick={() => addToCart(product)}>Agregar al carrito</button>

    <hr />
    <h2 className="metal-title">Recomendaciones</h2>
    {recommendations.length === 0 && <p>No hay más productos por recomendar.</p>}
    <div className="recommendations">
      {recommendations.map((rec) => (
        <div className="card" key={rec.id}>
          <p>{rec.name}</p>
          <img src={rec.image} alt={rec.name} width="100" />
          <p>${rec.price}</p>
        </div>
      ))}
    </div>
  </div>
);

};

export default ProductDetailPage;
