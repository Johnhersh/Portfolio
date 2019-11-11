import React from "react";

import "./portfolioItem.styles.scss";

function PortfolioItem(props: any) {
  return (
    <div
      style={{ backgroundColor: props.bgcolor }}
      className="portfolioItemContainer"
    >
      <p>portfolio item #1</p>
      <p>portfolio item #1</p>
    </div>
  );
}

export default PortfolioItem;
