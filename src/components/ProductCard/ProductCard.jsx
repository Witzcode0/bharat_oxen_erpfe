import React from "react";
import "./productCard.css";

function ProductCard({ product = {} }) {
  const {
    title = "",
    weight = "",
    price = "",
    oldPrice = null,
    offer = null,
    time = null,
    img = ""
  } = product;

  return (
    <div className="blinkit-card" role="article" aria-label={title}>
      {/* Offer Ribbon */}
      {product.offer && (
        <span className="offer-ribbon">
          {/* <span className="material-icons-round offer-icon">sell</span> */}
          {product.offer}
        </span>
      )}


      {/* Image */}
      <div className="card-img-box">
        <img src={img} alt={title} loading="lazy" />
      </div>

      {/* Time badge */}
      {time && (
        <div className="delivery-time">
          <span className="material-icons-round">schedule</span>
          <span>{time}</span>
        </div>
      )}

      {/* Title */}
      <h3 className="card-title">{title}</h3>

      {/* Weight */}
      <p className="card-weight">{weight}</p>

      {/* Price + Add */}
      <div className="price-row">
        <div className="price-section">
          <span className="new-price">₹{price}</span>
          {oldPrice && <span className="old-price">₹{oldPrice}</span>}
        </div>

        <button className="add-btn-outline" aria-label={`Add ${title} to cart`}>
          ADD
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
