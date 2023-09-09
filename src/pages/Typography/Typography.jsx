import React from 'react';
import './typo.css';

import img1 from "../../assets/Typo1.png";
import img2 from "../../assets/Easy-Clean-color.png";
import img3 from "../../assets/Easy-Clean-font.png";
import img4 from "../../assets/Easy-Clean-app-font.png";

const Typography = () => {
  return (
    <>
       <div className="box-container"><div className="box"></div>Logo</div>
      <div className="typo-container">
        <img src={img1} alt="" />
       <div className="box-container"><div className="box"></div>Colors</div>
        <br />
        <img src={img2} alt="" />
      </div>
      <div className="box-container"><div className="box"></div>Typography</div>
      <div>
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
    </>
  )
}

export default Typography
