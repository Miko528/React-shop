import React, { ReactElement } from "react";
import { ProductList } from "./ProductList";

export const Products = (): ReactElement => {
  return (
    <div>
      {ProductList.map((product) => (
        <div> {product.name} </div>
      ))}
    </div>
  );
};
