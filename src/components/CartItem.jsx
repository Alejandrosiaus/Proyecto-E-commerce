const CartItem = ({ name, price, quantity, image }) => (
  <div>
    <img src={image} alt={name} width="100" />
    <p>{name}</p>
    <p>${price}</p>
    <p>Cantidad: {quantity}</p>
  </div>
);

export default CartItem;
