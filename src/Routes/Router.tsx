import { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import MainPage from "../Pages/MainPage/MainPage";
import { Product } from "../Pages/Product/Product";
import { Products } from "../Pages/Products/Products";

export const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
