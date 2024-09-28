import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import LoginSignUp from './pages/loginSignUp';
import Footer from './components/Footer/Footer';
import sportac_banner from './components/assets/banner.png'
import { useState } from 'react';
import Login from './pages/Login';



function App() {

  const [hideNavFooter, setHideNavFooter] = useState(false);
  return (
    <div>
      <BrowserRouter>
      {!hideNavFooter && <Navbar />}
    <Routes>
      <Route path = "/shop" element= {<Shop/>}/>
      <Route path = "/clothing" element= {<ShopCategory banner = {sportac_banner} category="clothing"/>}/>
      <Route path = "/items" element= {<ShopCategory banner = {sportac_banner} category="items"/>}/>
      <Route path = "/shoes" element= {<ShopCategory banner = {sportac_banner} category="kid"/>}/>
      <Route path = "/product" element = {<Product/>}>
        <Route path = ":productId" element = {<Product/>}/>
      </Route>
      <Route path = "/cart" element = {<Cart/>}/>
      <Route path = "/" element = {<LoginSignUp setHideNavFooter={setHideNavFooter} />}/>
      <Route path = "/login" element = {<Login setHideNavFooter={setHideNavFooter} />} />
    </Routes>
    {!hideNavFooter && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
