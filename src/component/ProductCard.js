import React from "react";
import Button from "../fragment/Button";
import "../styles/Product.css";

const ProductCard = ({ title, img, tranvalue }) => {
  return (
    <div className="card" style={{ transform: `translateX(${tranvalue}%)` }}>
      {title && <h3 className="title">{title || "title"}</h3>}
      <figure className="img-box">
        <img src={img} alt="" className="img" />
      </figure>
      <div className="price-box">
        <div className="price-value-box">
          <p className="text">price</p>
          <p className="value">$750.00</p>
        </div>
        <Button text="order" />
      </div>
    </div>
  );
};

export default ProductCard;
