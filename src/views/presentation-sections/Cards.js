import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Cards() {
  return (
    <>
      <div className="section section-cards">
        <Container>
          <Row>
            <Col className="text-center ml-auto mr-auto" md="8">
              <div className="section-description">
                <h2 className="title">Beautiful Cards</h2>
                <h6 className="category">One Card for Every Problem</h6>
                <h5 className="description">
                  From cards designed for blog posts, to product cards or user
                  profiles, you will have many options to choose from. All the
                  cards follow the Now UI Kit style principles and have a design
                  that stands out. We have gone above and beyond with options
                  for you to organise your information.
                </h5>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <div className="images-container">
                <div className="image-container1 mr-1">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/card3.jpg")}
                  ></img>
                </div>
                <div className="image-container2 mr-1">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/card6.jpg")}
                  ></img>
                </div>
                <div className="image-container3 mr-1">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/card7.jpg")}
                  ></img>
                </div>
                <div className="image-container4 mr-1">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/card5.jpg")}
                  ></img>
                </div>
                <div className="image-container5">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/card4.jpg")}
                  ></img>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Cards;



//With Modal

// import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Image from "assets/img/presentation-page/card3.jpg"

// // reactstrap components
// import { Container, Row, Col } from "reactstrap";

// // core components
// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles(theme => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundImage: `url(${Image})`,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));


// export default function SimpleModal() {
//   const classes = useStyles();
//   // getModalStyle is not a pure function, we roll the style only on the first render
//   const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   return (
//     <>
//       <div className="section section-cards">
//         <Container>
//           <Row>
//             <Col className="text-center ml-auto mr-auto" md="8">
//               <div className="section-description">
//                 <h2 className="title">Beautiful Cards</h2>
//                 <h6 className="category">One Card for Every Problem</h6>
//                 <h5 className="description">
//                   <div>
//                     <p>Click to get the full Modal experience!</p>
//                     <button type="button" onClick={handleOpen}>
//                       Open Modal
//                     </button>
//                     <Modal
//                       aria-labelledby="simple-modal-title"
//                       aria-describedby="simple-modal-description"
//                       open={open}
//                       onClose={handleClose}
//                     >
//                       <div style={modalStyle} className={classes.paper}>
//                         <h2 id="simple-modal-title">Text in a modal</h2>
//                         <p id="simple-modal-description">
//                           Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//                         </p>
//                         <SimpleModal />
//                       </div>
//                     </Modal>
//                   </div>
//                 </h5>
//               </div>
//             </Col>
//           </Row>
//           <Row>
//             <Col md="12">
//               <div className="images-container">
//                 <div className="image-container1 mr-1">
//                   <img
//                     alt="..."
//                     src={require("assets/img/presentation-page/card3.jpg")}
//                   ></img>
//                 </div>
//                 <div className="image-container2 mr-1">
//                   <img
//                     alt="..."
//                     src={require("assets/img/presentation-page/card5.jpg")}
//                   ></img>
//                 </div>
//                 <div className="image-container3 mr-1">
//                   <img
//                     alt="..."
//                     src={require("assets/img/presentation-page/card7.jpg")}
//                   ></img>
//                 </div>
//                 <div className="image-container4 mr-1">
//                   <img
//                     alt="..."
//                     src={require("assets/img/presentation-page/card5.jpg")}
//                   ></img>
//                 </div>
//                 <div className="image-container5">
//                   <img
//                     alt="..."
//                     src={require("assets/img/presentation-page/card4.jpg")}
//                   ></img>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </>
//   );
// }



// With Carousel

// import React from "react";
// import { Carousel, CarouselItem, CarouselIndicators} from "reactstrap";

// // core components
// const items = [
//   {
//     src: require("assets/img/bg1.jpg"),
//     altText: "Nature, United States",
//     caption: "Nature, United States"
//   },
//   {
//     src: require("assets/img/bg3.jpg"),
//     altText: "Somewhere Beyond, United States",
//     caption: "Somewhere Beyond, United States"
//   },
//   {
//     src: require("assets/img/bg4.jpg"),
//     altText: "Yellowstone National Park, United States",
//     caption: "Yellowstone National Park, United States"
//   }
// ];

// function Cards() {
//   const [activeIndex, setActiveIndex] = React.useState(0);
//   const [animating, setAnimating] = React.useState(false);
//   const onExiting = () => {
//     setAnimating(true);
//   };
//   const onExited = () => {
//     setAnimating(false);
//   };
//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };
//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };
//   const goToIndex = newIndex => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };
//   return (
//     <>
//       <Carousel activeIndex={activeIndex} next={next} previous={previous}>
//         <CarouselIndicators
//           items={items}
//           activeIndex={activeIndex}
//           onClickHandler={goToIndex}
//         />
//         {items.map(item => {
//           return (
//             <CarouselItem
//               onExiting={onExiting}
//               onExited={onExited}
//               key={item.src}
//             >
//               <img src={item.src} alt={item.altText} />
//               <div>
//                 <h5>{item.caption}</h5>
//               </div>
//             </CarouselItem>
//           );
//         })}
//         <a
//           className="carousel-control-prev"
//           data-slide="prev"
//           href="#pablo"
//           onClick={e => {
//             e.preventDefault();
//             previous();
//           }}
//           role="button"
//         >
//           <i className="now-ui-icons arrows-1_minimal-left"></i>
//         </a>
//         <a
//           className="carousel-control-next"
//           data-slide="next"
//           href="#pablo"
//           onClick={e => {
//             e.preventDefault();
//             next();
//           }}
//           role="button"
//         >
//           <i className="now-ui-icons arrows-1_minimal-right"></i>
//         </a>
//       </Carousel>
//     </>
//   );
// }

// export default Cards;


// with carousel from tesimonies

// import React from "react";

// // reactstrap components
// import {
//   Card,
//   CardBody,
//   CardFooter,
//   CardTitle,
//   Row,
//   Col,
//   Carousel,
//   CarouselItem,
//   CarouselIndicators
// } from "reactstrap";

// // core components

// const items = [
//   {
//     content: (
//       <Card className="card-testimonial card-plain">
//         <div className="card-avatar">
//           <a href="#pablo" onClick={e => e.preventDefault()}>
//             <img
//               alt="..."
//               className="img img-raised rounded"
//               src="https://s3.amazonaws.com/creativetim_bucket/photos/154001/thumb.JPG?1501184024"
//             ></img>
//           </a>
//         </div>
//         <CardBody>
//           <h5 className="card-description">
//             "Awesome Design and very well organized code structure! Also, it
//             contains numerous elements using which achieving the perfect or
//             required template can be done with ease. Great job!"
//           </h5>
//           <CardTitle tag="h4">Stefan</CardTitle>
//           <h6 className="category text-muted">Web Designer</h6>
//           <CardFooter>
//             <i className="fa fa-star text-warning mr-1"></i>
//             <i className="fa fa-star text-warning mr-1"></i>
//             <i className="fa fa-star text-warning mr-1"></i>
//             <i className="fa fa-star text-warning mr-1"></i>
//             <i className="fa fa-star text-warning"></i>
//           </CardFooter>
//         </CardBody>
//       </Card>
//     ),
//     src: "0",
//     altText: "",
//     caption: ""
//   },
//   {
//     content: (
//       <Card className="card-testimonial card-plain">
//         <div className="card-avatar">
//           <a href="#pablo" onClick={e => e.preventDefault()}>
//             <img
//               alt="..."
//               className="img img-raised rounded"
//               src="https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg"
//             ></img>
//           </a>
//         </div>
//         <CardBody>
//           <h5 className="card-description">
//             "It looks great and its somewhat futuristics cant wait to use it on
//             a project here in nigeria i'm sure it would put me ahead.. I cant
//             wait to hv enough money to buy ur product."
//           </h5>
//           <CardTitle tag="h4">Mr. Bones</CardTitle>
//           <h6 className="category text-muted">Web Designer</h6>
//           <CardFooter>
//             <i className="fa fa-star text-warning mr-1"></i>
//             <i className="fa fa-star text-warning mr-1"></i>
//             <i className="fa fa-star text-warning mr-1"></i>
//             <i className="fa fa-star text-warning mr-1"></i>
//             <i className="fa fa-star text-warning"></i>
//           </CardFooter>
//         </CardBody>
//       </Card>
//     ),
//     src: "1",
//     altText: "",
//     caption: ""
//   },
//   {
//     content: (
//       <Card className="card-testimonial card-plain">
//         <div className="card-avatar">
//           <a href="#pablo" onClick={e => e.preventDefault()}>
//             <img
//               alt="..."
//               className="img img-raised rounded"
//               src="https://s3.amazonaws.com/creativetim_bucket/photos/123124/thumb.?1480480048"
//             ></img>
//           </a>
//         </div>
//         <CardBody>
//           <h5 className="card-description">
//             "Everything is perfect. Codes are really organized. It's easy to
//             edit for my own purposes. It's great that it is built on top of
//             Bootstrap 4." <br></br>
//             <br></br>
//           </h5>
//           <CardTitle tag="h4">DOĞA</CardTitle>
//           <h6 className="category text-muted">Web Developer</h6>
//           <CardFooter>
//             <i className="fa fa-star text-warning mr-1"></i>
//             <i className="fa fa-star text-warning mr-1"></i>
//             <i className="fa fa-star text-warning mr-1"></i>
//             <i className="fa fa-star text-warning mr-1"></i>
//             <i className="fa fa-star text-warning"></i>
//           </CardFooter>
//         </CardBody>
//       </Card>
//     ),
//     src: "2",
//     altText: "",
//     caption: ""
//   }
// ];

// function Cards() {
//   const [activeIndex, setActiveIndex] = React.useState(0);
//   const [animating, setAnimating] = React.useState(false);
//   const onExiting = () => {
//     setAnimating(true);
//   };
//   const onExited = () => {
//     setAnimating(false);
//   };
//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };
//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };
//   const goToIndex = newIndex => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };
//   return (
//     <>
//       <div
//         className="section section-testimonials"
//         data-background-color="black"
//       >
//         <Row>
//           <Col className="ml-auto mr-auto text-center" md="8">
//             <h2 className="title">Trusted by 818,000+ People</h2>
//             <h5 className="description">
//               The UI Kits, Templates and Dashboards that we've created are used
//               by <b>818,000+ web developers</b> in over{" "}
//               <b>1,476,616 Web Projects</b>. This is what some of them think:
//             </h5>
//           </Col>
//         </Row>
//         <Row>
//           <Col md="2">
//             <div className="testimonials-people">
//               <img
//                 alt="..."
//                 className="left-first-person img-raised rellax"
//                 data-rellax-speed="1"
//                 src="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
//               ></img>
//               <img
//                 alt="..."
//                 className="left-second-person img-raised rellax"
//                 data-rellax-speed="3"
//                 src="https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg"
//               ></img>
//               <img
//                 alt="..."
//                 className="left-third-person img-raised rellax"
//                 data-rellax-speed="2"
//                 src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
//               ></img>
//               <img
//                 alt="..."
//                 className="left-fourth-person img-raised rellax"
//                 data-rellax-speed="5"
//                 src="https://s3.amazonaws.com/uifaces/faces/twitter/kerem/128.jpg"
//               ></img>
//               <img
//                 alt="..."
//                 className="left-fifth-person img-raised rellax"
//                 data-rellax-speed="7"
//                 src="https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
//               ></img>
//             </div>
//           </Col>
//           <Col md="8">
//             <Carousel activeIndex={activeIndex} next={next} previous={previous}>
//               <CarouselIndicators
//                 items={items}
//                 activeIndex={activeIndex}
//                 onClickHandler={goToIndex}
//               />
//               {items.map((item, key) => {
//                 return (
//                   <CarouselItem
//                     onExiting={onExiting}
//                     onExited={onExited}
//                     key={key}
//                   >
//                     {item.content}
//                   </CarouselItem>
//                 );
//               })}
//               <a
//                 className="left carousel-control carousel-control-prev"
//                 data-slide="prev"
//                 href="#pablo"
//                 onClick={e => {
//                   e.preventDefault();
//                   previous();
//                 }}
//                 role="button"
//               >
//                 <span className="now-ui-icons arrows-1_minimal-left" />
//                 <span className="sr-only">Previous</span>
//               </a>
//               <a
//                 className="right carousel-control carousel-control-next"
//                 data-slide="next"
//                 href="#pablo"
//                 onClick={e => {
//                   e.preventDefault();
//                   next();
//                 }}
//                 role="button"
//               >
//                 <span className="now-ui-icons arrows-1_minimal-right" />
//                 <span className="sr-only">Next</span>
//               </a>
//             </Carousel>
//           </Col>
//           <Col md="2">
//             <div className="testimonials-people">
//               <img
//                 alt="..."
//                 className="right-first-person img-raised rellax"
//                 data-rellax-speed="5"
//                 src="https://s3.amazonaws.com/uifaces/faces/twitter/tonypeterson/128.jpg"
//               ></img>
//               <img
//                 alt="..."
//                 className="right-second-person img-raised rellax"
//                 data-rellax-speed="1"
//                 src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
//               ></img>
//               <img
//                 alt="..."
//                 className="right-fourth-person img-raised rellax"
//                 data-rellax-speed="7"
//                 src="https://s3.amazonaws.com/uifaces/faces/twitter/mattsince87/128.jpg"
//               ></img>
//               <img
//                 alt="..."
//                 className="right-fifth-person img-raised rellax"
//                 data-rellax-speed="3"
//                 src="https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg"
//               ></img>
//               <img
//                 alt="..."
//                 className="right-sixth-person img-raised rellax"
//                 data-rellax-speed="5"
//                 src="https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg"
//               ></img>
//             </div>
//           </Col>
//         </Row>
//       </div>
//     </>
//   );
// }

// export default Cards;
