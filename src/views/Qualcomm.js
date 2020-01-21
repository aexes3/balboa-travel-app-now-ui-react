import React from "react";
import Rellax from "rellax";
// reactstrap components

// core components
import ScrollTransparentNavbar1 from "components/Navbars/ScrollTransparentNavbar1.js";
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

    // // we need to add a script for the github buttons
    // let script = document.createElement("script");
    // script.src = "https://buttons.github.io/buttons.js";
    // script.id = "github-buttons-script-id";
    // document.body.appendChild(script);

    // return function cleanup() {
    //   document.body.classList.remove("presentation-page");
    //   document.body.classList.remove("sidebar-collapse");

    //   // we need to remove the script when we change the page
    //   script.parentNode.removeChild(script);
    // };
  });
  return (
    <>
      <ScrollTransparentNavbar1 />
      <div className="wrapper">
        <QualcommHeader />
        <BalbaoVideo /> 
        <NewsFlash /> 
        <Flights />
        <GroundTravel />
        <Hotel />
        {/* <Components /> 
        <SectionsCards /> 
        <Widgets />
        <WidgetSky />
        <Faq />
        <Features /> 
        <MeetingIncentives />
        <Vacations />
        <BasicComponents /> 
        <Booking />
        <Teams />
        <Managers /> 
        <ContactUs /> */}
        <FooterBlack />
      </div>
    </>
  );
}

export default Qualcomm;
