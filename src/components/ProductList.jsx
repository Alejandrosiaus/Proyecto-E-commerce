import ProductCard from './ProductCard';

const ProductList = ({ products, favoritesRef, updateFavorites }) => (
  <div className="product-list">
    {products.map((p) => (
      <ProductCard
        key={p.id}
        id={p.id}
        name={p.name}
        price={p.price}
        image={p.image}
        oldPrice={p.oldPrice}
        favoritesRef={favoritesRef}
        updateFavorites={updateFavorites}

      />
    ))}
  </div>
);

export default ProductList;
