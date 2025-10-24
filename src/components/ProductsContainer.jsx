import ProductCard from "./ProductCard";

const ProductsContainer = ({ products, onAddToCart }) => {
  return (
    <div className="ProductsContainer">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductsContainer;
