import { useContext, useMemo } from 'react';
import { CartContext } from '../contexts/CartContext';
import Navbar from '../components/Navbar';
import './CartPage.css';

const CartPage = () => {
  const { cart, clearCart, increaseQty, decreaseQty } = useContext(CartContext);

  const total = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cart]);

  const handleBuy = () => {
    if (total > 999.99) {
      alert('Error: El total del carrito supera los $999.99. Elimina productos antes de comprar.');
      return;
    }

    alert('Gracias por tu compra!');
    clearCart();
  };


  return (
    <>
      <div className="cart-page">
        <h2 className="metal-title">Tu carrito</h2>
        <div className="cart-summary">
          <p>Total: ${total.toFixed(2)}</p>
          {total > 999.99 && (
            <p style={{ color: 'red', fontWeight: 'bold' }}>
               ❌ Error: El total del carrito supera el límite permitido de $999.99. Elimina algún producto para continuar con la compra.
            </p>
          )}

          <div>
            <button onClick={clearCart}>Vaciar carrito</button>
            <button onClick={handleBuy}>Comprar</button>
          </div>
        </div>

        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <div>
                <button onClick={() => increaseQty(item.id)}>+</button>
                <button onClick={() => decreaseQty(item.id)}>-</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CartPage;
