import React from 'react'
import puma from "./pumaa.png";
import Product from './Product';


const Home = () => {
  return (

    <div> <nav className="navbar">
    <div className="logo">  <img className='logo' src={puma} alt=''/></div>
    <input type="text" placeholder="Search products..." className="search-bar" />
    <ul className="nav-links">
      <li><a href="/home" className='k'>Home</a></li>
      <li><a href="#" className='a'>Contact</a></li>
      <li><a href="#" className='r'>About</a></li>
    </ul> 
  </nav>

  <Product/>
  </div>
  )
}

export default Home;