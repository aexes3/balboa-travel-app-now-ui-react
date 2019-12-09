import React from "react";
import Rellax from "rellax";

// reactstrap components

// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import FooterBlack from "components/Footers/FooterBlack.js";

// sections for this page
import Headers from "./sections-sections/Headers.js";
// import Features from "./sections-sections/Features.js";
import Cards from "./presentation-sections/Cards.js";
import Teams from "./sections-sections/Teams.js";
import SectionsCards from "./presentation-sections/Sections";
import Managers from "./sections-sections/Managers.js";
import ContactUs from "./sections-sections/ContactUs.js";
import Faq from "./sections-sections/Faq.js";
import Projects from './sections-sections/Projects';
import NewsFlash from './sections-sections/NewsFlash';
import MeetingIncentives from "./sections-sections/MeetingIncentives.js";
import Vacations from "./sections-sections/Vacations.js";
import Airlines from "./sections-sections/Airlines.js";

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
        <Headers /> {/*Large Pic of city */}
        <Cards /> {/*IFrame video news feed*/}
        <NewsFlash /> {/*This section has the carousel with sicky alerts */}
        <Airlines />
        {/* <Components /> 4 pop-up cards */}
        <SectionsCards /> {/*12 card links*/}
        <Faq />
        {/* <Features /> Carousel */}
        <MeetingIncentives />
        <Vacations />
        {/* <BasicComponents /> Ipad with floating images */}
        <Projects /> {/* Concur login images with ipad(s) */}
        <Teams />
        <Managers /> 
        {/* <ContactUs /> */}
        <FooterBlack />
      </div>
    </>
  );
}

export default Sections;
