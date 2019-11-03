import React from "react";

// reactstrap components
import {
  Alert,
  Button,
  Collapse,
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

// core components
const items = [
  {
    src: "url(" + require("assets/img/bg20.jpg") + ")",
    content: (
      <Row>
        <Col className="ml-auto mr-auto text-right" md="4">
        <h2 className="title">On the run tour.</h2>
          <h4 className="description">
            On the Run Tour: Beyoncé and Jay Z is a 2014 concert special which
            documents the September 12 and 13, 2014, shows of American singers
            {"'"}
            Beyoncé and Jay-Z joint co-headlining venture On the Run Tour.
          </h4>
        </Col>
        <Col className="ml-auto mr-auto text-right" md="4">
          <h2 className="title">On the run tour.</h2>
          <h4 className="description">
            On the Run Tour: Beyoncé and Jay Z is a 2014 concert special which
            documents the September 12 and 13, 2014, shows of American singers
            {"'"}
            Beyoncé and Jay-Z joint co-headlining venture On the Run Tour.
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
        <Col className="ml-auto mr-auto text-center" md="6">
          <h2 className="title">Island of legends.</h2>
          <h4 className="description">
            The islands of Malta and Gozo are brilliant for a family holiday,
            packed with fun places to visit whatever your children’s ages. The
            islands’ small size means everywhere is within easy reach.
          </h4>
        </Col>
        <Col className="ml-auto mr-auto text-center" md="6">
          <h2 className="title">Island of legends.</h2>
          <h4 className="description">
            The islands of Malta and Gozo are brilliant for a family holiday,
            packed with fun places to visit whatever your children’s ages. The
            islands’ small size means everywhere is within easy reach.
          </h4>
        </Col>
      </Row>
    )
  },
  {
    src: "url(" + require("assets/img/bg17.jpg") + ")",
    content: (
      <Row>
        <Col className="text-left" md="6">
          <h2 className="title">Arctic Sea ice.</h2>
          <h4 className="description">
            According to the National Oceanic and Atmospheric Administration,
            Ted Scambos, NSIDC lead scientist, puts the potentially record low
            maximum sea ice extent this year down to low ice extent in the
            Pacific and a late drop in ice extent in the Barents Sea.
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

function NewsFlash() {
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
  return (
    <>
      
      <div className="cd-section" id="headers">
      <Alert className="alert" color="danger"><h3>ALERTS! ALERTS! ALERTS! ALERTS! ALERTS! ALERTS! ALERTS! ALERTS! ALERTS!</h3>
      </Alert>
        <div className="header-3">

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
        </div>
      </div>
    </>
  );
}

export default NewsFlash;
