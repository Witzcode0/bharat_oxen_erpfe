import React from 'react'
import "./category.css"

function Category() {
  const categories = [
    {
      title: "Fruit Powders",
      items: ["Banana Powder", "Amla Powder", "Papaya Powder", "Apple Powder"]
    },
    {
      title: "Vegetable Powders",
      items: ["Beetroot Powder", "Carrot Powder", "Spinach Powder", "Tomato Powder"]
    },
    {
      title: "Herbal Powders",
      items: ["Neem Powder", "Tulsi Powder", "Moringa Powder", "Giloy Powder", "Ashwagandha Powder"]
    },
    {
      title: "Spices",
      items: ["Turmeric Powder", "Red Chilli Powder", "Coriander Powder", "Cumin Powder", "Black Pepper Powder"]
    },
    {
      title: "Ayurvedic Powders",
      items: ["Triphala Powder", "Shatavari Powder", "Harde", "Baheda", "Arjun Powder"]
    }
  ];

  return (
    <div className="categories-page container">
      <h2 className="categories-heading">Categories</h2>

      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div className="category-block" key={index}>
            <h3 className="category-title">{cat.title}</h3>

            <ul className="category-list">
              {cat.items.map((item, i) => (
                <li key={i} className="category-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;