import { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";

export const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};
