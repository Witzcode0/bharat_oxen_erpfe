import React, { useState } from "react";
import "./productDetails.css";

/* =========================
   FAKE PRODUCT DATA (TEMP)
========================= */
const productData = {
  id: "ba67d2f6-9ae5-4627-b5a6-409e3b22bba9",
  name: "Raw Banana Powder",
  price: "380.00",
  description:
    "Raw Banana Powder is made from carefully selected, farm-fresh green bananas using a hygienic low-temperature drying process that helps retain natural nutrients. It is 100% pure with no preservatives, no added sugar, no flavors, and no chemicals, making it an excellent natural nutritional food for babies, kids, adults, diabetics, fitness-focused individuals, and the elderly. Rich in dietary fiber, potassium, magnesium, and vitamins A, C & B-complex, this powder supports good digestion, improves gut health, boosts energy levels, and keeps you full for a longer duration. Its resistant starch content promotes a healthy metabolism and aids in effective weight management.It is highly versatile and easy to use — ideal for baby porridge, smoothies, pancakes, chapati dough, baking, and daily cooking to improve nutritional value. It is trusted by parents and widely preferred by health-conscious consumers.",

  specifications: {
    Form: "Powder",
    "Fruit Type": "Raw",
    "Shelf Life": "1 Year",
    "Dried Method": "Spray Dried",
    "Packaging Type": "Packet",
    "FSSAI Certified": "Yes",
  },

  images: [
    {
      id: "1",
      image:
        "https://media.istockphoto.com/id/1141245784/photo/green-plantain-flour-musa-paradisiaca.jpg?s=612x612&w=0&k=20&c=VBdXde0wZQ4f22-QlgN8Inf2yxv_lRRZyZYrLORjM5M=",
    },
    {
      id: "2",
      image:
        "https://img.freepik.com/premium-photo/banana-flour-concept-cooking-food-tasty-banana-flour_185193-163345.jpg",
    },
    {
      id: "3",
      image:
        "https://www.cookedandloved.com/wp-content/uploads/2018/02/green-banana-flour-benefits-3-1.jpg",
    },
    {
      id: "4",
      image:
        "https://www.shutterstock.com/image-photo/tasty-bananas-bowl-flour-on-260nw-2049336209.jpg",
    },
    {
      id: "5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZqm_EC3pkIxsPn5BiQlJDoO-bgBBaWvCO9w&s",
    },
    {
      id: "6",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZqm_EC3pkIxsPn5BiQlJDoO-bgBBaWvCO9w&s",
    },
  ],
};

function ProductDetails() {
  const images = productData.images?.map((img) => img.image) || [];
  const [activeImg, setActiveImg] = useState(images[0]);
  const [qty, setQty] = useState(1);

  const increaseQty = () => setQty((q) => q + 1);
  const decreaseQty = () => setQty((q) => (q > 1 ? q - 1 : 1));

  return (
    <section className="product-details container">
      {/* ================= LEFT – IMAGE GALLERY ================= */}
      <div className="product-gallery">
        <div className="main-image">
          <img src={activeImg} alt={productData.name} />
        </div>

        <div className="thumbnail-row">
          {images.map((img, index) => (
            <div
              key={index}
              className={`thumb ${activeImg === img ? "active" : ""}`}
              onClick={() => setActiveImg(img)}
            >
              <img src={img} alt={`thumb-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT – PRODUCT INFO ================= */}
      <div className="product-info">
        {/* TITLE */}
        <h1 className="product-title">{productData.name}</h1>

        {/* TRUST BADGES */}
        <div className="trust-badges">
          <span>100% Natural</span>
          <span>FSSAI Certified</span>
          <span>No Preservatives</span>
        </div>

        {/* PRICE */}
        <div className="price-wrapper">
          <div className="price-row">
            <span className="price">₹{productData.price}</span>
            <span className="unit">per packet</span>
          </div>

          <p className="price-unit">
            Net Weight: 100g • Pack of 1
          </p>
        </div>

        {/* CART ACTIONS */}
        <div className="cart-row">
          <div className="qty-box">
            <button onClick={decreaseQty}>−</button>
            <span>{qty}</span>
            <button onClick={increaseQty}>+</button>
          </div>

          <button className="add-cart-btn">
            Add to Cart
          </button>
        </div>

        {/* DELIVERY INFO */}
        <div className="delivery-info">
          <span className="material-icons-round">schedule</span>
          Delivery in 2–4 business days
        </div>

        {/* DESCRIPTION */}
        <div className="product-description">
          <h3>About this product</h3>
          <p>{productData.description}</p>
        </div>

        {/* SPECIFICATIONS */}
        <div className="product-specs">
          <h3>Product Details</h3>
          <div className="spec-table">
            {Object.entries(productData.specifications).map(([key, value]) => (
              <div className="spec-row" key={key}>
                <span className="spec-key">{key}</span>
                <span className="spec-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
