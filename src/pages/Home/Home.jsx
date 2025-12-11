import React from 'react'
import "./home.css"

function Home() {
    const adsData = [
        {
            title: "Pure Food Powders",
            subtitle: "Made from high-quality natural ingredients to support everyday nutrition. Perfect for smoothies, bakery use, and healthy meal preparations.",
            img: "/src/assets/images/fruits.png",
            bg: "#ffffff"
        },
        {
            title: "Premium Herbal Powders",
            subtitle: "Carefully processed herbs that maintain maximum freshness and potency. Ideal for boosting immunity, digestion, and overall wellness.",
            img: "/src/assets/images/vegs.png",
            bg: "#ffffff"
        },
        {
            title: "Ayurvedic Powders",
            subtitle: "Traditional ayurvedic formulations crafted with authentic techniques. Supports natural healing, detoxification, and long-term health balance.",
            img: "/src/assets/images/herbs.png",
            bg: "#ffffff"
        },
        {
            title: "Authentic Spice Powders",
            subtitle: "Finely ground spices that bring rich aroma and bold flavor to every dish. Sourced from trusted farms to ensure purity and freshness.",
            img: "/src/assets/images/spices.png",
            bg: "#ffffff"
        }
    ];


    return (
        <>
            <div className="container ads-section">
                <div className="ads-grid">
                    {adsData.map((ad, index) => (
                        <div
                            key={index}
                            className="ads-card"
                            style={{ backgroundColor: ad.bg }}
                        >
                            <div className="ads-content">
                                <h3>{ad.title}</h3>
                                <p>{ad.subtitle}</p>
                                <button className="ads-btn">Explore Now</button>
                            </div>

                            <img src={ad.img} alt={ad.title} className="ads-img" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home