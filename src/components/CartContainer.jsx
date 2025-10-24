import CartCard from "./CartCard";

const CartContainer = ({
  cart_items,
  onUpdateQuantity,
  onRemoveItem,
  onEmptyCart,
}) => {
  const calculateTotal = () => {
    return cart_items
      .reduce((total, item) => {
        const price_num = parseFloat(item.price.replace("$", ""));
        return total + price_num * item.cart_quantity;
      }, 0)
      .toFixed(2);
  };

  const total_items = cart_items.reduce(
    (sum, item) => sum + item.cart_quantity,
    0
  );

  return (
    <div className="CartContainer">
          <h2>Cart Items: {cart_items.length}</h2>

      {cart_items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <div>
            {cart_items.map((item) => (
              <CartCard
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemoveItem={onRemoveItem}
              />
            ))}
          </div>

          <div className="CartListBtns">
            <button onClick={onEmptyCart} className="RemoveButton">
              Empty Cart
            </button>
            <button id="BuyButton">Buy ${calculateTotal()}</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartContainer;
