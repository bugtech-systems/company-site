import React from 'react';
import './landing.css';
import {BsArrowRight} from "react-icons/bs";
import {BiRightArrow} from "react-icons/bi";

import Image from "../../assets/Easy-Clean-logo.png";
import App from "../../assets/Easy-Clean-app.png.webp";

const Landing = () => {
  return (
        <section className="landing-container">
            <div className="left-container">
                <img src={Image} alt="logo" />
                <h1>Easy<mark>Clean</mark>: On-demand <br />Laundry App</h1>
                <>
                <span>Home <BiRightArrow className="icon" /> Portfolio <BiRightArrow className="icon" /> <span id="path" className="path">EasyClean: Laundry App</span> </span>
               </>
                <p>EasyClean is an on-demand laundry and dry cleaning service app that offers door-to-door service. 
                    The customers can find the nearest laundry shops in the vicinity and get pick up and delivery service as per their convenience. 
                    The vendors can list their services and generate revenue using this laundry app.</p>

                <button className="buttton">
                <p>Get Your Free Qoute&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsArrowRight className="arrow-icon" color="#fff" size="35px" /></p>
                    <p>All Projects are Secured by NDA</p>
                </button>
            </div>
            <img className="landing-image" src={App} alt="lego" />
        </section>
  )
}

export default Landing
