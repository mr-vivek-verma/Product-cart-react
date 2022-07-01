import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import Product from "./Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const dataContext = createContext();

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <dataContext.Provider value={{ data: products }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/:product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </dataContext.Provider>
  );
};

export default App;
export { dataContext };
