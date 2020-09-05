import React from "react";

import GalleryView from "../galleryView.component";
import screenshotSpaceView from "../../../Assets/Images_Neu/SpaceView.png";
import screenshotSpaceView2 from "../../../Assets/Images_Neu/SpaceView_2.png";
import videoSpaceViewEarth from "../../../Assets/Images_Neu/SpaceView_Earth.mp4";

export default function SpaceView() {
  return (
    <GalleryView>
      <img src={screenshotSpaceView} className="screenshotContentImage" alt="screenshot" />
      <video width="700" height="407" autoPlay className="screenshotContentImage">
        <source src={videoSpaceViewEarth} />
      </video>
      <img src={screenshotSpaceView2} className="screenshotContentImage" alt="screenshot" />
    </GalleryView>
  );
}
