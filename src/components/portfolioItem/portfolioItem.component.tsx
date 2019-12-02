import React from "react";
import Fade from "react-reveal/Fade.js";

import "./portfolioItem.styles.scss";

function PortfolioItem(props: any) {
  return (
    <div
      style={{ backgroundColor: props.bgcolor }}
      className="portfolioItemContainer"
    >
      <Fade left>
        <div className="descriptionContainer">
          <h1>Description</h1>
          <p>{props.description}</p>
          <h2>Tech used</h2>
          <div className="iconsContainer">
            {props.icons.map((item: any, index: any) => (
              <img key={index} src={item} />
            ))}
          </div>
          <h2>Github Link</h2>
          <a href={props.githubLink} target="_blank">
            Github Link
          </a>
        </div>
      </Fade>
      <Fade>
        <div className="portfolioChildrenContainer">{props.children}</div>
      </Fade>
    </div>
  );
}

export default PortfolioItem;
