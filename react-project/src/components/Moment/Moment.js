import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment1 from "../../images/gallery-one.jpg";
import moment2 from "../../images/gallery-two.jpg";
import moment3 from "../../images/gallery-three.jpg";
import moment4 from "../../images/gallery-four.jpg";
import moment5 from "../../images/gallery-five.jpg";
import moment6 from "../../images/gallery-seven.jpg";
import moment7 from "../../images/gallery-nine.jpg";
import moment8 from "../../images/gallery-ten.jpg";
import "./Moment.css";

const Moment = () => {
  return (
    <section className="moment-area">
      <Container>
        <h2>Some Moments</h2>
        <Row>
          <Col lg={3}>
            <div className="single-moment">
              <img src={moment1} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg={3}>
            <div className="single-moment">
              <img src={moment2} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg={3}>
            <div className="single-moment">
              <img src={moment3} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg={3}>
            <div className="single-moment">
              <img src={moment4} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg={3}>
            <div className="single-moment">
              <img src={moment5} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg={3}>
            <div className="single-moment">
              <img src={moment6} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg={3}>
            <div className="single-moment">
              <img src={moment7} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg={3}>
            <div className="single-moment">
              <img src={moment8} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Moment;
