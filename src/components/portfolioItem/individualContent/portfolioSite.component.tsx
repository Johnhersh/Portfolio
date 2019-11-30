import React from "react";
import Vimeo from "@u-wave/react-vimeo";

import "./portfolioSite.styles.scss";

import screenshotFirepointe from "../../../Assets/Phone_Firepointe.png";

function PortfolioSite() {
  return (
    <div className="portfolioSiteContainer">
      <Vimeo
        video="375836140"
        width="348"
        height="750"
        // width="100%"
        // height="100%"
        className="portfolioVideo"
        frameBorder="0"
        responsive
        autoplay
      />
      <div className="portfolioImage">
        <img
          src={screenshotFirepointe}
          className="contentImage"
          alt="screenshot"
        />
      </div>
    </div>
  );
}

export default PortfolioSite;
