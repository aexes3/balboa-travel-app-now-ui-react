import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function BasicComponents() {
  return (
    <>
      <div className="section section-basic-components">
        <Container >
          <Row className="ml-auto mr-auto" lg="5" md="7"
          >
              <h2 className="title">Balboa Preferred!</h2>
              {/* <h6 className="category">Let us help</h6> */}
              <h5 className="description">
           
              </h5>
              </Row>
            <Col lg="6" md="12">
              <div className="image-container">
                <img
                  alt="..."
                  className="components-macbook"
                  src={require("assets/img/ipad.png")}
                ></img>
                <img
                  alt="..."
                  className="table-img"
                  src={require("assets/img/presentation-page/hotel-directory.jpg")}
                ></img>
                <img
                  alt="..."
                  className="share-btn-img"
                  src={require("assets/img/presentation-page/share-btn.jpg")}
                ></img>
                <img
                  alt="..."
                  className="coloured-card-btn-img"
                  src={require("assets/img/presentation-page/preferred-supplier.jpg")}
                ></img>
                <img
                  alt="..."
                  className="coloured-card-img"
                  src={require("assets/img/presentation-page/policies.png")}
                ></img>
                <img
                  alt="..."
                  className="social-img"
                  src={require("assets/img/presentation-page/faq.png")}
                ></img>
                <img
                  alt="..."
                  className="linkedin-btn-img"
                  src={require("assets/img/presentation-page/docs-and-forms.png")}
                ></img>
              </div>
          </Col>
        </Container>
      </div>
    </>
  );
}

export default BasicComponents;
