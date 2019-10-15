import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Collapse,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

import GoPro from '../../assets/img/GoPro_logo.png'

// core components
const items = [
  {
    src: "url(" + require("assets/img/bg20.jpg") + ")",
    content: (
      <Row>
        <Col md="5">
          <div className="iframe-container">
            <iframe
              title="myIframe"
              allowFullScreen=""
              frameBorder="0"
              height="250"
              src="https://www.youtube.com/embed/rmfmdKOLzVI?rel=0&amp;controls=0&amp;showinfo=0"
            ></iframe>
          </div>
        </Col>
        <Col className="ml-auto mr-auto text-right" md="6">
          <h1 className="title">Using An Uber</h1>
          <h4 className="description">
            This section is all about uber and how to get ahold of Uber's information.
            Click this 
            <a href="https://www.travizon.net/gopro/assets/pdf/uber_account.pdf" alt="uber pdf">
              link
            </a>
            to learn more about our partnership with uber.
          </h4>
        </Col>
      </Row>
    ),
    altText: "",
    caption: ""
  },
  {
    src: "url(" + require("assets/img/bg15.jpg") + ")",
    content: (
      <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
          <h1 className="title">GoPro Angecies</h1>
          <h4 className="description">
            Talk about how to contact GoPro.
          </h4>
          <br></br>
          <h5>Connect with us on:</h5>
          <div className="buttons">
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-twitter"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-facebook-square"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2 mr-1"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-google-plus"></i>
            </Button>
            <Button
              className="btn-icon btn-neutral btn-round mt-2"
              color="danger"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fab fa-instagram"></i>
            </Button>
          </div>
        </Col>
      </Row>
    ),
    altText: "",
    caption: ""
  },
  {
    src: "url(" + require("assets/img/bg17.jpg") + ")",
    content: (
      <Row>
        <Col className="text-left" md="6">
          <h1 className="title">GoPro Policies</h1>
          <h4 className="description">
            Click this
             <a href="https://www.travizon.net/gopro/assets/pdf/travel_policy.pdf" alt="Policy pdf">
               link
             </a>
             to contact GoPro
          </h4>
          <br></br>
          <div className="buttons">
            <Button
              className="btn-neutral mr-1"
              color="info"
              href="#pablo"
              onClick={e => e.preventDefault()}
              size="lg"
            >
              <i className="now-ui-icons files_single-copy-04"></i> Read More..
            </Button>
            <Button
              color="info"
              href="#pablo"
              onClick={e => e.preventDefault()}
              size="lg"
            >
              <i className="now-ui-icons arrows-1_share-66"></i> Subscribe
            </Button>
          </div>
        </Col>
      </Row>
    ),
    altText: "",
    caption: ""
  }
];

