import React from "react";
import Rellax from "rellax";
// reactstrap components

// core components
import QualcommTransparentNavbar from "components/Navbars/QualcommTransparentNavbar.js";
import QualcommHeader from "./presentation-sections/QualcommHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";

// sections for this page
import BalbaoVideo from "./sections-sections/BalbaoVideo.js";
import NewsFlash from './sections-sections/NewsFlash';
import Flights from "./sections-sections/Flights";
import GroundTravel from "./sections-sections/GroundTravel.js";
import Hotel from "./sections-sections/Hotel.js";
// import Teams from "./sections-sections/Teams.js";
// import SectionsCards from "./sections-sections/SectionsCards";
// import Managers from "./sections-sections/Managers.js";
// import Faq from "./sections-sections/Faq.js";
// import Booking from './sections-sections/Booking.js';
// import MeetingIncentives from "./sections-sections/MeetingIncentives.js";
// import Vacations from "./sections-sections/Vacations.js";

function Qualcomm() {
  React.useEffect(() => {
    document.body.classList.add("presentation-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
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
  });

    
  return (
    <>
      <QualcommTransparentNavbar />
      <div className="wrapper">
        <QualcommHeader />
        <BalbaoVideo /> 
        <NewsFlash /> 
        <Flights />
        <GroundTravel />
        <Hotel />
        <FooterBlack />
      </div>
    </>
  );
}

export default Qualcomm;
