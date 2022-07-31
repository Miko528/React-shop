import React from "react";
import { useParams } from "react-router-dom";
import { ProductList } from "../Products/ProductList";

import "./Product.css";

export const Product = () => {
  const { id } = useParams();
  const found = ProductList.find((product) => product.id == id);

  console.log(found);
  return (
    <div className="container">
      <div className="image-space">
        <img className="images" src={found?.image} />
      </div>
      <div className="details-space">
        <div className="names">{found?.name}</div>
        <div className="prices">{found?.price}</div>
      </div>
    </div>
  );
};
