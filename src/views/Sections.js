import React from "react";
import Rellax from "rellax";

// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import FooterBlack from "components/Footers/FooterBlack.js";
// sections for this page
import Headers from "./sections-sections/Headers.js";
import BalbaoVideo from "./sections-sections/BalbaoVideo.js";
import NewsFlash from './sections-sections/NewsFlash';
import Flights from "./sections-sections/Flights";
import GroundTravel from "./sections-sections/GroundTravel.js";
import Hotel from "./sections-sections/Hotel.js";
import SectionsCards from "./sections-sections/SectionsCards";
import Faq from "./sections-sections/Faq.js";
import MeetingIncentives from "./sections-sections/MeetingIncentives.js";
import Vacations from "./sections-sections/Vacations.js";
import Booking from './sections-sections/Booking.js';
// import TeamMembers from "./sections-sections/TeamMembers.js";
import Managers from "./sections-sections/Managers.js";
// import { isProperty } from "@babel/types";

function Sections() {
  React.useEffect(() => {
    // document.body.classList.add("sections-page");
    // document.body.classList.add("sidebar-collapse");
    // document.documentElement.classList.remove("nav-open");
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
      // new Rellax(".rellax-header");
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
        <Headers /> 
        <BalbaoVideo /> 
        <NewsFlash /> 
        <Booking /> {/* Concur login images with ipad */}
        <SectionsCards />
        <Flights />
        <GroundTravel />
        <Hotel />
        <MeetingIncentives />
        <Vacations />
        <Faq />
        {/* <TeamMembers /> */}
        <Managers /> 
        <FooterBlack />
      </div>
    </>
  );
}

export default Sections;