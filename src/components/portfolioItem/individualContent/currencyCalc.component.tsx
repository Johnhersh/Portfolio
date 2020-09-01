import React from "react";
import Vimeo from "@u-wave/react-vimeo";

import ScreenshotCurrency from "../../../Assets/Images_Neu/Currency_Phone.png";

function CurrencyCalc() {
  return (
    <div className="screenshotImageContainer">
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
      <img src={ScreenshotCurrency} className="screenshotContentImage" alt="screenshot" />
    </div>
  );
}

export default CurrencyCalc;
