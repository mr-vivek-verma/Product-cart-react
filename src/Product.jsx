import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const Product = () => {
  const [products, setProducts] = useState([]);
  const { product } = useParams();

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${product}`
      );
      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          {products && (
            <div className="col-8">
              <div className="product">
                <div className="product__img">
                  <img src={products.image} alt={products.title} />
                </div>
                <div className="product__category">{products.category}</div>
                <div className="product__wrapper">
                  <p>{products.title}</p>
                  <span>
                    <box-icon name="dollar" color="#ffffff"></box-icon>
                    {products.price}
                  </span>
                </div>
                <div className="product__desc">
                  <p>{products.description}</p>
                </div>
                <div className="product__addCart">
                  <box-icon name="cart-add" color="#ffffff"></box-icon>
                  Add To Cart
                </div>
              </div>
            </div>
          )}

          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};

export default Product;
