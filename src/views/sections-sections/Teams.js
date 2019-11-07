import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
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
      <div className="team-2">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Balboa Executive Travel Managers</h2>
                <h4 className="description">
                  Lorum ipsum 
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/denise.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Denise Jackson</CardTitle>
                    <h6 className="category">Account Manager</h6>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-round"
                        color="twitter"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="facebook"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook-square"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="dribbble"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/dan.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Dan Wise</CardTitle>
                    <h6 className="category">Aerospace Engineer</h6>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-round"
                        color="dribbble"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="facebook"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook-square"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/tracy.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Tracy Yamell</CardTitle>
                    <h6 className="category">Photographer</h6>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-round"
                        color="linkedin"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-linkedin"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="twitter"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="dribbble"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4"></Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/andrew.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Andrew Robles</CardTitle>
                    <h6 className="category">Senior Director of Travel Technology</h6>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-round"
                        color="linkedin"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-linkedin"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="twitter"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button
                        className="btn-icon btn-round"
                        color="dribbble"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div> 

        <div
          className="team-3 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg21.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Balboa Travel Managers</h2>
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
                            src={require("assets/img/olivia.jpg")}
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
                            src={require("assets/img/james.jpg")}
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
                            src={require("assets/img/michael.jpg")}
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
                            src={require("assets/img/emily.jpg")}
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
                            src={require("assets/img/michael.jpg")}
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
                            src={require("assets/img/emily.jpg")}
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
