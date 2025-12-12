import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./categoryProductRow.css";

function CategoryProductRow({ title, products = [], link = "#" }) {
  // ensure we always pass 5 (or fewer) products
  const items = Array.isArray(products) ? products.slice(0, 5) : [];

  return (
    <section className="category-row container">
      <div className="category-header">
        <h2 className="category-title">{title}</h2>
        <a href={link} className="see-all">See All <span className="material-icons-round">arrow_forward</span></a>
      </div>

      <div className="category-product-grid">
        {items.map((p, idx) => (
          <div className="category-card-wrapper" key={idx}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryProductRow;
