import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo-new.png'
import { IoCartOutline } from "react-icons/io5";
import {useDispatch, useSelector} from 'react-redux'
import { menuAction } from '../../store/menuSlice';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const dispatch=useDispatch();
  const menu=useSelector(store=>store.menu)
  const cartItems=useSelector(store=>store.cartProduct);
  const totalCartProducts=()=>{
    let total=0
    for(const item in cartItems){
        total+=cartItems[item]
    }
    return total;
  }
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <NavLink  to="/"><img src={logo} alt="" /></NavLink>
            <NavLink style={{textDecoration:"none"}} to="/"><p>Style</p></NavLink>
        </div>

        <ul className="nav-menu">
            <NavLink style={{textDecoration:"none", color:'#626262'}} to="/"><li onClick={(e)=>dispatch(menuAction.toggle(e.target.innerText))}>Shop{menu==="Shop"?<hr/>:<></>}</li></NavLink>
            <NavLink style={{textDecoration:"none", color:'#626262'}} to="/mens"><li onClick={(e)=>dispatch(menuAction.toggle(e.target.innerText))}>Men{menu==="Men"?<hr/>:<></>}</li></NavLink>
            <NavLink style={{textDecoration:"none", color:'#626262'}} to="/womens"><li onClick={(e)=>dispatch(menuAction.toggle(e.target.innerText))}>Women{menu==="Women"?<hr/>:<></>}</li></NavLink>
            <NavLink style={{textDecoration:"none", color:'#626262'}} to="/kids"><li onClick={(e)=>dispatch(menuAction.toggle(e.target.innerText))}>Kids{menu==="Kids"?<hr/>:<></>}</li></NavLink>
        </ul>
        <div className="nav-login-cart">
          <NavLink style={{textDecoration:"none"}} to="/login"><button>Login</button></ NavLink>
          <NavLink style={{textDecoration:"none", color:'#626262'}} to="/cart"><IoCartOutline className='cart-icon' /></NavLink>
          <div className="nav-cart-count">{totalCartProducts()}</div>
        </div>

    </div>
  )
}

export default Navbar
