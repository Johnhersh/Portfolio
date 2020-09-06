import React from "react";

import ScreenshotPortfolio from "../../../Assets/Images_Neu/Portfolio.png";
import ScreenshotPortfolioPhone from "../../../Assets/Images_Neu/Portfolio_Phone.png";

function PortfolioSite() {
  return (
    <div className="screenshotsContainer">
      <div style={{ flex: 0.5 }} />
      <div className="screenshotWrapper">
        <img src={ScreenshotPortfolioPhone} className="screenshotContentImage" alt="screenshot" />
      </div>
      <div className="screenshotWrapper wide">
        <img src={ScreenshotPortfolio} className="screenshotContentImage" alt="screenshot" />
      </div>
      <div style={{ flex: 0.5 }} />
    </div>
  );
}

export default PortfolioSite;
