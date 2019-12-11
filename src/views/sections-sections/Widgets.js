import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import Iframe from 'react-iframe'
// core components

export default function Widgets() {
  return (
    <>
      <div className="section section-sections" data-background-color="gray">
        <Container fluid>
          <div className="section-cols">
            <Row>
              <Col md="3">
                <Iframe
                  frameborder="0"
                  width="100%"
                  height="675"
                  src="https://www.agentmaxonline.com/agentmaxweb/widgets/quotetool.html?widgetid=131371&amp;accam=F201784&amp;code=ABIYU4TLWGBGTNHC6ZWLRSKAR65GB6C5JLBJOIXR7QY3M6I5HDDOM7E6GKF5AIHAZXAKHPJZZG2XGRZJWNGQY5D4Q74233PO2HLMLBIRRMNN6R626STJESNDQZAFLDQC">
                </Iframe>
              </Col>
              {/* <Col md="3">
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
              </Col> */}
              <Col md="6">
                <Iframe className="flightaware"
                  src="https://embed.flightaware.com/commercial/integrated/web/delay_map.rvt"
                  width="100%"
                  height="100%"
                >
                </Iframe>
              </Col>
            </Row>
            <div id="cibtWidgetHolder"></div>

          </div>
        </Container>
      </div>
    </>
  );
}
