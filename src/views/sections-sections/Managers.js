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
        
        <div className="testimonials-3">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Balboa Travel Mangagers</h2>
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
                        src={require("assets/img/denise.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h3">Denise Jackson</CardTitle>
                    <h6 className="category text-info">Loan Counselor</h6>
                    <p className="card-description">
                      "Do not go where the path may lead, go instead where there
                      is no path and leave a trail."
                    </p>
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
                        src={require("assets/img/dan.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Dan Wise</CardTitle>
                    <h6 className="category text-info">
                      Interpreter OR Translator
                    </h6>
                    <p className="card-description">
                      "Don't walk behind me; I may not lead. Don't walk in front
                      of me; I may not follow. Just walk beside me and be my
                      friend."
                    </p>
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
                        src={require("assets/img/tracy.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Tracy Yamell</CardTitle>
                    <h6 className="category text-info">HR Specialist</h6>
                    <p className="card-description">
                      "The pessimist complains about the wind; the optimist
                      expects it to change; the realist adjusts the sails."
                    </p>
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
