import React from "react";

// reactstrap components
import {
  Alert,
  Card,
  CardBody,
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
      <div className="newsflash">
        <ul>
          <li>
            <h2>Title #1</h2>
            <p>Text Content #1</p>
          </li>
          <li>
            <h2>Title #2</h2>
            <p>Text Content #2</p>
          </li>
          <li>

            <h2>Title #3</h2>
            <p>Text Content #3</p>

          </li>
          <li>
            <h2>Title #4</h2>
            <p>Text Content #4</p>
          </li>
          <li>
            <h2>Title #5</h2>
            <p>Text Content #5</p>
          </li>
          <li>
            <h2>Title #6</h2>
            <p>Text Content #6</p>
          </li>
        </ul>
      </div>
    ),
    altText: "",
    caption: ""
  },
  {
    src: "url(" + require("assets/img/bg15.jpg") + ")",
    content: (
      <Card>
      <CardBody>
        <blockquote className="blockquote blockquote-primary mb-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </CardBody>
    </Card>
    )
  },
  {
    
    content: (
      <Row>
        <Col className="ml-auto mr-auto text-right" md="6">
          <h1 className="title">On the run tour.</h1>
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
      <Alert className="alert" color="danger">
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
        <Alert className="alert" color="danger">
      </Alert>
      </div>
    </>
  );
}

export default NewsFlash;
