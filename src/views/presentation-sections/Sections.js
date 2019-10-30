import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import Iframe from 'react-iframe'
// core components

function Sections() {
  return (
    <>
      <div className="section section-sections" data-background-color="gray">
        <Container>
          <Col className="ml-auto mr-auto" md="8">
            <div className="section-description text-center">
              <h2 className="title">While you are there</h2>
              <h5 className="description">
                Check on important links about your travel desitation and trips along the way.
              </h5>
              {/* <Button
                className="btn-round"
                to="/sections"
                color="info"
                tag={Link}
              >
                View All Sections
              </Button> */}
            </div>
          </Col>
        </Container>
        <Container fluid>
          <div className="section-cols">
              <Row>
              <Col md="3">
                <a href="//yelp.com">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/yelpreview.jpg")}
                  />
                </a>
              </Col>
              <Col md="3">
                {/* <a href="//google.com/maps/">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/maps.jpg")}
                ></img>
                </a> */}
                <Iframe 
                  alt="..."
                  // className="rellax"
                  // data-rellax-speed="5"
                  width="100%" 
                  height="100%" 
                  frameborder="0" 
                  scrolling="no" 
                  marginheight="0" 
                  marginwidth="0"
                  src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed">
                </Iframe>
              </Col>
              <Col md="3">
                <a href="//balboa.com">
                <a href="https://weather.com/">
                  <img
                  alt="..."
                  src={require("assets/img/presentation-page/weather.jpg")}
                ></img>
                  </a>
                </a>
                {/* <img
                  alt="..."
                  className="rellax"
                  data-rellax-speed="4"
                  src={require("assets/img/presentation-page/pricing5.jpg")}
                ></img> */}
              </Col>
              <Col md="3">
                <a href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html/">
                  <img
                  alt="..."
                  src={require("assets/img/presentation-page/travel-warning.jpg")}
                ></img>
                  </a>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <a href="https://travel.state.gov/content/travel/en/passports.html/passport_1738.html">
                  <img
                  alt="..."
                  src={require("assets/img/presentation-page/passport.jpg")}
                ></img>
                  </a>
              </Col>
              <Col md="3">
                <a href="https://countrycode.org/">
                  <img
                  alt="..."
                  src={require("assets/img/presentation-page/international-calling-codes.jpg")}
                ></img>
                  </a>
              </Col>
              <Col md="3">
                <a href="https://www.cdc.gov">
                  <img
                  alt="..."
                  src={require("assets/img/presentation-page/cdc-travel-health.jpg")}
                ></img>
                  </a>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/embassy.jpg")}
                ></img>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <a href="https://www.cbp.gov/">
                  <img
                  alt="..."
                  src={require("assets/img/presentation-page/customs.jpg")}
                ></img>
                  </a>
                {/* <img
                  alt="..."
                  className="rellax"
                  data-rellax-speed="5"
                  src={require("assets/img/presentation-page/features2.jpg")}
                ></img> */}
              </Col>
              <Col md="3">
                <a href="https://www.howtocallabroad.com/">
                  <img
                  alt="..."
                  src={require("assets/img/presentation-page/internationaltele.jpg")}
                ></img>
                  </a>
              </Col>
              <Col md="3">
                {/* <img
                  alt="..."
                  src={require("assets/img/presentation-page/opentable.jpg")}
                ></img> */}
                <Iframe 
                src="http://embed.flightaware.com/commercial/integrated/web/delay_map.rvt" 
                width="100%"
                height="100%" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0">
              </Iframe>
              </Col>
              <Col md="3">
                {/* <img
                  alt="..."
                  src={require("assets/img/presentation-page/balboa.png")}
                ></img> */}
                 <Iframe
                    src="https://cdn.jwplayer.com/players/kTsbOTTs-AmppdRxw.html" 
                    width="100%" 
                    height="100%"
                    frameborder="0" 
                    scrolling="auto" 
                    allowfullscreen>
                  </Iframe>
              </Col>
            </Row>
            {/* <Row>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/blogpost1.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/blogpost2.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/blogpost3.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/blogpost4.jpg")}
                ></img>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/blogpost5.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/team1.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/team2.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/team3.jpg")}
                ></img>
                <img
                  alt="..."
                  className="rellax"
                  data-rellax-speed="5"
                  src={require("assets/img/presentation-page/contact1.jpg")}
                ></img>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/team4.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/team5.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/projects1.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/projects2.jpg")}
                ></img>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/projects4.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/projects5.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/pricing1.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/pricing2.jpg")}
                ></img>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/pricing3.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/pricing4.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/pricing5.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/testimonials1.jpg")}
                ></img>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/testimonials2.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/testimonials3.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/contact1.jpg")}
                ></img>
              </Col>
              <Col md="3">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/contact2.jpg")}
                ></img>
              </Col>
            </Row> */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Sections;
