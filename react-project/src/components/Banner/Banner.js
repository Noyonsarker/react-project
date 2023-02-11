import React from "react";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../images/slide-1.jpg";
import banner2 from "../../images/slide-2.jpg";
import banner3 from "../../images/slide-3.jpg";
import Button from "react-bootstrap/Button";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption className="carousel-text">
            <h3>SPOTOGRAPHER</h3>
            <h1>Sports Photographer</h1>
            <p>I Capture Sports Moments and Actions.</p>
            <Button variant="success">MORE ABOUT ME</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption className="carousel-text">
            <h3>SPOTOGRAPHER</h3>
            <h1>Sports Photographer</h1>
            <p>I Capture Sports Moments and Actions.</p>
            <Button variant="success">MORE ABOUT ME</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption className="carousel-text">
            <h3>SPOTOGRAPHER</h3>
            <h1>Sports Photographer</h1>
            <p>I Capture Sports Moments and Actions.</p>
            <Button variant="success">MORE ABOUT ME</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
