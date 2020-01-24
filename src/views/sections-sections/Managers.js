import React from "react";

import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

function Managers() {

  return (
    <>
      <div className="cd-section" id="testimonials">
        
        <div className="testimonials-3" >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Balboa Travel Team</h2>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/DIR_SawsanAsad.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h3">Sawsan Asad</CardTitle>
                    <h6 className="category text-info">Director Of Operations</h6>
                    {/* <p className="card-description">
                      "Do not go where the path may lead, go instead where there
                      is no path and leave a trail."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/MGR_MelanieHanson.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Melanie Hanson</CardTitle>
                    <h6 className="category text-info">
                      VIP Team Supervisor
                    </h6>
                    {/* <p className="card-description">
                      "Don't walk behind me; I may not lead. Don't walk in front
                      of me; I may not follow. Just walk beside me and be my
                      friend."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/MGR_RedWalker.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Red Walker</CardTitle>
                    <h6 className="category text-info">Team Supervisor</h6>
                    {/* <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/VIP_AlJohnson.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Al Johnson</CardTitle>
                    <h6 className="category text-info">Executive Travel Desk</h6>
                    {/* <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/VIP_BethThomas.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Beth Thomas</CardTitle>
                    <h6 className="category text-info">Executive Travel Desk</h6>
                    {/* <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/VIP_JaimeCurry.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Jaime Curry</CardTitle>
                    <h6 className="category text-info">Executive Travel Desk</h6>
                    {/* <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/VIP_LavinaD_Souza.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Lavina D' Souza</CardTitle>
                    <h6 className="category text-info">Executive Travel Desk</h6>
                    {/* <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/VIP_RachelleKorson.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Rachelle Korson</CardTitle>
                    <h6 className="category text-info">Executive Travel Desk</h6>
                    {/* <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/VIP_DanaBoyce.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Dana Boyce</CardTitle>
                    <h6 className="category text-info">Executive Travel Desk</h6>
                    {/* <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/TC_ClaudiaMora.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Claudia Mora</CardTitle>
                    <h6 className="category text-info">Travel Consultant</h6>
                    {/* <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/TC_DanWise.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Dan Wise</CardTitle>
                    <h6 className="category text-info">Travel Consultant</h6>
                    {/* <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/TC_JamesCruz.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">James Cruz</CardTitle>
                    <h6 className="category text-info">Travel Consultant</h6>
                    {/* <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/TC_JulieMaeso.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Julie Maeso</CardTitle>
                    <h6 className="category text-info">Travel Consultant</h6>
                    {/* <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/TC_JuneTaylor.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">June Taylor</CardTitle>
                    <h6 className="category text-info">Travel Consultant</h6>
                    {/* <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/TC_KerlCommock.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Kerl Commock</CardTitle>
                    <h6 className="category text-info">Travel Consultant</h6>
                    {/* <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/TC_LindaWiggins.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Linda Wiggins</CardTitle>
                    <h6 className="category text-info">Travel Consultant</h6>
                    {/* <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/TC_MarisaSchvartz.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Marisa Schvartz</CardTitle>
                    <h6 className="category text-info">Travel Consultant</h6>
                    {/* <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/TC_PatLakey.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Pat Lakey</CardTitle>
                    <h6 className="category text-info">Travel Consultant</h6>
                    {/* <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/TC_PoojaMalik.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Pooja Malik</CardTitle>
                    <h6 className="category text-info">Travel Consultant</h6>
                    {/* <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/TC_ShelleyHughes.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Shelley Hughes</CardTitle>
                    <h6 className="category text-info">Travel Consultant</h6>
                    {/* <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/presentation-page/team-members/TC_SuzaneTaylor.png")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Suzane Taylor</CardTitle>
                    <h6 className="category text-info">Travel Consultant</h6>
                    {/* <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p> */}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Managers;
