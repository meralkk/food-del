import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

  // to make the navbar menu active
  const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
          {/* onClick menu to make the menu item active  */}
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={{color: "#49557e",}} />
              <div className="navbar-search-icon">
              <FontAwesomeIcon icon={faShoppingBasket} size="xl" style={{color: "#49557e",}} />
              <div className="dot"></div>
        </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar