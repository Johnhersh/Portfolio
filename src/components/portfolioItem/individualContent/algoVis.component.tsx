import React from "react";

import "./algoVis.styles.scss";

import laptopAlgoVis from "../../../Assets/Laptop_Algovis.png";

export default function AlgoVis() {
  return (
    <div className="algovisSiteContainer">
      <div className="algovisImage">
        <img src={laptopAlgoVis} className="algovisContentImage" alt="screenshot" />
      </div>
    </div>
  );
}
