import React from 'react';
import './banner.css';

import Ios from "../../assets/veboo-app-store.png";
import Google from "../../assets/google-play-store2.png";

const Banner = () => {
  return (
    <div className="banner-container">
        <p>Download on App Store</p>
            <div className="icon-container">
                <img src={Ios} alt="" />
                <img className="google-icon" src={Google} alt="" />
            </div>
    </div>
  )
}

export default Banner
