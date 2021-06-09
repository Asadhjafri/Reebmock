import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "./Images/Reebok_1.jpeg"
import image2 from "./Images/Reebok_2.jpeg"
import image3 from "./Images/Reebok_3.jpeg"
import './Carousel.css'

const CarouselContainer = () => {
  return (
  <Carousel>
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="6000"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={image1} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={image2} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={image3} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </Carousel>
  );
};

export default CarouselContainer;