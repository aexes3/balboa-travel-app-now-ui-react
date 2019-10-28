import React from "react";
import Rellax from "rellax";

// reactstrap components

// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import Footer from "components/Footers/Footer.js";

// sections for this page
import Headers from "./sections-sections/Headers.js";
import Features from "./sections-sections/Features.js";
import Cards from "./presentation-sections/Cards.js";
import Teams from "./sections-sections/Teams.js";
import Components from "./presentation-sections/Components";
import SectionsCards from "./presentation-sections/Sections";
import Testimonials from "./sections-sections/Testimonials.js";
import ContactUs from "./sections-sections/ContactUs.js";
import BasicComponents from "./presentation-sections/BasicComponents.js";

function Sections() {
  React.useEffect(() => {
    document.body.classList.add("sections-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#/") + 2
    );
    var hrefId = href.substring(href.lastIndexOf("#") + 1);
    if (href.lastIndexOf("#") > 0) {
      document.getElementById(hrefId).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
    return function cleanup() {
      document.body.classList.remove("sections-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  React.useEffect(() => {
    document.body.classList.add("presentation-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    // window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    // initialise Rellax for this page
    if (window.innerWidth >= 991) {
      setTimeout(function() {
        new Rellax(".rellax", {
          center: true
        });
      }, 5000);
      new Rellax(".rellax-header");
      new Rellax(".rellax-text");
    }

    // we need to add a script for the github buttons
    let script = document.createElement("script");
    script.src = "https://buttons.github.io/buttons.js";
    script.id = "github-buttons-script-id";
    document.body.appendChild(script);

    return function cleanup() {
      document.body.classList.remove("presentation-page");
      document.body.classList.remove("sidebar-collapse");

      // we need to remove the script when we change the page
      script.parentNode.removeChild(script);
    };
  });
  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper">
        <div className="section-space"></div>
        {/* <Presentation /> */}
        <Headers /> {/*Large Pic of city - no Balboa words */}
        <Cards /> {/*IFram video*/}
        <Components />
        <SectionsCards />
        <Features /> {/* Hawaiian Airlines*/}
        <BasicComponents /> {/*Ipad with floating images */}
        <Teams />
        {/* <Projects /> */}
        {/* <Pricing /> */}
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default Sections;
