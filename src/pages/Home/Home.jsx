import React from 'react'
import "./home.css"
import hero_fruits from '/src/assets/images/fruits.png'
import hero_vegs from '/src/assets/images/vegs.png'
import hero_spices from '/src/assets/images/spices.png'
import hero_herbs from '/src/assets/images/herbs.png'
import CategoryProductRow from '../../components/CategoryCard/CategoryProductRow'

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

  const foodPowderProducts = [
    {
      title: "Amla Powder",
      weight: "100 g",
      price: 80,
      oldPrice: 90,
      offer: "10% OFF",
      time: "6 MINS",
      img: "https://www.gomataseva.org/wp-content/uploads/2023/10/Amla-Powder.webp"
    },
    {
      title: "Banana Powder",
      weight: "200 g",
      price: 150,
      oldPrice: 160,
      time: "5 MINS",
      img: "https://seller.aarral.in/product/fe372ef5bed136834c13858e0b6b1df3ef3f7510/raw-nendran-banana-powder.png"
    },
    {
      title: "Beetroot Powder",
      weight: "150 g",
      price: 120,
      offer: "5% OFF",
      oldPrice: 130,
      time: "7 MINS",
      img: "https://img.kompass.com/sys-master-images/h87/hc3/9769239969822/beetroot-powder-jpg"
    },
    {
      title: "Ginger Powder",
      weight: "100 g",
      price: 90,
      oldPrice: 95,
      time: "6 MINS",
      img: "https://freshlyfermented.co.uk/wp-content/uploads/2019/08/Ginger-Powder.jpeg"
    },
    {
      title: "Garlic Powder",
      weight: "100 g",
      price: 95,
      oldPrice: 100,
      offer: "5% OFF",
      time: "8 MINS",
      img: "https://img500.exportersindia.com/product_images/bc-500/2024/9/12914521/garlic-powder-1726293914-7602514.jpeg"
    },
    {
      title: "Garlic Powder",
      weight: "100 g",
      price: 95,
      oldPrice: 100,
      offer: "5% OFF",
      time: "8 MINS",
      img: "https://img500.exportersindia.com/product_images/bc-500/2024/9/12914521/garlic-powder-1726293914-7602514.jpeg"
    }
  ];
  const herbalPowderProducts = [
    {
      title: "Ashwagandha Powder",
      weight: "100 g",
      price: 180,
      oldPrice: 205,
      offer: "12% OFF",
      time: "7 MINS",
      img: "https://www.shutterstock.com/image-photo/ashwaganda-indian-ginseng-powder-wooden-600nw-2414030709.jpg"
    },
    {
      title: "Neem Powder",
      weight: "100 g",
      price: 90,
      oldPrice: 95,
      time: "6 MINS",
      img: "https://tiimg.tistatic.com/fp/1/008/182/pure-herbal-neem-leaf-powder-for-healthy-skin-weight-loss-992.jpg"
    },
    {
      title: "Tulsi Powder",
      weight: "100 g",
      price: 85,
      oldPrice: 90,
      time: "7 MINS",
      img: "https://earthessence.in/wp-content/uploads/2024/12/tulsi-leaves-powder-without-logo-add-tulsi-plant-1.png"
    },
    {
      title: "Moringa Powder",
      weight: "150 g",
      price: 140,
      oldPrice: 150,
      time: "8 MINS",
      img: "https://5.imimg.com/data5/SELLER/Default/2024/3/399696833/QK/CK/MZ/216404903/bitmap-png-500x500.png"
    },
    {
      title: "Giloy Powder",
      weight: "100 g",
      price: 120,
      oldPrice: 130,
      offer: "8% OFF",
      time: "6 MINS",
      img: "https://www.greendna.in/cdn/shop/files/giloy-extract_1000x.jpg?v=1748434207"
    }
  ];
  const ayurvedicProducts = [
    {
      title: "Triphala Powder",
      weight: "200 g",
      price: 160,
      oldPrice: 180,
      offer: "10% OFF",
      time: "7 MINS",
      img: "/img/triphala.png"
    },
    {
      title: "Shatavari Powder",
      weight: "100 g",
      price: 130,
      oldPrice: 140,
      time: "5 MINS",
      img: "/img/shatavari.png"
    },
    {
      title: "Haritaki (Harde) Powder",
      weight: "100 g",
      price: 90,
      oldPrice: 100,
      time: "6 MINS",
      img: "/img/harde.png"
    },
    {
      title: "Baheda Powder",
      weight: "100 g",
      price: 95,
      oldPrice: 105,
      time: "7 MINS",
      img: "/img/baheda.png"
    },
    {
      title: "Arjuna Powder",
      weight: "100 g",
      price: 140,
      oldPrice: 155,
      time: "8 MINS",
      img: "/img/arjuna.png"
    }
  ];
  const spiceProducts = [
    {
      title: "Turmeric Powder",
      weight: "100 g",
      price: 70,
      oldPrice: 82,
      offer: "15% OFF",
      time: "6 MINS",
      img: "/img/turmeric.png"
    },
    {
      title: "Red Chilli Powder",
      weight: "100 g",
      price: 85,
      oldPrice: 95,
      time: "8 MINS",
      img: "/img/chilli.png"
    },
    {
      title: "Coriander Powder",
      weight: "100 g",
      price: 65,
      oldPrice: 75,
      offer: "5% OFF",
      time: "7 MINS",
      img: "/img/coriander.png"
    },
    {
      title: "Cumin Powder",
      weight: "100 g",
      price: 95,
      oldPrice: 105,
      time: "6 MINS",
      img: "/img/cumin.png"
    },
    {
      title: "Black Pepper Powder",
      weight: "50 g",
      price: 120,
      oldPrice: 135,
      offer: "5% OFF",
      time: "5 MINS",
      img: "/img/blackpepper.png"
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

      <CategoryProductRow title="Food Powders" products={foodPowderProducts} link="/category/food-powders" />
      <CategoryProductRow title="Food Powders" products={herbalPowderProducts} link="/category/food-powders" />
      <CategoryProductRow title="Food Powders" products={foodPowderProducts} link="/category/food-powders" />
      <CategoryProductRow title="Food Powders" products={herbalPowderProducts} link="/category/food-powders" />



    </>
  )
}

export default Home