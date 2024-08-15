import React from 'react';
import './Refurbished.css';
import product1 from './Images/product1.jpg';
import product2 from './Images/product2.jpg';
import product3 from './Images/product3.jpg';
import product4 from './Images/product4.jpg';

const Products = () => {
  return (
    <div className='overrall'>
      <div className='refur'>
        <h2>Refurbished Products</h2>
        <div className='more'>
          <a href=''><p>More</p></a>
        </div>
      </div>
      <div className="products-container">
        <div className="product-card">
          <img src={product1} alt='1' className="product-image" />
          <div className="product-details">
            <h4>Casio Unisex 36.8 x 33.2 x 8.2mm Vintage COLLECTIONA-158WA-1Q Grey Dial Metal Watch - D011(Refurbished)</h4>
            <div className="buttons">
              <a href='https://www.amazon.in/Casio-Vintage-Digital-Grey-Watch-A158WA-1Q/dp/B000GAYQJ0'>
              <button className="buy-button">Buy Now</button></a>
            </div>
          </div>
        </div>
        <div className="product-card">
          <img src={product2} alt='2' className="product-image" />
          <div className="product-details">
            <h4>Casio Digital Brown Dial Unisex's Watch-A168WA-8AYDF(Refurbished)</h4>
            <div className="buttons">
              <a href='https://www.casioindiashop.com/Watches/D332/Casio-A168WA-8AYDF-D332.html'>
              <button className="buy-button">Buy Now</button></a>
            </div>
          </div>
        </div>
        <div className="product-card">
          <img src={product3} alt='3' className="product-image" />
          <div className="product-details">
            <h4>Samsung Galaxy A25 5G (Yellow, 8GB, 128GB Storage) | 50 MP Main Camera (Refurbished)</h4>
            <div className="buttons">
              <a href='https://www.flipkart.com/samsung-galaxy-a25-5g-yellow-128-gb/p/itm0225df5882663?pid=MOBGWD85EF6STNGF&affExtParam1=401684&affExtParam2=92e86a634742f01a979e8bcffe8e6dbd'>
              <button className="buy-button">Buy Now</button></a>
            </div>
          </div>
        </div>
        <div className="product-card">
          <img src={product4} alt='4' className="product-image" />
          <div className="product-details">
            <h4>OnePlus Nord CE4 Lite 5G (Super Silver, 8GB RAM, 128GB Storage)(Refurbished)</h4>
            <div className="buttons">
              <a href='https://www.flipkart.com/oneplus-nord-ce4-lite-5g-super-silver-128-gb/p/itm8fd5fdf300955?pid=MOBH25ZDPHNF38XJ&lid=LSTMOBH25ZDPHNF38XJZJCAVP&marketplace=FLIPKART'>
              <button className="buy-button">Buy Now</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
