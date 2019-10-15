import React, { Fragment } from "react";
import Iframe from 'react-iframe'

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Components() {
  return (
    <>
      <div
        className="section section-components"
        data-background-color="dark-blue"
      >
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="12">
              <h2 className="text-center title">
                Balboa: <br></br>
                <small className="description">
                  Let Us Help You Travel
                </small>
              </h2>
              </Col>
              <Col className="ml-auto mr-auto" md="8">
                  <Iframe
                    src="https://cdn.jwplayer.com/players/kTsbOTTs-AmppdRxw.html"
                    width="100%"
                    height="400px" 
                    frameBorder="0"
                    scrolling="auto"
                    allowFullscreen
                  >
                  </Iframe>
              </Col> 
          </Row>
          <Row>
            <Col md="3">
              <div className="card-container first-card">
                <div className="card-component">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="front">
                      <img
                        alt="..."
                        src={require("assets/img/presentation-page/basic_thumb.jpg")}
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="card-container second-card">
                <div className="card-component">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="front">
                      <img
                        alt="..."
                        src={require("assets/img/presentation-page/cards_thumb.jpg")}
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="card-container third-card">
                <div className="card-component">
                  <a href="sections.html">
                    <div className="front">
                      <img
                        alt="..."
                        src={require("assets/img/presentation-page/sections_thumb.jpg")}
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
            <Col md="3">
              <div className="card-container fourth-card">
                <div className="card-component">
                  <a href="examples/product-page.html">
                    <div className="front">
                      <img
                        alt="..."
                        src={require("assets/img/presentation-page/pages2_thumb.jpg")}
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Components;
