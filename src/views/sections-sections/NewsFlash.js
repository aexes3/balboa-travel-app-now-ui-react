import React from "react";
import {
  Card,
  CardBody,
  Container,
  CardTitle,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

const items = [
  {
    
    content: (
      <Card className="blockquote">
      <CardBody>
        <h6 className="category text-danger">
          <i className="fa fa-info-circle"></i>
          &nbsp;Alert!
        </h6>
        <CardTitle>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            Lack of transportation in New York
          </a>

        </CardTitle>
        <p className="card-description">
          We're as confused as anyone. New York has run out of taxi's and busses..
          By foot is the only means of transportation at this time. 
        </p>
        
      </CardBody>
    </Card>
    ),
    altText: "",
    caption: ""
  },
  {
    content: (
      <Card className="blockquote">
      <CardBody>
        <h6 className="category text-danger">
          <i className="fa fa-info-circle"></i>
          &nbsp;Alert!
        </h6>
        <CardTitle>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            Here Be Dragons
          </a>
        </CardTitle>
        <p className="card-description">
          An immersive production studio focused on virtual reality content,
          has closed a $10 million Series A round led by Discovery
          Communications
        </p>
        
      </CardBody>
    </Card>
    )
  },
  {
    
    content: (
      <Card className="blockquote">
      <CardBody>
        <h6 className="category text-danger">
          <i className="fa fa-info-circle"></i>
          &nbsp;Alert!
        </h6>
        <CardTitle>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            Stay tuned
          </a>
        </CardTitle>
        <p className="card-description">
          Snowy weather is happing in Austin, Tx. The whole city is shut down due to
          unfamiliarity with these conditions and proper driving lessons. Austin is 
          already known for their bad drivers, and this isn't helping!
        </p>
        
      </CardBody>
    </Card>
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

