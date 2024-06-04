import React from "react";
import li from "../Assets/i4.jpg";
import l2 from "../Assets/i5.jpg";
import l3 from "../Assets/i6.jpg";


const ImageScroll = () =>{
    return (


<div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={li} class="d-block w-180" alt="image" />
          </div>
          <div class="carousel-item">
            <img src={l2} class="d-block w-180" alt="image" />
          </div>
          <div class="carousel-item">
            <img src={l3} class="d-block w-180" alt="image" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
}

export default ImageScroll;