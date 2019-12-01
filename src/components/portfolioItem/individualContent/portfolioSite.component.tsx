import React from "react";

import "./portfolioSite.styles.scss";

import laptopPortfolio from "../../../Assets/Laptop_Portfolio.png";

function PortfolioSite() {
  return (
    <div className="portfolioSiteContainer">
      <div className="portfolioImage">
        <img src={laptopPortfolio} className="contentImage" alt="screenshot" />
      </div>
    </div>
  );
}

export default PortfolioSite;
