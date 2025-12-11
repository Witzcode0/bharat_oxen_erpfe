import React from 'react'
import "./home.css"
import hero_fruits from '/src/assets/images/fruits.png'
import hero_vegs from '/src/assets/images/fruits.png'
import hero_spices from '/src/assets/images/fruits.png'
import hero_herbs from '/src/assets/images/fruits.png'

function Home() {
    const adsData = [
    {
        title: "Pure Food Powders",
        subtitle:
            "Made from premium natural fruits and grains to support daily nutrition. Ideal for smoothies, shakes, baking mixes, and healthy recipes.",
        img: hero_fruits,
        bg: "#F3FFE6"
    },
    {
        title: "Premium Herbal Powders",
        subtitle:
            "Processed from fresh and potent herbs to retain maximum medicinal value. Perfect for boosting immunity, digestion, and overall wellness.",
        img: hero_herbs,
        bg: "#E9FFE9"
    },
    {
        title: "Ayurvedic Powders",
        subtitle:
            "Authentic ayurvedic formulations prepared following traditional techniques. Helps in natural healing, detoxification, and body balance.",
        img: hero_ayurveda,
        bg: "#FFF4E5"
    },
    {
        title: "Authentic Spice Powders",
        subtitle:
            "Pure, aromatic spices sourced from trusted farms. Enhances flavor, color, and taste in your everyday cooking.",
        img: hero_spices,
        bg: "#FFF2E9"
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