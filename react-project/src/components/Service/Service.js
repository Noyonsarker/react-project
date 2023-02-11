import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import service1 from "../../images/service-one.jpg";
import service2 from "../../images/service-two.jpg";
import service3 from "../../images/service-three.jpg";
import "./Service.css";

const Service = () => {
  return (
    <section className="service-area mb-5">
      <Container>
        <h2>My Services</h2>
        <Row>
          <Col lg={4}>
            <div className="single-service">
              <img src={service1} alt="" className="w-100" />
              <div className="service-text">
                <h3>Sporting Events Photography</h3>
                <h5>Price: $300</h5>
                <p>
                  I'm the leading sporting event photographer in Bangladesh. I
                  offer quality images and products, on-site printing and great
                  pricing!
                </p>
                <Button variant="primary">Book Now</Button>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="single-service">
              <img src={service2} alt="" className="w-100" />
              <div className="service-text">
                <h3>Sporting Events Photography</h3>
                <h5>Price: $100</h5>
                <p>
                  I'm the leading sporting event photographer in Bangladesh. I
                  offer quality images and products, on-site printing and great
                  pricing!
                </p>
                <Button variant="primary">Book Now</Button>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="single-service">
              <img src={service3} alt="" className="w-100" />
              <div className="service-text">
                <h3>Sporting Events Photography</h3>
                <h5>Price: $150</h5>
                <p>
                  I'm the leading sporting event photographer in Bangladesh. I
                  offer quality images and products, on-site printing and great
                  pricing!
                </p>
                <Button variant="primary">Book Now</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
