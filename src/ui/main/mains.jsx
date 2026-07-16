import React, { useState, useEffect } from 'react';
import "./mains.css";

const Mains = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://uzum-api.onrender.com/api/products");
        const result = await res.json();
        setProducts(result.data);
        setLoading(false);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Yuklanmoqda...</div>;

  return (
    <div className="mains-container">
      <div className="all">
        <div>
          <h3 className='e'>Barchasi(24)</h3>
          <div className="k"></div>
        </div>
        <h3>Faol (18)</h3>
        <h3>Qoralama(16)</h3>
      </div>
      {products.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.imageUrl} alt={item.name} />
          <div className="product-info">
            <h4>{item.name}</h4>
            <p className="price">{item.discountedPrice} UZS</p>
            <p className="details">MCQ: {item.minOrderQuantity} dona | Stock: {item.stock}</p>
          </div>
          <div className="product-button">
            <button>✏️</button>
            <button>🗑️</button>
          </div>
          <div className="btn">
            <button>+ Yangi mahsulot</button>
          </div>
        </div>
      ))}
      <div className="s">
        <button>Yana yuklash</button>
      </div>
    </div>
  );
};

export default Mains;