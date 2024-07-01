import React from 'react'
import "./navbar.css"

import logo from "../../assets/TELA_black.png";
import menu_icon from "../../assets/menu.png"
import search_icon from "../../assets/search.png"
import user from "../../assets/user.jpg"

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu-icon' onClick={() => setSidebar(prev => prev === false ? true : false)} src={menu_icon} alt='Menu-icon' />
        <img className='logo' src={logo} alt='TELA' />
      </div>

      <div className='nav-middle flex-div'>
        <div className='search-box flex-div'>
          <img src={search_icon} alt='Search' />
          <input type='text' placeholder='Search emails...' />
        </div>
      </div>

      <div className='nav-right flex-div'>
          <p className='welcome-user'>Welcome, <span>Loreta</span></p>
          <img src={user} alt='User-icon' />
      </div>
    </nav>
  )
}

export default Navbar
