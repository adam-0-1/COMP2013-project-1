import { useState } from "react";
import QuantityCounter from "./QuantityCounter";

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity === 0) {
      alert("Please select a quantity greater than 0 before adding to cart.");
      return;
    }
    onAddToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="ProductCard">
      <h3>{product.productName}</h3>
      <img src={product.image} alt={product.productName} />
      <p>{product.brand}</p>
      <p>{product.quantity}</p>

      <QuantityCounter
        quantity={quantity}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        min_value={1}
      />

      <p>{product.price}</p>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
