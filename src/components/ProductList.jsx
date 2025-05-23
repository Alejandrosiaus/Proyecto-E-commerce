import ProductCard from './ProductCard';

const ProductList = ({ products }) => (
  <div>
    {products.map((p) => (
      <ProductCard
        key={p.id}
        id={p.id}           
        name={p.name}
        price={p.price}
        image={p.image}
      />
    ))}
  </div>
);

export default ProductList;
