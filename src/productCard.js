import React from "react";
import ProductList from "./ProductList";
import "./styles.css";
const ProductCard = () => {
  // const { title, image } = movie;
  return (
    <>
      <div className="card">
        {/* <img src={image} alt={title} height="100" width="100" />
      <p>{title}</p> */}
        <ProductList />
      </div>
    </>
  );
};

export default ProductCard;
