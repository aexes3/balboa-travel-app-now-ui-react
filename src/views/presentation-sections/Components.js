import React, { Fragment } from "react";
// import Iframe from 'react-iframe'

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Collapse,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  NavItem,
  NavLink,
  Nav
} from "reactstrap";

// core components

function Components() {
  const [collapses, setCollapses] = React.useState([1]);
  const changeCollapse = collapse => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter(prop => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };
  return (
    <>
      <div
        className="section section-components"
        data-background-color="dark-blue"
      >
        <Container>
          {/* <Row>
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
          </Row> */}
          <Row>
            <Col md="3">
              <Card className="card-refine card-plain card-container first-card">
                <CardHeader className="card-component">
                  <a
                    className="text-info"
                    aria-expanded={collapses.includes(2)}
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      changeCollapse(2);
                    }}>
                    <div className="front">
                      <img
                        alt="..."
                        src={require("assets/img/presentation-page/basic_thumb.jpg")}
                      ></img>
                    </div>
                  </a>
                </CardHeader>
              </Card>
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
          <Row>
          <Collapse isOpen={collapses.includes(2)}>
              
              <Card className="text-center">
                <CardHeader>
                  <Nav className="justify-content-center" tabs>
                    <NavItem>
                      <NavLink
                        className="active"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Active
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink 
                        className="active"
                        href="#pablo" 
                        onClick={e => e.preventDefault()}>
                        Link
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className="active"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Disabled
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <CardTitle tag="h4">Special title treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to additional
                    content.
                  </CardText>
                  <Button
                    color="primary"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Go somewhere
                  </Button>
                </CardBody>
              </Card>
            
          </Collapse>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Components;
