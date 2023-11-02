import React from 'react';
import './AddAttribute.css';
import Home from '../../pages/Home/Home';

export default function App() {
  return (
    <>
      {/* <Home /> */}
      <div className="AddAttribute-mainDiv">

        <div className="AddAttribute-ProductInfoMain">
        <div className="AddAttribute-ProductInfo" >Add Attribute</div>

          <div className="AddAttribute-ProductInfoName">
            <label htmlFor="">Attribute Name</label>
            <input className='AddAttribute-input' type="text" placeholder='Product Name' />
          </div>

          <div className="AddAttribute-ProductInfoName">
            <label htmlFor="">Attribute Value</label>
            <input className='AddAttribute-input' type="text" placeholder='Product Name' />

          </div>
          <button>Submit</button>
        </div>
      </div>
    </>
  );
}
