import { useEffect, useState } from "react";
import { getProducts as getFakeProducts } from "../api/fakeStore";
import ProductCard from "../components/ProductCard";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      const fakeProducts = await getFakeProducts();
      const adminProducts =
        JSON.parse(localStorage.getItem("products")) || [];

      setProducts([...adminProducts, ...fakeProducts]);
    };

    loadProducts();
  }, []);

  // 🔎 Search + 💰 Price filter
  const filteredProducts = products.filter((p) => {
    const nameMatch = (p.name || p.title)
      .toLowerCase()
      .includes(search.toLowerCase());

    const price = Number(p.price);

    const minMatch = minPrice ? price >= Number(minPrice) : true;
    const maxMatch = maxPrice ? price <= Number(maxPrice) : true;

    return nameMatch && minMatch && maxMatch;
  });

  return (
    <div className="home-container">
      <h2 className="home-title">All Products</h2>

      {/* FILTER BAR */}
      <div className="filter-bar">
        <input
          className="search-bar"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          className="price-input"
          type="number"
          placeholder="Min ₹"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          className="price-input"
          type="number"
          placeholder="Max ₹"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {/* PRODUCTS */}
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p className="no-results">No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
