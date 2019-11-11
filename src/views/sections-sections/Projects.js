import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function Features() {
  return (
    <>
      <div className="cd-section" id="features">

        <div
          className="features-7 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")"
          }}
        >
          <Col className="mr-auto ml-auto text-center" md="8">
            <h2 className="title">Concur Login</h2>
            <h4 className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
            </h4>
          </Col>
          <Container fluid>
            <Row>
              <Col className="px-0" md="6">
                <Col sm="12">
                  <div className="info info-horizontal">
                  <a href="#pablo"
                     onClick={e => {
                      e.preventDefault();}}
                    >
                      <div className="icon">
                      <i className="fa fa-calendar"></i>
                    </div>
                  </a>
                    <div className="description">
                    <a href="#pablo"
                     onClick={e => {
                      e.preventDefault();}}
                    >
                      <h5 className="info-title">Online Booking Tool Login</h5>
                    </a>
                      <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                  <a href="#pablo"
                     onClick={e => {
                      e.preventDefault();}}
                    >
                      <div className="icon">
                      <i className="fa fa-laptop"></i>
                    </div>
                    </a>
                    <div className="description">
                    <a href="#pablo"
                     onClick={e => {
                      e.preventDefault();}}
                    >
                      <h5 className="info-title">Online Tool Training</h5>
                    </a>
                      <p className="description">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <a href="#pablo"
                     onClick={e => {
                      e.preventDefault();}}
                    >
                    <div className="icon">
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                    </a>
                    <div className="description">
                    <a href="#pablo"
                     onClick={e => {
                      e.preventDefault();}}
                    >
                      <h5 className="info-title">Concur Mobile</h5>
                    </a>
                      <p className="description">
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                      </p>
                    </div>
                  </div>
                </Col>
              </Col>
              <Col md="6">
                <div className="image-container">
                  <img alt="..." src={require("assets/img/ipad3.png")}></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Features;
