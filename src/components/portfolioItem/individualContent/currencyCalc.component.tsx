import React from "react";
import Vimeo from "@u-wave/react-vimeo";

import "./currencyCalc.styles.scss";

import screenshotCurrency from "../../../Assets/Phone_CurrencyCalc.png";

function CurrencyCalc() {
  return (
    <div className="currencyCalcContainer">
      <Vimeo
        video="447021693"
        className="currencyConverterVideo"
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
      <div className="currencyCalcImage">
        <img src={screenshotCurrency} className="currencyCalcImage" alt="screenshot" />
      </div>
    </div>
  );
}

export default CurrencyCalc;
