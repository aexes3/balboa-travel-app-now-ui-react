/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Logo from '../../assets/img/presentation-page/logo-white.png'

// core components

function FooterBlack() {
  return (
    <>
      <footer className="footer" data-background-color="black">
        <Container className="text-center text-md-left">
          <Row className="text-center text-md-left mt-3 pb-3 footer-font-size">
            <hr className="w-100 clearfix d-md-none" />
            <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">About Us</h6>
              <p >
                <a href="https://www.balboa.com/company-overview" target="_blank">Company Overview</a>
              </p>
              <p>
                <a href="https://www.balboa.com/our-team" target="_blank">Our Team</a>
              </p>
              <p>
                <a href="https://www.balboa.com/affiliations" target="_blank">Affiliations</a>
              </p>
              <p>
                <a href="https://www.balboa.com/testimonials" target="_blank">Testimonials</a>
              </p>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Corporate Travel</h6>
              <p>
                <a href="https://www.balboa.com/corporate-travel-management" target="_blank">Corporate Travel Management</a>
              </p>
              <p>
                <a href="https://www.balboa.com/service-offerings" target="_blank">Service Offerings</a>
              </p>
              <p>
                <a href="https://www.balboa.com/online-booking-solutions" target="_blank">Online Booking Solutions</a>
              </p>
              <p>
                <a href="https://www.balboa.com/technology" target="_blank">Technology</a>
              </p>
              <p>
                <a href="https://www.balboa.com/account-management" target="_blank">Account Management</a>
              </p>
              <p>
                <a href="https://www.balboa.com/global-solutions" target="_blank">Global Solutions</a>
              </p>
              <p>
                <a href="https://www.balboa.com/industry-relations-team" target="_blank">Industry Relations Team</a>
              </p>
              <p>
                <a href="https://www.balboa.com/white-papers" target="_blank">White Papers</a>
              </p>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Meeting &amp; Events
            </h6>
              <p>
                <a href="https://www.balboa.com/meeting-and-event-management" target="_blank">Meeting &amp; Event Management</a>
              </p>
              <p>
                <a href="https://www.balboa.com/site-selection" target="_blank">Site Selection</a>
              </p>
              <p>
                <a href="https://www.balboa.com/online-registration-service" target="_blank">Online Registraion Service</a>
              </p>
              <hr className="w-100 clearfix d-md-none" />
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Leisure Travel
              </h6>
              <p>
                <a href="https://www.balboa.com/balboa-vacations" target="_blank">Balboa Vacation</a>
              </p>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Career
            </h6>
              <p>
                <a href="https://www.balboa.com/employee-development" target="_blank">Employee Development</a>
              </p>
              <p>
                <a href="https://www.balboa.com/job-opportunities" target="_blank">Job Opportunities</a>
              </p>
              <hr className="w-100 clearfix d-md-none" />
              <h6 className="text-uppercase mb-4 font-weight-bold">
                <a href="https://www.balboa.com/news" target="_blank">News</a>
              </h6>
              <hr className="w-100 clearfix d-md-none" />
              <h6 className="text-uppercase mb-4 font-weight-bold">
                <a href="https://www.balboa.com/resources" target="_blank">Resources</a>
              </h6>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fa fa-home mr-3" /> California Sellers License Number: CST#2013711
            </p>
              <p>
                <a href="mailto:res54141@balboa.com">
                  <i className="fa fa-envelope mr-3" /> res54141@balboa.com
                </a>
            </p>
              <p>
                <a href="tel:858-678-3779">
                  <i className="fa fa-phone mr-3" /> 858-678-3779
                </a>
            </p>
              {/* <p>
                <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p> */}
            </Col>
          </Row>
          <hr />
          <Row >
            <Col md="8" lg="8">
              <p className="text-center text-md-left grey-text">
              <a href="https://www.balboa.com" target="_blank"><img src={Logo} alt="logo" /></a>
              </p>
            </Col>
            <Col md="4" lg="4" className="ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/balboatravel/" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/BalboaTravel" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  {/* <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-google-plus" />
                    </a>
                  </li> */}
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/company/balboa-travel-management/" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
