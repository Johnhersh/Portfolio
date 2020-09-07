import React from "react";

import GalleryView from "../galleryView.component";
import screenshotSpaceView from "../../../Assets/Images_Neu/SpaceView.png";
import screenshotSpaceView2 from "../../../Assets/Images_Neu/SpaceView_2.png";
import videoSpaceViewEarth from "../../../Assets/Images_Neu/SpaceView_Earth.mp4";

export default function SpaceView() {
  return (
    <GalleryView>
      <img src={screenshotSpaceView} className="screenshotContentImage" alt="screenshot" />
      <div className="screenshotContentImage">
        <video
          width="1000px"
          className="screenshotContentImage"
          autoPlay
          loop
          playsInline // For ios to autoplay
          style={{
            marginBottom: "-10px",
            marginTop: "-10px",
            width: "1000px",
            height: "auto", // Has to be auto for responsiveness to work on phone
          }}
        >
          <source src={videoSpaceViewEarth} />
        </video>
      </div>
      <img src={screenshotSpaceView2} className="screenshotContentImage" alt="screenshot" />
    </GalleryView>
  );
}
