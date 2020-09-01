import React from "react";

import ScreenshotPortfolio from "../../../Assets/Images_Neu/Portfolio.png";
import ScreenshotPortfolioPhone from "../../../Assets/Images_Neu/Portfolio_Phone.png";

function PortfolioSite() {
  return (
    <div className="screenshotImageContainer">
      <img src={ScreenshotPortfolioPhone} className="screenshotContentImage" alt="screenshot" />
      <img src={ScreenshotPortfolio} className="screenshotContentImage" alt="screenshot" />
    </div>
  );
}

export default PortfolioSite;
