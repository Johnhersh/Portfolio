import React from "react";

import ScreenshotPortfolio from "../../../Assets/Images_Neu/Portfolio.png";
import ScreenshotPortfolioPhone from "../../../Assets/Images_Neu/Portfolio_Phone.png";

function PortfolioSite() {
  return (
    <div className="screenshotsContainer">
      <div className="screenshotWrapper vertical">
        <img src={ScreenshotPortfolioPhone} className="screenshotContentImage" alt="screenshot" />
      </div>
      <div className="screenshotWrapper wide">
        <img src={ScreenshotPortfolio} className="screenshotContentImage" alt="screenshot" />
      </div>
    </div>
  );
}

export default PortfolioSite;
