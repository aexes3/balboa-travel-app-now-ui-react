import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Fab, } from '@material-ui/core';


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
                <a href="https://www.cvent.com/events/SMMForm/MeetingRequest/MeetingMain.aspx?smm_form_stub=2383a84a-af28-4bfc-8594-95477b44d003" target="_blank" rel="noopener noreferrer">
                Meeting Request Form
                </a>
                <br /><br />
                  <Fab onClick={ e => window.location.href=`mailto:vacations@balboa.com`} target="_blank"size="large" color="default" variant="fab">
                    <i className="fas fa-envelope" />&nbsp; - meeting&amp;eventsolutions@balboa.com
                  </Fab>
                </h4>
              </Col>
            </Row>
          
          </Container>
        </div>
        
        
      </div>
    </>
  );
}

export default MeetingIncentives;
