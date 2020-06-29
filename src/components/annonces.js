import React from "react";
import "./annonces.css";

const Annonce = () => {
  return (
    <div className="annonce-card">
      <span className="slogan">THE EARLIER YOU BOOK ... THE LESS YOU PAY</span>
      <div className="promo"> <p className="promo-title">SUPER PROMO </p> <p className="promo-text">on the price of your vacation</p></div>
      <div className="discount"><p className="discount-text" >-30%</p></div>
    </div>
  );
};

export default Annonce;
