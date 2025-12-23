import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../api/fakeStore";
import "./ProductDetails.css";
import { useCartStore } from "../store/cartStore";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const loadProduct = async () => {
      const adminProducts =
        JSON.parse(localStorage.getItem("products")) || [];

      const adminProduct = adminProducts.find(
        (p) => String(p.id) === id
      );

      if (adminProduct) {
        setProduct({
          ...adminProduct,
          image:
            "https://via.placeholder.com/600x400?text=Admin+Product",
          description:
            adminProduct.description ||
            "This product was added by the admin.",
        });
        return;
      }

      const apiProduct = await getProductById(id);
      setProduct(apiProduct);
    };

    loadProduct();
  }, [id]);

  if (!product) return <p style={{ padding: "40px" }}>Loading...</p>;

  return (
    <div className="product-details-page">
      <div className="product-details-card">
        <img src={product.image} alt={product.title || product.name} />

        <h2>{product.title || product.name}</h2>
        <p className="product-price">₹{product.price}</p>

        <p className="product-description">
          {product.description}
        </p>

        {/* ✅ ADD TO CART */}
        <button
          className="add-cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back to Products
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
