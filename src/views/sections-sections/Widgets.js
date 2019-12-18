import React from "react";

// reactstrap components
import { Container, Row, Col } from "react-bootstrap";
import Iframe from 'react-iframe'
// core components

export default function Widgets() {
  return (
    <>
      <div>
        <Container fluid>
          
            <Row>
              <Col sm={6}>
                <Iframe
                  frameborder="0"
                  width="100%"
                  height="675"
                  src="https://www.agentmaxonline.com/agentmaxweb/widgets/quotetool.html?widgetid=131371&amp;accam=F201784&amp;code=ABIYU4TLWGBGTNHC6ZWLRSKAR65GB6C5JLBJOIXR7QY3M6I5HDDOM7E6GKF5AIHAZXAKHPJZZG2XGRZJWNGQY5D4Q74233PO2HLMLBIRRMNN6R626STJESNDQZAFLDQC">
                </Iframe>
              </Col>
              
              <Col sm="6">
                <Iframe className="flightaware"
                  width="100%"
                  height="100%"
                  src="https://embed.flightaware.com/commercial/integrated/web/delay_map.rvt"
                >
                </Iframe>
              </Col>
              
            </Row>

            <Row>
              <Col sm="12" id="cibtWidgetLoaderDiv"></Col>
              
            </Row>

        </Container>
      </div>
    </>
  );
}
