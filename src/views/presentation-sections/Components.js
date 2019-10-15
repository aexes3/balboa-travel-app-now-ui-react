import React, { Fragment } from "react";
import Iframe from 'react-iframe'
import Grid from '@material-ui/core/Grid';

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
              {/* <Grid container spacing={2}>
                <Grid item md={6}>
                  <Iframe
                    src="https://cdn.jwplayer.com/players/kTsbOTTs-AmppdRxw.html"
                    maxWidth="100%"
                    height="170px" 
                    frameBorder="0"
                    scrolling="auto"
                    // style={{ maxHeight: "100%" }}
                    allowFullscreen
                  >
                  </Iframe>
                </Grid>
                <Grid item md={6}>
                  <Iframe
                    src="https://cdn.jwplayer.com/players/kTsbOTTs-AmppdRxw.html"
                    maxWidth="100%"
                    height="170px" 
                    frameBorder="0"
                    scrolling="auto"
                    // style={{ maxHeight: "100%" }}
                    allowFullscreen
                  >
                  </Iframe>
                </Grid>
              </Grid>
              <div className="space-50"></div> */}
              <Col className="ml-auto mr-auto" md="8"> 
                <Iframe 
              src="https://cdn.jwplayer.com/players/kTsbOTTs-AmppdRxw.html" 
              width="100%"
              height="auto"
              frameBorder="0" 
              scrolling="auto" 
              position="relative"
              overflow="hidden"
              display="flex"
              allowFullScreen
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
