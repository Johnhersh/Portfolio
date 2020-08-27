import React from "react";

import "./spaceView.styles.scss";

import laptopSpaceView from "../../../Assets/Laptop_SpaceView.png";

export default function SpaceView() {
  return (
    <div className="spaceviewSiteContainer">
      <div className="spaceviewImage">
        <img src={laptopSpaceView} className="spaceviewContentImage" alt="screenshot" />
      </div>
    </div>
  );
}
