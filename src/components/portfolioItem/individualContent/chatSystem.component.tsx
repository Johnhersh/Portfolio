import React from "react";

import GalleryView from "../galleryView.component";
import ScreenshotChat from "../../../Assets/Images_Neu/Chat.png";
import ScreenshotChat2 from "../../../Assets/Images_Neu/Chat2.png";

export default function Chat() {
  return (
    <GalleryView>
      <img src={ScreenshotChat} className="screenshotContentImage" alt="screenshot" />
      <img src={ScreenshotChat2} className="screenshotContentImage" alt="screenshot" />
    </GalleryView>
  );
}
