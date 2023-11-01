import React from 'react';
import './Attributes.css'
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import { GrEdit } from "@react-icons/all-files/gr/GrEdit";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import Home from '../../pages/Home/Home';
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const products = [
  {
    productId: 1,
    productName: 'Color',
    value: ['blue', 'blue'],
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 10,
    status: 'out of stock',
    price: 25.99,
    status: 'Out of Stock',
    options: [<AiFillEye />, <AiFillDelete />],
  },
  {
    productId: 2,
    productName: 'size',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 2',
    // value:[s,m,l],
    currentQuantity: 5,

    price: 19.99,
    status: 'Out of Stock',
    options: [<AiFillEye />, <AiFillDelete />],
  },
  {
    productId: 3,
    productName: 'Material',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 15,
    price: 32.99,
    status: 'In Stock',
    options: [<AiFillEye />, <AiFillDelete />]
  },
  {
    productId: 1,
    productName: 'Style',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 1',
    currentQuantity: 10,
    price: 25.99,
    status: 'In Stock',
    options: [<AiFillEye />, , <AiFillDelete />],
  },
  {
    productId: 2,
    productName: 'Meat Type',
    productImage: 'https://patnabazar.org/admin/assets/product/dfdf2faf13c4cc5e21559bca1be66271.png',
    category: ' 2',
    currentQuantity: 5,
    price: 19.99,
    status: 'Out of Stock',
    options: [<AiFillEye />, <AiFillDelete />],
  },

];



const Attributes = () => {
  const navigate = useNavigate();

  const handelClick = () => {
    navigate('/AddAttribute')
  }
  return (
    <>
      {/* <Home /> */}
      {/* <div className='appp'> */}
      <div className="Attributes-App">
        <div className='Attributes-ProductAndButton'>
          <h3 className=' Attributes-ProductTitle' style={{ padding: '1.5rem', fontFamily: 'rosemary' }}>
            All Attributes
          </h3>
          <button onClick={handelClick} className='Attributes-AddProduct'>Add Product</button>
        </div>
        <div className='Attributes-SearchButton'>
          search <input />
        </div>
        <div style={{ overflow: 'auto', width: '100%' }} >
          <table >
            <thead>
              <tr   >

                <th className='Attributes-th'>Name</th>
                <th className='Attributes-th'>Value</th>
                <th className='Attributes-th'>Option</th>
              </tr>
            </thead>
            {products.map((val, key) => {
              return (
                <tr key={key}>
                  <td className='Attributes-td'>{val.productName}</td>
                  <td className='Attributes-td' >{val.category}</td>
                  <td className='Attributes-td' style={{ fontSize: '20px', color: '#0da487', display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', marginTop: '1.5rem' }}>{val.options}</td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Attributes;
