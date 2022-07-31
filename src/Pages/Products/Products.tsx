import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../Product/Product";
import { ProductList } from "./ProductList";
import "./Products.css";

export const Products = (): ReactElement => {
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="products-box">
        {ProductList.filter((Product) =>
          Product.name.toLowerCase().includes(query)
        ).map((product) => (
          <Link
            to={`/products/${product.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="product-box" key={product.id}>
              <img className="image" src={product.image} />
              <div className="name">{product.name}</div>
              <div className="price">{product.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
