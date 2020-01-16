import React from "react";

function Headers() {
  return (
    <>
      <div className="cd-section" id="top">
      <div className="page-header clear-filter">
        <div className="rellax-header rellax-header-sky" data-rellax-speed="-4">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/presentation-page/test1.jpeg") +
                ")"
            }}
          ></div>
        </div>
        <div
          className="rellax-header rellax-header-buildings"
          data-rellax-speed="0"
        >
          <div
            className="page-header-image page-header-city"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/presentation-page/test1.png") +
                ")"
            }}
          ></div>
        </div>
        <div className="rellax-text-container rellax-text">
          <h1 className="h1-seo" data-rellax-speed="-1">
            Balboa 1
          </h1>
          
        </div>
        <h3 className="h3-description rellax-text" data-rellax-speed="-1">
          A Travel Agency
        </h3>
      </div>        
     
      </div>
    </>
  );
}

export default Headers;
