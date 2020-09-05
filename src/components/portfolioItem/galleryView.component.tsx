import React, { FunctionComponent, useState } from "react";

import "./galleryView.styles.scss";
import NextPrevButton from "./next-prevButton.component";

interface Props {}

const GalleryView: FunctionComponent<Props> = ({ children }) => {
  const [activeItem, setActiveItem] = useState(0);

  function handlePrevious() {
    if (activeItem > 0) {
      setActiveItem(activeItem - 1);
      console.log(`Clicked previous`);
    }
  }
  function handleNext() {
    if (activeItem < React.Children.count(children) - 1) {
      setActiveItem(activeItem + 1);
      console.log(`Clicked next`);
    }
  }

  return (
    <div className={"galleryContainer"}>
      <div className={"galleryView"}>
        <NextPrevButton type={"previousButton"} clickFunction={handlePrevious} />
        <div className="galleryImagesContainer">
          {React.Children.map(children || null, (child, i) => {
            const id = activeItem === i ? "visible" : "hidden"; // Set appropriate ID to whichever item is active

            return (
              <div id={id} className={"galleryChild"}>
                {child}
              </div>
            );
          })}
        </div>
        <NextPrevButton type={"nextButton"} clickFunction={handleNext} />
      </div>
      <div className="dotsContainer">
        {React.Children.map(children || null, (_child, i) => {
          const id = activeItem === i ? "active" : "inactive"; // Set appropriate ID to whichever item is active

          return <div id={id} className={"activityDot"} />;
        })}
      </div>
    </div>
  );
};

export default GalleryView;
