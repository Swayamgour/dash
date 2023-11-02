import './App.css'
import Product from './components/Product/Product';
import ProductInfo from './components/ProductInfo/ProductInfo';
import Attributes from './components/Attributes/Attributes';
import AddAttribute from './components/AddAttribute/AddAttribute';
import Home from "./pages/Home/Home";
import { Route, Router, Routes } from 'react-router-dom';
import DashBoard from './components/DashBoard/DashBoard';
import Card from './components/Card/Card';


function App() {
  return (
    <>
   
    {/* <DashBoard /> */}
      <Home />
      <Routes>
        <Route exact path='/Product' element={<Product />}></Route>
        <Route exact path='/Attributes' element={<Attributes />}></Route>
        <Route exact path='/AddAttribute' element={<AddAttribute />}></Route>
        <Route exact path='/ProductInfo' element={<ProductInfo />}></Route>
        <Route exact path='/Dashboard' element={<DashBoard />}></Route>
      </Routes>
    </>
  );
}

export default App;
