import React, { FunctionComponent } from "react";
import { Fade } from "react-awesome-reveal";

import "./portfolioItem.styles.scss";
import "./individualContent.styles.scss";

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
        <Fade damping={0.15} cascade fraction={0.1}>
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
        </Fade>
      </div>
      <div className="portfolioChildrenContainer">
        <Fade>{children}</Fade>
      </div>
    </div>
  );
};

export default PortfolioItem;
