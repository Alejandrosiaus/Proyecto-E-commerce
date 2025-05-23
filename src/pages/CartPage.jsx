import CartItem from '../components/CartItem';
import sword1 from '../assets/sword1.png';
import sword2 from '../assets/sword2.png';
import sword3 from '../assets/sword3.png';

const dummyCart = [
  { id: 1, name: 'Master Sword', price: 299.99, quantity: 1, image: sword1 },
];

const CartPage = () => {
  return (
    <div>
      <h1>Tu Carrito</h1>
      {dummyCart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <p>Total: $299.99</p>
      <button>Vaciar carrito</button>
      <button>Comprar</button>
    </div>
  );
};

export default CartPage;
