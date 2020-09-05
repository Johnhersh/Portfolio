import React, { FunctionComponent } from "react";

import NextPrevButton from "./next-prevButton.component";

interface Props {}

const GalleryView: FunctionComponent<Props> = ({ children }) => {
  function handlePrevious() {
    console.log(`Clicked previous`);
  }
  function handleNext() {
    console.log(`Clicked next`);
  }

  return (
    <div>
      <NextPrevButton type={"nextButton"} clickFunction={handleNext} />
      <div className="screenshotImageContainer">{children}</div>
      <NextPrevButton type={"previousButton"} clickFunction={handlePrevious} />
    </div>
  );
};

export default GalleryView;
