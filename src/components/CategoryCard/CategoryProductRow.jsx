import React, { useRef } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./categoryProductRow.css";

function CategoryProductRow({ title, products = [], link = "#" }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = 260; // card width + gap
    scrollRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="category-row">
      <div className="container">
        {/* HEADER */}
        <div className="category-header">
          <h2 className="category-title">{title}</h2>

          <div className="header-actions">
            <button className="scroll-btn" onClick={() => scroll("left")}>
              <span className="material-icons-round">chevron_left</span>
            </button>

            <button className="scroll-btn" onClick={() => scroll("right")}>
              <span className="material-icons-round">chevron_right</span>
            </button>

            <a href={link} className="see-all">
              See All <span className="material-icons-round">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* HORIZONTAL SCROLLER */}
        <div className="category-slider" ref={scrollRef}>
          {products.map((product, index) => (
            <div className="category-card-wrapper" key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryProductRow;
