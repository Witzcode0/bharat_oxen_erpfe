import React from 'react'
import "./home.css"
import hero_fruits from '/src/assets/images/fruits.png'
import hero_vegs from '/src/assets/images/vegs.png'
import hero_spices from '/src/assets/images/spices.png'
import hero_herbs from '/src/assets/images/herbs.png'

function Home() {
    const adsData = [
    {
        title: "Natural Fruit Powders",
        subtitle:
            "Made from naturally ripened fruits to retain real flavor and nutrition. Ideal for smoothies, desserts, shakes, and instant mixes.",
        img: hero_fruits,
        bg: "#F3FFE6"
    },
    {
        title: "Fresh Vegetable Powders",
        subtitle:
            "Prepared from nutrient-rich vegetables while preserving essential vitamins. Perfect for soups, sauces, seasoning blends, and daily cooking.",
        img: hero_vegs,
        bg: "#E9F7FF"
    },
    {
        title: "Authentic Spice Powders",
        subtitle:
            "Finely ground from pure spices sourced directly from trusted farms. Enhances aroma, color, and taste in every dish you prepare.",
        img: hero_spices,
        bg: "#FFF2E9"
    },
    {
        title: "Premium Herbal Powders",
        subtitle:
            "Crafted from high-quality herbs to support immunity and overall wellness. Ideal for traditional remedies, detox drinks, and daily health routines.",
        img: hero_herbs,
        bg: "#E9FFE9"
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