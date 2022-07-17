import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

export const Navigation = (): ReactElement => {
  return (
    <div>
      <Link to={"/"}>MainPage</Link>
      <Link to={"/products"}>Products</Link>
    </div>
  );
};
