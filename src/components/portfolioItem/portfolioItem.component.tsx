import React from "react";
import Fade from "react-reveal/Fade.js";

import "./portfolioItem.styles.scss";

function PortfolioItem(props: any) {
  return (
    <div className={"portfolioItemContainer " + props.bgcolor}>
      <Fade left>
        <div className={"descriptionContainer"}>
          <h1>Description</h1>
          <p>{props.description}</p>
          <h2>Tech used</h2>
          <div className="iconsContainer">{props.icons}</div>
          {props.liveLink != null && (
            <div>
              <h2>Link to live version</h2>
              <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
                Live Link
              </a>
            </div>
          )}
          <h2>Github Link</h2>
          <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
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
