/*eslint-disable*/
import React from "react";

// reactstrap components

// core components

function QualcommHeader() {
  return (
    <>
      <div className="page-header clear-filter" id="qtop">
        <div className="rellax-header rellax-header-sky" data-rellax-speed="-4">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/presentation-page/water.png") +
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
                require("assets/img/presentation-page/sand.png") +
                ")"
            }}
          ></div>
        </div>
        <div className="rellax-text-container rellax-text">
          <h1 className="h1-seo" data-rellax-speed="-1">
            Qualcomm
          </h1>
        </div>
        <h3 className="h3-description rellax-text" data-rellax-speed="-1">
          Nothing But Tech
        </h3>
      </div>
    </>
  );
}

export default QualcommHeader;
