import React from 'react';
import './ProductInfo.css';
import Home from '../../pages/Home/Home';

export default function App() {
  return (
    <>
    <Home />
    <div className="mainDiv">
      <div className="ProductInfo">Product Information</div>

      <div className="ProductInfoMain">
        <div className="ProductInfoName">
          <label htmlFor="">Product Name</label>
          <input className='input' type="text"  placeholder='Product Name' />
        </div>

        <div className="ProductInfoName">
          <label htmlFor="">Product Type</label>
          <select className="input">
            <option>Simple</option>
            <option>Classified</option>
          </select>
        </div>
        <div className="ProductInfoName">
          <label htmlFor="">Category</label>
          <select className="input">
            <option>Ethnic Wear</option>
            <option>Ethnic Bottoms</option>
            <option>Women Western</option>
            <option>Sandels</option>
          </select>
        </div>
        <div className="ProductInfoName">
          <label htmlFor="">Subcategory</label>
          <select className="input">
          <option>Ethnic Wear</option>
            <option>Ethnic Bottoms</option>
            <option>Women Western</option>
            <option>Sandels</option>
          </select>
        </div>
        <div className="ProductInfoName">
          <label htmlFor="">Brand</label>
          <select className="input">
          <option>Ethnic Wear</option>
            <option>Ethnic Bottoms</option>
            <option>Women Western</option>
            <option>Sandels</option>
          </select>
        </div>
        <div className="ProductInfoName">
          <label htmlFor="">Tags</label>
          <select className="input">
          <option>Ethnic Wear</option>
            <option>Ethnic Bottoms</option>
            <option>Women Western</option>
            <option>Sandels</option>
          </select>
        </div>
        <div className="ProductInfoName">
          <label htmlFor="">Brand</label>
          <select className="input">
          <option>Ethnic Wear</option>
            <option>Ethnic Bottoms</option>
            <option>Women Western</option>
            <option>Sandels</option>
          </select>
        </div>
        <button>Submit</button>
      </div>
    </div>
    </>
  );
}
