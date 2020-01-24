import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Booking() {
  return (
    <>
      <div className="cd-section" id="features">

        <div
          id="booking"
          className="features-7 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")"
          }}
        >
          <Col className="mr-auto ml-auto text-center" md="8">
            <h2 className="title">Online Booking Tool</h2>
            <h4 className="description">
            Stay in compliance by booking your next trip through Balboa’s online booking platform.
            </h4>
          </Col>
          <Container fluid>
            <Row>
              <Col className="px-0" md="6">
                <Col sm="12">
                  <div className="info info-horizontal">
                  <a href="https://www.concursolutions.com/nui/signin"
                      rel="noopener noreferrer"
                      target="_blank"
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
                      When you book online through your company’s approved booking platform, 
                      you will save time, while saving your company money.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <a href="https://www.concurtraining.com/en-us/pr/travel"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                        <div className="icon">
                        <i className="fa fa-laptop"></i>
                        </div>
                      </a>
                    <div className="description">
                    <a href="https://www.concurtraining.com/en-us/pr/travel"
                     rel="noopener noreferrer"
                     target="_blank"
                    >
                      <h5 className="info-title">Online Tool Training</h5>
                    </a>
                      <p className="description">
                      Learn how to use Concur Travel to book a flight, 
                      rail, car, and/or hotel reservations.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <a href="https://www.concurtraining.com/pr/mobile"
                     rel="noopener noreferrer"
                     target="_blank"
                    >
                    <div className="icon">
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                    </a>
                    <div className="description">
                    <a href="https://www.concurtraining.com/pr/mobile"
                     rel="noopener noreferrer"
                     target="_blank"
                    >
                      <h5 className="info-title">Mobile Booking App</h5>
                    </a>
                      <p className="description">
                        <a href="https://apps.apple.com/us/app/sap-concur/id335023774"
                          rel="noopener noreferrer"
                          target="_blank"
                          color="primary">
                            iPhone
                        </a>
                        <br />
                        <a href="https://play.google.com/store/apps/details?id=com.concur.breeze&hl=en_US"
                          rel="noopener noreferrer"
                          target="_blank"
                          color="primary">
                            Android
                        </a>
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

        <div className="features-5" id="forms">
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

export default Booking;
