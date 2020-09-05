import React from "react";

import GalleryView from "../galleryView.component";
import screenshotSpaceView from "../../../Assets/Images_Neu/SpaceView.png";
import screenshotSpaceView2 from "../../../Assets/Images_Neu/SpaceView_2.png";

export default function SpaceView() {
  return (
    <GalleryView>
      <img src={screenshotSpaceView} className="screenshotContentImage" alt="screenshot" />
      <img src={screenshotSpaceView2} className="screenshotContentImage" alt="screenshot" />
    </GalleryView>
  );
}
