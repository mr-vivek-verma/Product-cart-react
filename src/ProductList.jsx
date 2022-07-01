import React, { useContext } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { dataContext } from "./App";
import "./styles.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const productList = useContext(dataContext);
  const { data } = productList;
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row gy-5">
          {data?.map((items) => {
            return (
              <div className="col-xxl-3 col-xl-4 col-lg-6" key={items.id}>
                <div className="card" onClick={() => navigate(`/${items.id}`)}>
                  <div className="card__img">
                    <img src={items.image} alt={items.title} />
                  </div>
                  <div className="card__category">{items.category}</div>
                  <div className="card__wrapper">
                    <p>{items.title}</p>
                    <span>{items.price}</span>
                  </div>
                  <div className="card__rating">
                    {items.rating.rate}

                    <div className="card__addCart">
                      <box-icon name="cart-add" color="#ffffff"></box-icon>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
