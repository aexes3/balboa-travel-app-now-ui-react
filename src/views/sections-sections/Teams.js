import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function Teams() {
  return (
    <>
      <div className="cd-section" id="teams">

        <div
          className="team-3 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg21.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Balboa Travel Team</h2>
                <h4 className="description">
                  Lorum ipsumLorum ipsumLorum ipsumLorum ipsumLorum ipsumLorum ipsumLorum ipsumLorum ipsum
                </h4>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto" lg="7" xl="6">
                <Card className="card-profile">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/dan.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Ariana Hazel</CardTitle>
                        <h6 className="category text-info">Fashion Designer</h6>
                        <p className="card-description">
                          Happiness resides not in possessions, and not in gold,
                          happiness dwells in the soul...
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto" lg="7" xl="6">
                <Card className="card-profile">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/AlJohnson.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Ryan Samuel</CardTitle>
                        <h6 className="category text-info">
                          Financial Examiner
                        </h6>
                        <p className="card-description">
                          Today you are you! That is truer than true! There is
                          no one alive who is you-er than you!..
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto" lg="7" xl="6">
                <Card className="card-profile">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/Melanie.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Joshua Jackson</CardTitle>
                        <h6 className="category text-info">
                          Landscape Architect
                        </h6>
                        <p className="card-description">
                          Success is not final, failure is not fatal: it is the
                          courage to continue that counts...
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto" lg="7" xl="6">
                <Card className="card-profile">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/Sawsan.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Nora Hazel</CardTitle>
                        <h6 className="category text-info">Legal Secretary</h6>
                        <p className="card-description">
                          Do not dwell in the past, do not dream of the future,
                          concentrate the mind...
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto" lg="7" xl="6">
                <Card className="card-profile">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/RKorson.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Joshua Jackson</CardTitle>
                        <h6 className="category text-info">
                          Landscape Architect
                        </h6>
                        <p className="card-description">
                          Success is not final, failure is not fatal: it is the
                          courage to continue that counts...
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto" lg="7" xl="6">
                <Card className="card-profile">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/Red.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Nora Hazel</CardTitle>
                        <h6 className="category text-info">Legal Secretary</h6>
                        <p className="card-description">
                          Do not dwell in the past, do not dream of the future,
                          concentrate the mind...
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
       
      </div>
    </>
  );
}

export default Teams;
