import React from 'react';
import './about.css';

import about from "../../assets/Easy-Clean-bg.jpg.webp"

const About = () => {
  return (
    <div className="about-container">
        <div className="about-details">
            <img src={about} alt="about" /> <br />
            <h3>About Laundry and Dry Cleaning Service App
            </h3>
            <p>We designed and developed an app like Cleanly that provides the best laundry and dry cleaning services in Saudi Arabia. Our client was doing a job before deciding to get into the laundry business. He noticed that there is a lot of demand for laundry services in his country but very few apps available to make the process easier.</p>
            <p>He wanted an app that helps the customer find a nearby laundry and dry cleaning service easily, an app like Cleanly or Rinse. He also wanted to help vendors by giving them a platform to promote and advertise their services. We developed an on-demand laundry solution with 4 components: 1) Customer/ User App, 2) Cleaners App, 3) Driver’s App, and 4) Admin Panel.</p>
            <p>The customers can get laundry pick up and delivery service using the user app. The laundry shop owners can get customers using their app. The drivers can get notified when their services are required and the admin can manage all the other components and assets.</p>
            <button id="about-button" className="about-button">Get A Free Qoute</button>
        </div>
    </div>
  )
}

export default About