import React from "react";
import PhoneIcon from '@material-ui/icons/Phone';
import { Container, Row, Col } from "reactstrap";
import { Fab, } from '@material-ui/core';

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
          </Container>
        </div>
        
        
      </div>
    </>
  );
}

export default Vacations;
