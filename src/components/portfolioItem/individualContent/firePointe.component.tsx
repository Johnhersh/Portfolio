import React from "react";
import Vimeo from "@u-wave/react-vimeo";

import "./firePointe.styles.scss";

import screenshotFirepointe from "../../../Assets/Phone_Firepointe.png";

function FirePointe() {
  return (
    <div className="firepointeContainer">
      <Vimeo
        video="375836140"
        className="firepointeVideo"
        start={3}
        responsive
        showPortrait={false}
        showTitle={false}
        showByline={false}
        controls={false}
        loop={true}
      />
      <div className="firepointeImage">
        <img
          src={screenshotFirepointe}
          className="firepointeImage"
          alt="screenshot"
        />
      </div>
    </div>
  );
}

export default FirePointe;
