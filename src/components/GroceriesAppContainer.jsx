import { useState } from "react";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import products from "../data/products";

const GroceriesAppContainer = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, quantity) => {
    setCart((prev_cart) => {
      const existing_item_index = prev_cart.findIndex(
        (item) => item.id === product.id
      );

      if (existing_item_index !== -1) {
        const updated_cart = [...prev_cart];
        updated_cart[existing_item_index] = {
          ...updated_cart[existing_item_index],
          cart_quantity:
            updated_cart[existing_item_index].cart_quantity + quantity,
        };
        return updated_cart;
      } else {
        return [...prev_cart, { ...product, cart_quantity: quantity }];
      }
    });
  };

  const handleUpdateQuantity = (product_id, new_quantity) => {
    setCart((prev_cart) =>
      prev_cart.map((item) =>
        item.id === product_id ? { ...item, cart_quantity: new_quantity } : item
      )
    );
  };

  const handleRemoveItem = (product_id) => {
    setCart((prev_cart) => prev_cart.filter((item) => item.id !== product_id));
  };

  const handleEmptyCart = () => {
    setCart([]);
  };

  return (
    <div>
      <NavBar username="username" has_items_in_cart={cart.length > 0} />

      <div className="GroceriesApp-Container">
        <ProductsContainer products={products} onAddToCart={handleAddToCart} />

        <CartContainer
          cart_items={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onEmptyCart={handleEmptyCart}
        />
      </div>
    </div>
  );
};

export default GroceriesAppContainer;
