import React from 'react';
import './Product.css'
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import { GrEdit } from "@react-icons/all-files/gr/GrEdit";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import Home from '../../pages/Home/Home';
import { useNavigate } from 'react-router-dom';





const products = [
  {
    productId: 1,
    productName: 'Product A',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 10,
    price: 25.99,
    status: 'In Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
  {
    productId: 2,
    productName: 'Product B',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 2',
    currentQuantity: 5,
    price: 19.99,
    status: 'Out of Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
  {
    productId: 3,
    productName: 'Product C',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 15,
    price: 32.99,
    status: 'In Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />]
  },
  {
    productId: 1,
    productName: 'Product A',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 10,
    price: 25.99,
    status: 'In Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
  {
    productId: 2,
    productName: 'Product B',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 2',
    currentQuantity: 5,
    price: 19.99,
    status: 'Out of Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
  {
    productId: 3,
    productName: 'Product C',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 15,
    price: 32.99,
    status: 'In Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
  {
    productId: 3,
    productName: 'Product C',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 15,
    price: 32.99,
    status: 'In Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
  {
    productId: 3,
    productName: 'Product C',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 15,
    price: 32.99,
    status: 'In Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
  {
    productId: 3,
    productName: 'Product C',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 15,
    price: 32.99,
    status: 'In Stock',
    options: [<AiFillEye />, <GrEdit />, <AiFillDelete />],
  },
];



const Product = () => {
  const nav = useNavigate()

  const handelClick = () => {
    nav('/ProductInfo')
  }
  return (
    <>
      {/* <Home /> */}
      <div className='Product-appp'>
        <div className="Product-App">
          <div className='Product-ProductAndButton'>
            <h1 className='Product-ProductTitle' style={{ padding: '1rem', fontFamily: 'rosemary' }}>
              Products List
            </h1>
            <button onClick={handelClick} className='Product-AddProduct'>Add Product</button>
          </div>
          <div className='Product-SearchButton'>
            search <input id='Input' placeholder='Search' />
          </div>
          <div className='Product-TableSection'>
            <table >
              <thead>
                <tr   >

                  <th className='this'>Product Image</th>
                  <th className='this'>Product Name</th>
                  <th className='this'>Category</th>
                  <th className='this'>Current Qty</th>
                  <th className='this'>Price</th>
                  <th className='this'>Status</th>
                  <th className='this'>Option</th>
                </tr>
              </thead>
              {products.map((val, key) => {
                return (
                  <tr key={key} >
                    <td id='i' className='Product-tdd'> <img width='50px' heigth='50px' src={val.productImage} /></td>
                    <td id='i'>{val.productName}</td>
                    <td id='i' style={{ fontSize: '20px', color: '#0da487' }}>{val.category}</td>
                    <td id='i'>{val.currentQuantity}</td>
                    <td id='i'>{val.price}</td>
                    <td id='i'>{val.status}</td>
                    <td id='i' style={{ fontSize: '20px', color: '#0da487', display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', marginTop: '1.5rem' }}>{val.options}</td>
                  </tr>
                )
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
