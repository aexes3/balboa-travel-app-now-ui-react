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
                Balboa can assist in planning your upcoming group event whether a meeting of 15, 
                or a meeting of 5,000+ our seasoned team of professionals has decades of meeting 
                and event experience. We can assist in planning and operating meetings and events 
                worldwide including: Business Meetings, Training Events, Conferences, Incentive 
                Travel Programs, Product Launches, etc. 

                <hr />
                <a href="https://www.cvent.com/events/SMMForm/MeetingRequest/MeetingMain.aspx?smm_form_stub=2383a84a-af28-4bfc-8594-95477b44d003" target="_blank">
                Meeting Request Form
                </a>
                  <div onClick={ e => window.location.href = `mailto: meeting&eventsolutions@balboa.com`}>
                    <i className="fas fa-envelope" /> : meeting&amp;eventsolutions@balboa.com
                  </div>
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
