import React from 'react';
import './main.css';
import imgMy from '../picture/imgMy.jpg';

const Main = () => {
  return (
    <div className="baap">
    <div className="row tag">
      <div className="col-md-6 col-lg-6 col-sm-12 d-flex flex-column justify-content-center align-items-center lines">
        <h1>Unlock the Potential</h1>
        <h1>of Your Finances</h1>
        <h1>with Our Fintech Solutions</h1>
      </div>
      <div className="col-md-12 col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
        <img className="photo" src={imgMy} alt="" srcset="" />
      </div>
    </div>
   
   <div className="none">  
    <h4>Products</h4>
    <div className=" Products container d-flex justify-content-evenly  w-75 rounded">
      <p className="liti text-center">screener</p>
      <p className="liti text-center">mmi</p>
      <p className="liti text-center">stocks</p>
      <p className="text-center">learn</p>
    </div>
    </div> 
   
    
  </div>
);
}

export default Main;
