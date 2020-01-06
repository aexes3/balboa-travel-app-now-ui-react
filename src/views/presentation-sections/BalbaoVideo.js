import React from "react";
import Iframe from 'react-iframe';

// reactstrap components
// import { Container, Row, Col } from "reactstrap";

// core components

function BalbaoVideo() {
  return (
    <>
      <div className="section section-cards" id="Container">
              <Iframe
                className="embed-responsive jwplayer flightaware"
                src="https://cdn.jwplayer.com/players/kTsbOTTs-AmppdRxw.html"
                width="100%"
                height="100%" 
                frameBorder="0"
                allowFullscreen=""
              >
              </Iframe>
      </div>
    </>
  );
}

export default BalbaoVideo;
