import React from "react";

import "./portfolioItem.styles.scss";

function PortfolioItem(props: any) {
  return (
    <div
      style={{ backgroundColor: props.bgcolor }}
      className="portfolioItemContainer"
    >
      <div className="descriptionContainer">
        <p>portfolio item #1</p>
        <p>portfolio item #1</p>
      </div>
      <div className="portfolioSpacer" />
      <div className="imageContainer">
        <img src={props.image} className="contentImage" alt="screenshot" />
      </div>
    </div>
  );
}

export default PortfolioItem;
