import React from "react";
import Vimeo from "@u-wave/react-vimeo";

import ScreenshotCurrency from "../../../Assets/Images_Neu/Currency_Phone.png";

function CurrencyCalc() {
  return (
    <div className="screenshotsContainer">
      <div style={{ flex: 0.5 }} />
      <div className="screenshotWrapper vertical">
        <Vimeo
          video="447021693"
          className="vimeoVideo"
          start={0}
          responsive
          showPortrait={false}
          showTitle={false}
          showByline={false}
          controls={false}
          loop={true}
          background={true}
          autoplay={true}
        />
      </div>
      <div className="screenshotWrapper vertical">
        <img src={ScreenshotCurrency} className="screenshotContentImage" alt="screenshot" />
      </div>
      <div style={{ flex: 0.5 }} />
    </div>
  );
}

export default CurrencyCalc;
