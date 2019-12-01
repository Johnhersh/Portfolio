import React from "react";
import Vimeo from "@u-wave/react-vimeo";

import "./portfolioSite.styles.scss";

import screenshotFirepointe from "../../../Assets/Phone_Firepointe.png";

function PortfolioSite() {
  return (
    <div className="portfolioSiteContainer">
      <Vimeo
        video="375836140"
        className="portfolioVideo"
        start={3}
        responsive
        showPortrait={false}
        showTitle={false}
        showByline={false}
        controls={false}
        loop={true}
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
