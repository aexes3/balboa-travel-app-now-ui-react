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

function TeamMembers() {
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
                {/* <h4 className="description">
                  Lorum ipsumLorum ipsumLorum ipsumLorum ipsumLorum ipsumLorum ipsumLorum ipsumLorum ipsum
                </h4> */}
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
                            src={require("assets/img/presentation-page/team-members/TC_ClaudiaMora.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Claudia Mora</CardTitle>
                        <h6 className="category text-info">Travel Consultant</h6>
                        {/* <p className="card-description">
                          Happiness resides not in possessions, and not in gold,
                          happiness dwells in the soul...
                        </p> */}
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
                            src={require("assets/img/presentation-page/team-members/TC_DanWise.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Dan Wise</CardTitle>
                        <h6 className="category text-info">Travel Consultant</h6>
                        <p className="card-description">
                          Today you are you! That is truer than true!
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
                            src={require("assets/img/presentation-page/team-members/TC_JamesCruz.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">James Cruz</CardTitle>
                        <h6 className="category text-info">
                          Travel Consultant
                        </h6>
                        <p className="card-description">
                          Success is not final, it is the
                          courage that counts...
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
                            src={require("assets/img/presentation-page/team-members/TC_JulieMaeso.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Julie Maeso</CardTitle>
                        <h6 className="category text-info">Travel Consultant</h6>
                        {/* <p className="card-description">
                          Do not dwell in the past, do not dream of the future,
                          concentrate the mind...
                        </p> */}
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
                            src={require("assets/img/presentation-page/team-members/TC_JuneTaylor.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">June Taylor</CardTitle>
                        <h6 className="category text-info">
                          Travel Consultant
                        </h6>
                        {/* <p className="card-description">
                          Success is not final, failure is not fatal: it is the
                          courage to continue that counts...
                        </p> */}
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
                            src={require("assets/img/presentation-page/team-members/TC_KerlCommock.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Kerl Commock</CardTitle>
                        <h6 className="category text-info">Travel Consultant</h6>
                        <p className="card-description">
                          Do not dwell in the past...
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
                            src={require("assets/img/presentation-page/team-members/TC_LindaWiggins.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Linda Wiggins</CardTitle>
                        <h6 className="category text-info">
                          Travel Consultant
                        </h6>
                        <p className="card-description">
                          Success is not final, it is the
                          courage that counts...
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
                            src={require("assets/img/presentation-page/team-members/TC_MarisaSchvartz.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Marisa Schvartz</CardTitle>
                        <h6 className="category text-info">
                          Travel Consultant
                        </h6>
                        <p className="card-description">
                          Success is not final, it is the
                          courage that counts...
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
                            src={require("assets/img/presentation-page/team-members/TC_PatLakey.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Pat Lakey</CardTitle>
                        <h6 className="category text-info">
                          Travel Consultant
                        </h6>
                        <p className="card-description">
                          Success is not final, it is the
                          courage that counts...
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
                            src={require("assets/img/presentation-page/team-members/TC_PoojaMalik.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Pooja Malik</CardTitle>
                        <h6 className="category text-info">
                          Travel Consultant
                        </h6>
                        <p className="card-description">
                          Success is not final, it is the
                          courage that counts...
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
                            src={require("assets/img/presentation-page/team-members/TC_ShelleyHughes.jpg")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Shelley Hughes</CardTitle>
                        <h6 className="category text-info">
                          Travel Consultant
                        </h6>
                        <p className="card-description">
                          Success is not final, it is the
                          courage that counts...
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
                            src={require("assets/img/presentation-page/team-members/TC_SuzaneTaylor.png")}
                          ></img>
                        </a>
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <CardTitle tag="h3">Suzane Taylor</CardTitle>
                        <h6 className="category text-info">
                          Travel Consultant
                        </h6>
                        <p className="card-description">
                          Success is not final, it is the
                          courage that counts...
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

export default TeamMembers;
