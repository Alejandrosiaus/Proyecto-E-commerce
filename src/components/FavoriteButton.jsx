import { useState, useEffect } from 'react';

const FavoriteButton = ({ productId, favoritesRef, updateFavorites }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favoritesRef.current.includes(productId));
  }, [productId, favoritesRef]);

  const toggleFavorite = () => {
    if (favoritesRef.current.includes(productId)) {
      favoritesRef.current = favoritesRef.current.filter((id) => id !== productId);
      setIsFavorite(false);
    } else {
      favoritesRef.current.push(productId);
      setIsFavorite(true);
    }

    updateFavorites();
    console.log('Historial actual de favoritos:', favoritesRef.current);
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? '💔 Quitar de favoritos' : '❤️ Agregar a favoritos'}
    </button>
  );
};

export default FavoriteButton;
