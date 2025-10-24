import cart_empty from "../assets/cart-empty.png";
import cart_full from "../assets/cart-full.png";

const NavBar = ({ username, has_items_in_cart }) => {
  return (
    <nav className="NavBar">
      <div className="NavDiv NavUser">
        <span>Hello, {username}</span>
      </div>

      <div className="NavDiv NavTitle">
        <h1>Groceries App &#127822;</h1>
      </div>

      <div className="NavDiv NavCart">
        <img
          src={has_items_in_cart ? cart_full : cart_empty}
          alt={has_items_in_cart ? "Cart with items" : "Empty cart"}
        />
      </div>
    </nav>
  );
};

export default NavBar;
