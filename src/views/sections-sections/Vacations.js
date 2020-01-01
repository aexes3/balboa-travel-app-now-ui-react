import React from "react";
import PhoneIcon from '@material-ui/icons/Phone';
import { Button, Container, Row, Col } from "reactstrap";
import { Fab, List, ListItem, } from '@material-ui/core';

function Vacations() {
  return (
    <>
      <div className="cd-section" id="features">
       
        <div
          className="features-2 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/vacations.jpg") + ")"
          }}
        >
          <Container fluid>
            <Row>
              <Col className="mr-auto ml-auto" md="8">
                <h2 className="title">BALBOA VACATIONS</h2>
                <h4 className="description">
                Dreaming of that Romantic getaway? Or the Family reunion cruise? Or anywhere but the office? 
                Let Balboa’s Vacation experts help plan your next trip abroad! Take advantage of exclusive leisure
                discounts and offer credits for your upcoming vacation.
                <hr />
                  <Fab onClick={ e => window.location.href=`mailto:vacations@balboa.com`} target="_blank"size="large" color="default" variant="fab">
                    <i className="fas fa-envelope" />&nbsp; - vacations@balboa.com
                  </Fab>
                  <br /><br />
                  <Fab href="tel:800-359-8576" target="_blank" size="large" color="default" variant="fab">
                    <PhoneIcon />&nbsp; - 800-359-8576
                  </Fab>
                </h4>
              </Col>
            </Row>
            <Row>
              {/* <Col md="4">
                <div className="info">
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

export default Vacations;
