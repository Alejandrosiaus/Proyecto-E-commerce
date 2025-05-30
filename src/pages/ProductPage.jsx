import { products } from '../data/products';
import ProductList from '../components/ProductList';
import { useRef, useState } from 'react';
import './ProductPage.css'; 



const ProductPage = () => {
  const favorites = useRef([]);
  const [, forceUpdate] = useState(0);

  const updateFavorites = () => {
    forceUpdate((n) => n + 1);
  };

  return (
    <div className="product-page">
      <p className="favorites-count">Favoritos marcados: {favorites.current.length}</p>
      <div className="intro">
      <h2>Bienvenido a GameBlades</h2>
      <p>
        En nuestras forjas nos dedicamos a crear las espadas mas legendarias del mundo de los videojuegos, trayendo tus sueños de ser un espadachin legendario a la realidad. <br />
        Desde reinos de fantasia hasta mundos distopicos, aqui encontraras replicas reales de tus armas favoritas, forjadas con precision y pasion <br />
        ¡Consigue con tu espada ideal y conviertete en el herore que estas destinado a ser!
      </p>
      </div>
      <h1>Catálogo de Espadas</h1>
      <ProductList
        products={products}
        favoritesRef={favorites}
        updateFavorites={updateFavorites}
      />
    </div>

  );
};

export default ProductPage;
