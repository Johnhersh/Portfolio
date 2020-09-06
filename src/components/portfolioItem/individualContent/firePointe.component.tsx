import React from "react";
import Vimeo from "@u-wave/react-vimeo";

import ScreenshotFirepointe from "../../../Assets/Images_Neu/Firepointe_Phone.png";

function FirePointe() {
  return (
    <div className="screenshotsContainer">
      <div style={{ flex: 0.5 }} />
      <div className="screenshotWrapper vertical">
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
      </div>
      <div className="screenshotWrapper vertical">
        <img src={ScreenshotFirepointe} className="screenshotContentImage" alt="screenshot" />
      </div>
      <div style={{ flex: 0.5 }} />
    </div>
  );
}

export default FirePointe;
