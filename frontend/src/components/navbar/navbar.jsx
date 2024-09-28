import React, { useContext, useState } from 'react' 
import "./navbar.css"
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Navbar = ( ) => {
    const [menu, setMenu] = useState("shop"); //For underline effect
    const {getTotalCartItems} = useContext(ShopContext)
    const navigate = useNavigate();

    const handleLogout = () =>{
        localStorage.removeItem('token');
        navigate("./login")
    }
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src= {logo} alt="logo" />
                <p>SportAc</p>
            </div>
            <ul className="nav-menu">
                <li onClick = {()=>{setMenu("shop")}}><Link to = '/shop' style = {{textDecoration: 'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick = {()=>{setMenu("clothing")}}><Link to = '/clothing' style = {{textDecoration: 'none'}}>Clothing</Link>{menu==="clothing"?<hr/>:<></>}</li>
                <li onClick = {()=>{setMenu("items")}}><Link to = '/items' style = {{textDecoration: 'none'}}>Items</Link>{menu==="items"?<hr/>:<></>}</li>
                <li onClick = {()=>{setMenu("shoes")}}><Link to = '/shoes' style = {{textDecoration: 'none'}}>Shoes</Link>{menu==="shoes"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
            {!localStorage.getItem('token')?<Link to = "/login" style = {{textDecoration: 'none'}}><button>Login</button></Link>: <button onClick = {handleLogout}className = "nav-logout">Logout</button> }
                <Link to = "/cart" style = {{textDecoration: 'none'}}><img src={cart_icon} alt="cart_icon" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>

            </div>
        </div>
    )
}

export default Navbar