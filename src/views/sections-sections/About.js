import React from "react";
import { Container, Row, Col } from "reactstrap";


function About() {
  return (
    <>
      <div className="cd-section" id="features">
       
        <div
          className="features-2 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/aboutUs.jpeg") + ")"
          }}
        >
          <Container fluid>
            <Row>
              <Col className="mr-auto ml-auto" md="8">
                <h2 className="title">Balboa Travel Management</h2>
                <h4 className="description">
                Balboa Travel is a full-service company with an impeccable reputation as corporate travel specialists. 
                Our expertise lies in providing flexible solutions, supporting the needs of the business traveler and 
                reducing travel costs through well-structured managed programs. We view travel as an investment in meeting 
                and exceeding corporate goals rather than as an expense. We believe every client deserves executive 
                level attention. 
                <br />

                Visit us at &nbsp;
                <a href="https://www.balboa.com" target="_blank" rel="noopener noreferrer">
                Balboa.com
                </a> 
                &nbsp; to learn more.
                
                </h4>
              </Col>
            </Row>
          
          </Container>
        </div>
        
        
      </div>
    </>
  );
}

export default About;
