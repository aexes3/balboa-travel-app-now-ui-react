import React from "react";
import {
  Card,
  CardBody,
  Container,
  CardTitle,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Row,
  Col,
} from "reactstrap";

const items = [
  {
    
    content: (
      <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
          <img
            alt="..."
            src={require("assets/img/presentation-page/alerts/idReqs.jpg")}
          />
        </Col>
      </Row>
    ),
  },
  {
    content: (
      <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
          <img
            alt="..."
            src={require("assets/img/presentation-page/alerts/passport.jpg")}
          />
        </Col>
      </Row>
    )
  },
  {
    content: (
      <Row>
        <Col className="ml-auto mr-auto text-center" md="8">
          <img
            alt="..."
            src={require("assets/img/presentation-page/alerts/safteyPrioity.jpg")}
          />
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
      
      <div className="cd-section" id="headers" >
      <div
          className="header-3 news-flash"
          style={{
            backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")"
          }}
        >

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

