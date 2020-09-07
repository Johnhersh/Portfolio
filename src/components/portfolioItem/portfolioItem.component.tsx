import React, { FunctionComponent } from "react";
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/core";
import Reveal from "react-awesome-reveal";

import "./portfolioItem.styles.scss";
import "./individualContent.styles.scss";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-20px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

interface Props {
  title: string;
  description: string;
  icons: Array<JSX.Element>;
  liveLink?: { link: string; title: string };
  githubLink: string;
}

const PortfolioItem: FunctionComponent<Props> = ({
  title,
  description,
  icons,
  liveLink,
  githubLink,
  children,
}) => {
  return (
    <div className={"portfolioItemContainer"}>
      <div className="descriptionContainer">
        <Reveal keyframes={customAnimation} cascade damping={0.2} duration={1500}>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>

          <div>
            <h2>Tech used</h2>
            <div className="iconsContainer">{icons}</div>
            {liveLink != null && (
              <div>
                <h2>Link to live version</h2>
                <a href={liveLink.link} target="_blank" rel="noopener noreferrer">
                  {liveLink.title}
                </a>
              </div>
            )}
          </div>
          <div>
            <h2>Github Link</h2>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              Github Link
            </a>
          </div>
        </Reveal>
      </div>
      <div className="portfolioChildrenContainer">
        <Fade className="portfolioChildrenContainer">{children}</Fade>
      </div>
    </div>
  );
};

export default PortfolioItem;
