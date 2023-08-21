import { useState } from "react";

import React from "react";
import Provider from "./Provider";
import Form from "./Form";
import Product from "./conponents/Product";
import ProductDetail from "./conponents/ProductDetail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CheckOut from "./conponents/CheckOut";
import AddToCartPage from "./conponents/AddToCartPage";
import "./App.css";
import Navbar from "./conponents/navbar/Navbar";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  // const [state, setState] = useState("hello");
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar cart={cart} />

      <Routes>
        <Route path="/frontend__shoppingCart/" element={<Product setCart={setCart} cart={cart} />} />
        <Route
          path="/frontend__shoppingCart/productdetail"
          element={<ProductDetail cart={cart} setCart={setCart} />}
        />
        <Route path="/frontend__shoppingCart/checkout" element={<CheckOut />} />
        <Route path="/frontend__shoppingCart/addtocartpage" element={<AddToCartPage cart={cart} />} />
      </Routes>
    </Router>
  );
};

export default App;
