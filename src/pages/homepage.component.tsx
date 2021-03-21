import React from "react";
import PortfolioItem from "../components/portfolioItem/portfolioItem.component";
import TopBar from "../components/topBar/topBar.component";

import "./homepage.styles.scss";

import { portfolioItems } from "../portfolioItems";

function HomePage(props: any) {
  const topBarSize = "110px";

  return (
    <div className="homepageContainer">
      <div className="backgroundGradientContainer" />
      <TopBar size={topBarSize} changeTheme={props.changeTheme} />
      <main id="portfolioItemsContainer" style={{ marginTop: topBarSize }}>
        {portfolioItems.map((item, i) => (
          <PortfolioItem
            title={item.title}
            description={item.description}
            liveLink={item.livelink}
            githubLink={item.githubLink}
            githubLinkExtra={item.githubLinkExtra}
            icons={item.icons}>
            {item.child}
          </PortfolioItem>
        ))}
      </main>
    </div>
  );
}

export default HomePage;
