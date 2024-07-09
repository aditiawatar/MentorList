import React from "react";
import "./Navbar.css";
import img1 from "./images/Frame 1000015445 (1).png";
import img2 from "./images/Frame 1000015445.png";
import img3 from "./images/Frame 1000015446.png";
import img4 from "./images/Frame 1000015447.png";
import img5 from "./images/Frame 1000015448.png";
import img6 from "./images/Frame 1000015449.png";
const Navbar = () => {
  return (
    <div>
    
      <div className="info">
        <h2>Meet with our professional mentors</h2>
        <p>
          Learn from the Best: Top Professionals <br></br> and Industry Experts!
          Get certified by top <br></br> professionals and experts
        </p>
        <button className="btn btn-primary">Get Connected</button>
      </div>

      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={img1} />
          </div>
          <div className="slide">
            <img src={img2} />
          </div>
          <div className="slide">
            <img src={img3} />
          </div>
          <div className="slide">
            <img src={img4} />
          </div>
          <div className="slide">
            <img src={img5} />
          </div>
          <div className="slide">
            <img src={img6} />
          </div>

          <div className="slide">
            <img src={img1} />
          </div>
          <div className="slide">
            <img src={img2} />
          </div>
          <div className="slide">
            <img src={img3} />
          </div>
          <div className="slide">
            <img src={img4} />
          </div>
          <div className="slide">
            <img src={img5} />
          </div>
          <div className="slide">
            <img src={img6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
