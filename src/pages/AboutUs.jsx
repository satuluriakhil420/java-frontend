import React from "react";
import pic01 from "../Assets/img1.jpeg";
import pic02 from "../Assets/img1.jpeg";
const AboutUS = () => {
    return (

        <div className="about-us-container">
        {/* Left side for images */}
        <div className="about-us-images">
          <img
            src={pic01}
            alt="Description of Image 1"
            className="about-us-image"
          />
          <br></br>
          <img
            src={pic02}
            alt="Description of Image 2"
            className="about-us-image"
          />
        </div>
        
        {/* Right side for context/text */}
        <div className="about-us-text">
          <h2>About Us</h2>
          <p>
            This is where you describe your organization, your mission, vision, 
            values, or anything else that gives context to the images on the left.
            You can add more text, lists, or additional components to describe 
            what your organization does.
          </p>
        </div>
      </div>
    );
}

export default AboutUS;