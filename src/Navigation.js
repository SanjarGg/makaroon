import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./Pages/AllProducts";
import MainPage from "./Pages/MainPage";
import Sale from "./Pages/Sale";

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="sale" element={<Sale />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navigation;
