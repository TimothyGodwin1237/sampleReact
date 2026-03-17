import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductInfo = () => {
  const navigate = useNavigate();
  const { prodId } = useParams();

  const handleBack = () => {
    navigate("/prodListing");
  };

  return (
    <div>
      <button onClick={() => handleBack()}>Back</button>
      <p>ProductInfo : {prodId}</p>
    </div>
  );
};

export default ProductInfo;


// https://fakestoreapi.com/products/3