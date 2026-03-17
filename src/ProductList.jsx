import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const [prodList, setProdList] = useState([]);

  const handleFetchProdList = () => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((prodRes) => {
        setProdList(prodRes.data);
      })
      .catch((err) => console.log("Error : ", err));
  };

  const handleProdSelect = (id) => {
    navigate(`/prodInfo/${id}`);
  };

  useEffect(() => {
    handleFetchProdList();
  }, []);

  return (
    <div className="prod_container">
      <h1 className="page-title">Featured Products</h1>
      <div className="prod_listing">
        {prodList.map((item) => (
          <div key={item.id} className="prodCard">
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="right-side">
              <span className="category">{item.category}</span>
              <h2 className="title">{item.title}</h2>

              <div className="rating-container">
                {/* Custom Star Rating using CSS variables */}
                <div
                  className="stars"
                  style={{ "--rating": item.rating.rate }}
                  aria-label={`Rating: ${item.rating.rate} out of 5`}
                ></div>
                <span className="count">({item.rating.count})</span>
              </div>

              <p className="desc">{item.description}</p>

              <div className="card-footer">
                <span className="price">${item.price.toFixed(2)}</span>
                <button
                  onClick={() => handleProdSelect(item.id)}
                  className="view-btn"
                >
                  View Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
