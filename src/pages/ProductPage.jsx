import ProductList from '../components/ProductList';
import sword1 from '../assets/sword1.png';
import sword2 from '../assets/sword2.png';
import sword3 from '../assets/sword3.png';

const dummyProducts = [
  {
    id: 1,
    name: 'Master Sword',
    price: 299.99,
    image: sword1
  },
  {
    id: 2,
    name: 'Crucible',
    price: 349.99,
    image: sword2
  },
  {
    id: 3,
    name: 'Saw Cleaver',
    price: 269.99,
    image: sword3
  }
];

const ProductPage = () => (
  <div>
    <h1>Catálogo de Espadas</h1>
    <ProductList products={dummyProducts} />
  </div>
);

export default ProductPage;
