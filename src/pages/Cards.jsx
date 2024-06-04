import React from "react";

import li from "../Assets/i4.jpg";
import l2 from "../Assets/i5.jpg";
import l3 from "../Assets/i6.jpg";

const cardContainer = {
  backgroundColor: "#009999",
  padding: "20px", // Add padding for better spacing
};

const card = {
  background: "#b3ffec",
};

const Cards = () => {
  return (
    <div className="container-fluid" style={cardContainer}> {/* Use container-fluid to ensure full width */}
      <h2 className="text-center mb-4">Activities</h2> {/* Center-align heading and add bottom margin */}
      
      
      <div className="row justify-content-center">
        <div className="col-md-3">
          <div className="card h-100" style={card}>
            <img
              src={li}
              className="card-img-top img-fluid"
              style={{ height: "200px", objectFit: "cover" }}
              alt="Activity 1"
            />
            <div className="card-body">
              <h5 className="card-title">Confucius</h5>
              <p className="card-text">
                It does not matter how slowly you go as long as you do not
                stop.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card h-100" style={card}>
            <img
              src={l2}
              className="card-img-top img-fluid"
              style={{ height: "200px", objectFit: "cover" }}
              alt="Activity 2"
            />
            <div className="card-body">
              <h5 className="card-title">Quote of the week</h5>
              <p className="card-text">
                Your present circumstances don't determine where you can go;
                they merely determine where you start.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card h-100" style={card}>
            <img
              src={l3}
              className="card-img-top img-fluid"
              style={{ height: "200px", objectFit: "cover" }}
              alt="Activity 3"
            />
            <div className="card-body">
              <h5 className="card-title">Quote of the day</h5>
              <p className="card-text">
                Aerodynamically the bumblebee shouldn't be able to fly. But
                the bumblebee doesn't know that so it goes on flying anyway
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