function Headers() {
  // navbar collapses states and functions
  const [navbarOpen1, setNavbarOpen1] = React.useState(false);
  const [navbarOpen2, setNavbarOpen2] = React.useState(false);
  const [navbarOpen3, setNavbarOpen3] = React.useState(false);
  // header 3 carousel states and functions
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const color = {
    color: "white"
  }
  return (
    <>
      {navbarOpen1 || navbarOpen2 || navbarOpen3 ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setNavbarOpen1(false);
            setNavbarOpen2(false);
            setNavbarOpen3(false);
          }}
        />
      ) : null}
      <div className="cd-section" id="headers">
        <div className="header-1">
          <Navbar
            className="navbar-transparent bg-info navbar-absolute"
            expand="lg"
          >
            <Container>
              <div className="navbar-translate">
                <button
                  aria-expanded={navbarOpen1}
                  className="navbar-toggler"
                  data-toggle="collapse"
                  type="button"
                  onClick={() => {
                    document.documentElement.classList.toggle("nav-open");
                    setNavbarOpen1(!navbarOpen1);
                  }}
                >
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </button>
                <NavbarBrand src="/" onClick={e => e.preventDefault()}>
                  <img src={GoPro} alt="GoPro Logo"/>
                </NavbarBrand>
              </div>
              {/* <Collapse navbar isOpen={navbarOpen1}> */}
                {/* <Nav className="mx-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Contact Us
                    </NavLink>
                  </NavItem>
                </Nav> */}
                <Nav className="nav" navbar>
                  <NavItem>
                    <NavLink
                      href="https://twitter.com/GoPro?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.facebook.com/gopro/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.instagram.com/gopro/?hl=en"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </NavLink>
                  </NavItem>
                </Nav>
              {/* </Collapse> */}
            </Container>
          </Navbar>
          <div className="page-header header-filter">
            <div
              className="page-header-image"
              style={{
                backgroundImage: "url(" + require("assets/img/bg16.jpg") + ")"
              }}
            ></div>
            <Container>
              <Row>
                <Col className="ml-auto text-left" md="7">
                  <h1 className="title">Concur Login</h1>
                  <h4 className="description">
                  GoPro - <a href="https://gopro.okta.com/login/login.htm?fromURI=%2Fhome%2Fconcur%2F0oa18606b8iqo0rAa1d8%2F615" target="-blank" style={color}>
                  Online Booking Tool <br/><br/>
                    
                  </a>
                    What do I do if I have issues logging into Concur?<br/>
                    For Technical Assistance:<br/> 
                    contact Concur Corporate Travel Management<br/> 
                    Online Technical Support:<br/><br />
                    Hours: Monday - Friday - 8:30am - 8:30pm ET<br/>
                    Phone: 877.208.1396<br/>
                    Email: bos.online@travelctm<br/>
                  </h4>
                  <br></br>
                  <div className="buttons">
                    <Button
                      className="btn-round mr-1"
                      color="facebook"
                      href="email: bos.online@travel.com"
                      onClick={e => {
                        e.preventDefault()
                        window.location.href = "mailto: bos.online@travel.com";
                      }}
                      size="sm"
                    >
                      <i className="fa fa-envelope"></i>
                    </Button>
                    <Button
                      className="btn-round ml-1"
                      color="linkedin"
                      href="tel:877-208-1396"
                      // onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      <i className="fa fa-phone"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="mr-3"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      Read More
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* <div className="header-2">
          <Navbar
            className="navbar-transparent bg-info navbar-absolute"
            expand="lg"
          >
            <Container>
              <div className="navbar-translate">
                <button
                  aria-expanded={navbarOpen2}
                  className="navbar-toggler"
                  data-toggle="collapse"
                  type="button"
                  onClick={() => {
                    document.documentElement.classList.toggle("nav-open");
                    setNavbarOpen1(!navbarOpen2);
                  }}
                >
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </button>
                <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                <img src={GoPro} alt="GoPro Logo"/>
                </NavbarBrand>
              </div>
              <Collapse navbar isOpen={navbarOpen2}>
                <Nav className="mx-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Products
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Contact Us
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="nav navbar-right" navbar>
                  <NavItem>
                    <NavLink
                      href="https://twitter.com/CreativeTim?ref=creativetim"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.facebook.com/CreativeTim?ref=creativetim"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <div className="page-header header-filter">
            <div
              className="page-header-image"
              style={{
                backgroundImage: "url(" + require("assets/img/bg14.jpg") + ")"
              }}
            ></div>
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="10">
                  <h1 className="title">GoPro Angencies</h1>
                  <h5 className="description">
                    GoPro - Online Booking Tool<br /><br />
                    For Techincal Assistance with Concur Travel, Contact Corporate
                  </h5>
                </Col>
                <Col className="ml-auto mr-auto" md="10">
                  <Card
                    className="card-raised card-form-horizontal card-plain"
                    data-background-color=""
                  >
                    <CardBody>
                      <Form action="" method="">
                        <Row>
                          <Col md="3">
                            <FormGroup>
                              <Input
                                autoComplete="family-name"
                                defaultValue=""
                                placeholder="Full Name"
                                type="text"
                              ></Input>
                            </FormGroup>
                          </Col>
                          <Col md="3">
                            <FormGroup>
                              <Input
                                autoComplete="email"
                                placeholder="Your Email"
                                type="email"
                              ></Input>
                            </FormGroup>
                          </Col>
                          <Col md="3">
                            <FormGroup>
                              <Input
                                autoComplete="current-password"
                                placeholder="Password"
                                type="password"
                              ></Input>
                            </FormGroup>
                          </Col>
                          <Col md="3">
                            <Button
                              block
                              className="btn-round"
                              color="info"
                              type="button"
                            >
                              Join Us
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="header-3">
          <Navbar
            className="navbar-transparent bg-info navbar-absolute"
            expand="lg"
          >
            <Container>
              <div className="navbar-translate">
                <button
                  aria-expanded={navbarOpen3}
                  className="navbar-toggler"
                  data-toggle="collapse"
                  type="button"
                  onClick={() => {
                    document.documentElement.classList.toggle("nav-open");
                    setNavbarOpen1(!navbarOpen3);
                  }}
                >
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </button>
                <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={GoPro} alt="GoPro Logo"/>
                </NavbarBrand>
              </div>
              <Collapse navbar isOpen={navbarOpen3}>
                <Nav className="ml-auto" navbar>
                  <NavItem className="active">
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Contact Us
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {items.map(item => {
              return (
                <CarouselItem
                  onExiting={onExiting}
                  onExited={onExited}
                  key={item.src}
                >
                  <div className="page-header header-filter">
                    <div
                      className="page-header-image"
                      style={{
                        backgroundImage: item.src
                      }}
                    ></div>
                    <div className="content">
                      <Container className="text-left">
                        {item.content}
                      </Container>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
            <a
              className="left carousel-control carousel-control-prev"
              data-slide="prev"
              href="#pablo"
              onClick={e => {
                e.preventDefault();
                previous();
              }}
              role="button"
            >
              <span className="now-ui-icons arrows-1_minimal-left" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control carousel-control-next"
              data-slide="next"
              href="#pablo"
              onClick={e => {
                e.preventDefault();
                next();
              }}
              role="button"
            >
              <span className="now-ui-icons arrows-1_minimal-right" />
              <span className="sr-only">Next</span>
            </a>
          </Carousel>
        </div> */}
      </div>
    </>
  );
}

export default Headers;
