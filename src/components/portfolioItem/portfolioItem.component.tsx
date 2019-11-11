import React from "react";

import logo from "../../Assets/Laptop.png";
import backdrop from "../../Assets/Background_A.png";

import "./portfolioItem.styles.scss";

function PortfolioItem(props: any) {
  return (
    <div
      style={{ backgroundColor: props.bgcolor }}
      className="portfolioItemContainer"
    >
      <p>portfolio item #1</p>
      <p>portfolio item #1</p>
      <div className="LaptopContainer">
        <img src={logo} className="LaptopImage" alt="laptop" />
        <img src={backdrop} className="backdrop" alt="laptop" />
      </div>
    </div>
  );
}

export default PortfolioItem;
