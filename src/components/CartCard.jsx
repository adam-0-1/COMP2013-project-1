import QuantityCounter from "./QuantityCounter";

const CartCard = ({ item, onUpdateQuantity, onRemoveItem }) => {
  const handleIncrease = () => {
    onUpdateQuantity(item.id, item.cart_quantity + 1);
  };

  const handleDecrease = () => {
    if (item.cart_quantity > 1) {
      onUpdateQuantity(item.id, item.cart_quantity - 1);
    }
  };

  const price_num = parseFloat(item.price.replace("$", ""));
  const subtotal = (price_num * item.cart_quantity).toFixed(2);

  return (
    <div className="CartCard">
      <div className="CartCardInfo">
        <img src={item.image} alt={item.productName} />
        <p>{item.productName}</p>
        <p>{item.price}</p>
        <QuantityCounter
          quantity={item.cart_quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          min_value={1}
        />
      </div>

      <div className="CartCardInfo">
        <p>Total: ${subtotal}</p>
        <button onClick={() => onRemoveItem(item.id)} className="RemoveButton">
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default CartCard;