import {
  Outlet,
  Link,
  useSearchParams,
} from "react-router-dom";

import useFetchProducts from "../hooks/useFetchProducts";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import "../styles/Products.css";
function Products() {
  const {
    products,
    loading,
  } = useFetchProducts(
    "https://fakestoreapi.com/products"
  );

  const [
    searchParams,
    setSearchParams,
  ] = useSearchParams();

  const search =
    searchParams.get("search") ||
    "";

  const filteredProducts =
    products.filter(product =>
      product.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  if (loading)
    return <Loader />;

  return (
    <div className="container">
      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e =>
          setSearchParams({
            search:
              e.target.value,
          })
        }
      />

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <Link to="electronics">
          Electronics
        </Link>

        {" | "}

        <Link to="jewelery">
          Jewelery
        </Link>

        {" | "}

        <Link to="clothing">
          Clothing
        </Link>
      </div>

      <Outlet />

      <div className="products-grid">
        {filteredProducts.map(
          product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Products;