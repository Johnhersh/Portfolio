import React from "react";
import PortfolioItem from "../components/portfolioItem/portfolioItem.component";
import TopBar from "../components/topBar/topBar.component";

import "./homepage.styles.scss";

function HomePage() {
  const light = "#e5e5e5";
  const dark = "#cccccc";

  return (
    <div className="homepageContainer">
      <TopBar />
      <main style={{ marginTop: "100px" }}>
        <PortfolioItem bgcolor={light} />
        <PortfolioItem bgcolor={dark} />
        <PortfolioItem bgcolor={light} />
        <PortfolioItem bgcolor={dark} />
        <PortfolioItem bgcolor={light} />
        <PortfolioItem bgcolor={dark} />
        <PortfolioItem bgcolor={light} />
        <PortfolioItem bgcolor={dark} />
        <PortfolioItem bgcolor={light} />
      </main>
    </div>
  );
}

export default HomePage;
