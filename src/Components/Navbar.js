import React from 'react'
import './Navbar.css';
import { FaShoppingBag } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";
function Navbar() {
  return (
   <>
   <div>
      <img src="https://assets.ajio.com/static/img/Ajio-Logo.svg" alt="" className='ajio py-2' />
    <div >
      <ul className='navbar my-2'>
        <li>MEN</li>
        <li>KIDS</li>
        <li>WOMEN</li>
        <li>HOMES</li>
        <li>KITCHEN</li>
      </ul>
      <div className='search1'>
        <input class="form-control search" type="search" placeholder="   SearchAJIO" aria-label="Search" />
        <FaShoppingBag size={"2rem"}/> <span><FaHeartCirclePlus size={"2rem"}/></span>
         </div>
      
    </div>
   </div>
    
   </>
  )
}

export default Navbar
