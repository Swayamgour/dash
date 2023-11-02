import React from 'react';
import './ProductInfo.css';

export default function App() {
  return (
    <>
      <div className="mainDiv">

        <div className="ProductInfoMain">
          <div className="ProductInfo">Product Information</div>
          <div className="ProductInfoName">
            <label htmlFor="">Product Name</label>
            <input className='input' type="text" placeholder='Product Name' />
          </div>

         
          <div className="ProductInfoName">
            <label htmlFor="">Product Category</label>
            <select className="input">
              <option>Mens</option>
              <option>Women Bottoms</option>
              <option>Kids</option>
              <option>Seasonal Collection</option>
            </select>
          </div>

          <div className="ProductInfoName">
            <label htmlFor="">Filter</label>
            <select className="input">

              <option>Color</option>
              <option>Size</option>
              <option>Price</option>
            </select>
          </div>
          <div className="ProductInfoSwitch">
            <label htmlFor="">Exchangeble</label>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
            </div>
          </div>
          <div className="ProductInfoSwitch">
            <label htmlFor="">Exchangeble</label>

            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div>
          </div>
          <div className="ProductInfoName">
            <label htmlFor="">Product Description</label>
            <input className='input' type="text" placeholder='Product Description' />
          </div>

          <button id='buttonProduct'>Submit</button>

        </div>
       
        <div>
          <div className='Category_container'>
            <div>
              <h1>Product Inventory</h1>
            </div>
            <div>
              <span>SKU</span>
              <input type="text" placeholder='Category Name' />
            </div>
            <div>
              <span>Stock Status</span>
              <select name="icons" id="icons">
                {/* <option value="" disabled selected>Select icon</option> */}
                <option value="1">In Stock</option>
                <option value="1">Out Of Stock</option>
                <option value="1">No Back Oder</option>

              </select>
              {/* <div></div> */}
            </div>
            <div style={{  height: '40vh' }}>
              <table>
                <thead>
                  <tr>
                    <th>Variant</th>
                    <th>Price</th>
                    <th>SKU</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tr>
                  <td>red</td>
                  <td id='ProdutInfoInput1'>< input id='ProdutInfoInput'/></td>
                  <td id='ProdutInfoInput1'><input id='ProdutInfoInput'/></td>
                  <td id='ProdutInfoInput1'><input id='ProdutInfoInput'/></td>
                </tr>
                <tr>
                  <td>red</td>
                  <td id='ProdutInfoInput1'>< input id='ProdutInfoInput'/></td>
                  <td id='ProdutInfoInput1'><input id='ProdutInfoInput'/></td>
                  <td id='ProdutInfoInput1'><input id='ProdutInfoInput'/></td>
                </tr>
                <tr>
                  <td>red</td>
                  <td id='ProdutInfoInput1'>< input id='ProdutInfoInput'/></td>
                  <td id='ProdutInfoInput1'><input id='ProdutInfoInput'/></td>
                  <td id='ProdutInfoInput1'><input id='ProdutInfoInput'/></td>
                </tr>
                <tr>
                  <td>red</td>
                  <td id='ProdutInfoInput1'>< input id='ProdutInfoInput'/></td>
                  <td id='ProdutInfoInput1'><input id='ProdutInfoInput'/></td>
                  <td id='ProdutInfoInput1'><input id='ProdutInfoInput'/></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
