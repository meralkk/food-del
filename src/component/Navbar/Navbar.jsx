import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  // to make the navbar menu active
  const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
          {/* onClick menu to make the menu item active  */}
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
            <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
            <li onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>mobile-app</li>
            <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>
        </ul>
        <div className="navbar-right">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={{color: "#49557e",}} />
              <div className="navbar-search-icon">
              <FontAwesomeIcon icon={faShoppingBasket} size="xl" style={{color: "#49557e",}} />
              <div className="dot"></div>
        </div>
            <button>sign in</button>
        </div>
    </div>
  )
}

export default Navbar