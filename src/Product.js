import React from 'react'
import puma from "./pu.jpg";
import ball from "./pum.jpg";
import shoe from "./kaa.jpg";

const Product = () => {
  return (

<div id='cards'>
      <div className='card'>
        <img className="image" src={puma} alt=''/>
      <h1>Shoe</h1>
      <p>Color</p>
      <div id='colors'>
          <div className='color1'></div>
          <div className='color2'></div>
          <div className='color3'></div>
          <p>58 %</p>
          <h2>$ 3999</h2>
      </div>
      </div>

      <div className='card'>
        <img className="image" src={ball} alt=''/>
      <h1>Football</h1>
      <p>Color</p>
      <div id='colors'>
          <div className='color1'></div>
          <div className='color2'></div>
          <div className='color3'></div> 
          <p>78 %</p>
          <h2>$ 6789</h2>
      </div>
      </div>


      <div className='card'>
        <img className="image" src={shoe} alt=''/>
      <h1>Football kit</h1>
      <p>Color</p>
      <div id='colors'>
          <div className='color1'></div>
          <div className='color2'></div>
          <div className='color3'></div>
          <p>36 %</p>
               <h2>$ 20999</h2>
      </div>
      </div>
      </div>
  );
};
export default Product;