import React from "react";
import { Container, Row, Col } from "reactstrap";


function MeetingIncentives() {
  return (
    <>
      <div className="cd-section" id="features">
       
        <div
          className="features-2 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/meetingincentive.jpg") + ")"
          }}
        >
          <Container fluid>
            <Row>
              <Col className="mr-auto ml-auto" md="8">
                <h2 className="title">MEETING &amp; INCENTIVES</h2>
                <h4 className="description">
                Balboa Meeting &amp; Incentives Solutions is a full service meeting 
                and incentive event management division of Balboa Travel. 
                We provide the expertise and resources to seamlessly plan and execute 
                all phases of your next corporate meeting or incentive travel program.
                </h4>
              </Col>
            </Row>
            <Row>
              {/* <Col md="4">
                <div className="info">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons users_single-02"></i>
                  </div>
                  <h4 className="info-title">Work With Any Team</h4>
                  <p className="description">
                    Whether it’s for work or even the next family vacation,
                    Trello helps your team.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-danger icon-circle">
                    <i className="now-ui-icons business_chart-bar-32"></i>
                  </div>
                  <h4 className="info-title">A Productivity Platform</h4>
                  <p className="description">
                    Integrate the apps your team already uses directly into your
                    workflow.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-warning icon-circle">
                    <i className="now-ui-icons arrows-1_refresh-69"></i>
                  </div>
                  <h4 className="info-title">Always In Sync</h4>
                  <p className="description">
                    No matter where you are, Trello stays in sync across all of
                    your devices.
                  </p>
                </div>
              </Col> */}
            </Row>
          </Container>
        </div>
        
        
      </div>
    </>
  );
}

export default MeetingIncentives;
