import React from "react";

import { Container, Row, Col } from "reactstrap";


function Sections() {
  return (
    <>
      <div className="section section-sections" data-background-color="gray" >
        <Container id="wyat" >
          <Col className="ml-auto mr-auto" md="8">
            <div className="section-description text-center">
              <h2 className="title" >While you are there</h2>
              <h5 className="description">
                Check on important links about your travel desitation and trips along the way.
              </h5>
            </div>
          </Col>
        </Container>
        <Container fluid>
          <div className="section-cols">


            <Row>
              <Col md="3">
                <a href="https://www.cbp.gov/" target="_blank" rel="noopener noreferrer">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/customs.jpg")}
                  ></img>
                </a>
              </Col>
              <Col md="3">
                <a href="https://www.howtocallabroad.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/internationaltele.jpg")}
                  ></img>
                </a>
              </Col>
              <Col md="3">
                <a href="https://weather.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/weather.jpg")}
                  ></img>
                </a>
              </Col>
              <Col md="3">
                <a href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html/" target="_blank" rel="noopener noreferrer">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/travel-warning.jpg")}
                  ></img>
                </a>
              </Col>
            </Row>


            <Row>
              <Col md="3">
                <a href="https://travel.state.gov/content/travel/en/passports.html/passport_1738.html" target="_blank" rel="noopener noreferrer">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/passport.jpg")}
                  ></img>
                </a>
              </Col>
              <Col md="3">
                <a href="https://countrycode.org/" target="_blank" rel="noopener noreferrer">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/international-calling-codes.jpg")}
                  ></img>
                </a>
              </Col>
              <Col md="3">
                <a href="https://www.cdc.gov" target="_blank" rel="noopener noreferrer">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/cdc-travel-health.jpg")}
                  ></img>
                </a>
              </Col>
              <Col md="3">
                <a href="https://www.usembassy.gov/" target="_blank" rel="noopener noreferrer">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/embassy.jpg")}
                ></img>
                </a>
              </Col>
            </Row>

          </div>
        </Container>
      </div > 
    </>
  );
}

export default Sections;
