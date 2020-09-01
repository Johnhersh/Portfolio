import React from "react";
import Vimeo from "@u-wave/react-vimeo";

import ScreenshotFirepointe from "../../../Assets/Images_Neu/Firepointe_Phone.png";

function FirePointe() {
  return (
    <div className="screenshotImageContainer">
      <Vimeo
        video="375836140"
        className="vimeoVideo"
        start={3}
        responsive
        showPortrait={false}
        showTitle={false}
        showByline={false}
        controls={false}
        loop={true}
        background={true}
        autoplay={true}
      />
      <img src={ScreenshotFirepointe} className="screenshotContentImage" alt="screenshot" />
    </div>
  );
}

export default FirePointe;
