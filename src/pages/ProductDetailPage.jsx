import { useParams } from 'react-router-dom';
import sword1 from '../assets/sword1.png';
import sword2 from '../assets/sword2.png';
import sword3 from '../assets/sword3.png';

const products = [
  {
    id: 1,
    name: 'Master Sword',
    price: 299.99,
    image: sword1,
    description: 'La legendaria espada de Link, imbuida con poder sagrado para derrotar el mal en Hyrule.'
  },
  {
    id: 2,
    name: 'Crucible',
    price: 349.99,
    image: sword2,
    description: 'La poderosa espada de DOOM Eternal, capaz de destruir demonios con un solo corte.'
  },
  {
    id: 3,
    name: 'Saw Cleaver',
    price: 269.99,
    image: sword3,
    description: 'Una brutal arma de Bloodborne, ideal para combates cuerpo a cuerpo en Yharnam.'
  }
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width="200" />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ProductDetailPage;
