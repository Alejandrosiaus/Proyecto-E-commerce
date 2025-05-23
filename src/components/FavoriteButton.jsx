import { useRef } from 'react';

const FavoriteButton = () => {
  const liked = useRef(false);

  const toggle = () => {
    liked.current = !liked.current;
    alert(liked.current ? 'Guardado' : 'Eliminado');
  };

  return <button onClick={toggle}>❤️ Favorito</button>;
};

export default FavoriteButton;
