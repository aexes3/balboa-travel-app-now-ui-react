import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Clients() {
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
                    <a href="https://www.concursolutions.com/nui/signin"
                      rel="noopener noreferrer"
                      target="_blank"
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
                  <a href="https://www.concursolutions.com/nui/signin"
                      rel="noopener noreferrer"
                      target="_blank"
                  >
                    <img alt="..." src={require("assets/img/ipad3.png")}></img>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="features-5">
          <Container>
                <h2 className="title">Travel Policy Forms</h2>
            <Row>
              <Col md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons location_world"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Hundreds of Components</h4>
                    <p>
                      The moment 
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons media-1_camera-compact"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Easy to Use</h4>
                    <p>
                      Divide details 
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons media-1_button-power"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Fast Prototyping</h4>
                    <p>
                      Divide details 
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons ui-2_like"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Hundreds of Components</h4>
                    <p>
                      The moment 
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons gestures_tap-01"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Easy to Use</h4>
                    <p>
                      Divide details 
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons loader_refresh"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Fast Prototyping</h4>
                    <p>
                      Divide details 
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="tablet-container">
                  <img
                    alt="..."
                    src={require("assets/img/ipad2.png")}
                  ></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Clients;
