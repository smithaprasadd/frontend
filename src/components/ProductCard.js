import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import "./ProductCard.css";

function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="product-card">
      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt={product.title || product.name}
      />

      <h4>{product.title || product.name}</h4>
      <p className="price">₹{product.price}</p>

      <div className="card-buttons">
        <Link to={`/product/${product.id}`} className="details-btn">
          View Details
        </Link>

        <button
          className="cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
