import React from "react";
import { Link } from "react-router-dom";
import Image from '../../assets/img/presentation-page/balboalogo.png';
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function ScrollTransparentNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? ""
      : " navbar-transparent"
  );
  const [, setBuyButtonColor] = React.useState(
    (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
      ? "info"
      : "neutral"
  );
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
        setBuyButtonColor("info");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor(" navbar-transparent");
        setBuyButtonColor("neutral");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top" + navbarColor} color="white" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              <img src={Image} alt="balboa logo" />
            </NavbarBrand>
            <UncontrolledTooltip target="navbar-brand">
              Designed by Balboa Travel
            </UncontrolledTooltip>
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
              
            <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i
                    aria-hidden={true}
                    className="fab fa-home"
                  ></i>
                  <p>Home</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem to="/sections#headers" tag={Link}>
                    <i className="now-ui-icons shopping_box"></i>
                  Home
                  </DropdownItem>
                  <DropdownItem to="/sections#features" tag={Link}>
                    <i className="now-ui-icons ui-2_settings-90"></i>
                    Travel Locations
                  </DropdownItem>
                  {/* <DropdownItem to="/sections#blogs" tag={Link}>
                    <i className="now-ui-icons text_align-left"></i>
                    Airlines
                  </DropdownItem> */}
                  <DropdownItem to="/sections#teams" tag={Link}>
                    <i className="now-ui-icons sport_user-run"></i>
                    Directory
                  </DropdownItem>
                  {/* <DropdownItem to="/sections#projects" tag={Link}>
                    <i className="now-ui-icons education_paper"></i>
                    Hotel Directory
                  </DropdownItem> */}
                  {/* <DropdownItem to="/sections#pricing" tag={Link}>
                    <i className="now-ui-icons business_money-coins"></i>
                    TRavel Promotions
                  </DropdownItem> */}
                  <DropdownItem to="/sections#testimonials" tag={Link}>
                    <i className="now-ui-icons ui-2_chat-round"></i>
                    Testimonials
                  </DropdownItem>
                  <DropdownItem to="/sections#contact-us" tag={Link}>
                    <i className="now-ui-icons tech_mobile"></i>
                    Contact Us
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink1"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app"
                     aria-hidden={true}
                  ></i>
                  <p>Get in Touch</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink1" right>
                  <DropdownItem>
                     <i className="fa fa-comment"></i>
                     Chat
                  </DropdownItem>
                  <DropdownItem>
                    <i className="fa fa-sms"></i>
                    Send a Text
                  </DropdownItem>
                  <DropdownItem href="tel:858-678-3300" target="_blank">
                      <i className="fa fa-phone"></i>
                      858-678-3300 M-F 6a - 6p
                    </DropdownItem>
                    <DropdownItem href="tel:888-888-8888" target="_blank">
                      <i className="fa fa-phone"></i>
                      800-800-8888 Afterhours
                    </DropdownItem>
                    <DropdownItem href="mailto:travel@balboa.com" target="_blank">
                      <i className="fa fa-envelope"></i>
                      travel@babloa.com
                    </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i
                    aria-hidden={true}
                    className="fab fa-staylinked"
                  ></i>
                  <p>Quick Links</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem href="https://balboa.graspdata.com//Public/PrintInvoice.aspx?agency=1D71F7ED791B4A05801516457400D2CC&filtermode=booking" target="_blank">
                    <i className="fa fa-print"></i>
                    Print My Invoice
                  </DropdownItem>
                  <DropdownItem href="https://www.concursolutions.com/nui/signin" target="_blank">
                    <i className="fa fa-calendar-alt"></i>
                    Online Booking
                  </DropdownItem>
                  <DropdownItem href="https://www.flightstats.com/v2/" target="_blank">
                    <i className="fas fa-plane-departure"></i>
                    Flight Status
                  </DropdownItem>
                  <DropdownItem href="https://www.balboa.com/airline-online-check-in" target="_blank">
                    <i className="fa fa-map-marker-alt"></i>
                    Online Check-In
                  </DropdownItem>
                  <DropdownItem href="#!" target="_blank">
                    <i className="fa fa-question-circle"></i>
                    General Questions
                  </DropdownItem>
                  {/* <DropdownItem href="#!" target="_blank">
                    <i className="now-ui-icons shopping_bag-16"></i>
                    Product Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/profile-page">
                    <i className="now-ui-icons users_single-02"></i>
                    Profile Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sign-up">
                    <i className="now-ui-icons tech_mobile"></i>
                    Signup Page
                  </DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                {/* <Button
                  className="nav-link btn-default"
                  color={buyButtonColor}
                  href="https://www.creative-tim.com/product/now-ui-kit-pro-react?ref=nuk-pro-react-scroll-transparent-navbar"
                  target="_blank"
                >
                  <p>Buy Now</p>
                </Button> */}
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ScrollTransparentNavbar;
