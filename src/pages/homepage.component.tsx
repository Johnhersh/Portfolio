import React from "react";
import PortfolioItem from "../components/portfolioItem/portfolioItem.component";
import TopBar from "../components/topBar/topBar.component";

import "./homepage.styles.scss";
import screenshotFirepointe from "../Assets/Phone_Firepointe.png";

function HomePage() {
  const topBarSize = "150px";

  const light = "#e5e5e5";
  const dark = "#cccccc";

  return (
    <div className="homepageContainer">
      <TopBar size={topBarSize} />
      <main style={{ marginTop: topBarSize }}>
        <PortfolioItem bgcolor={light} image={screenshotFirepointe} />
        <PortfolioItem bgcolor={dark} image={screenshotFirepointe} />
        <PortfolioItem bgcolor={light} image={screenshotFirepointe} />
        <PortfolioItem bgcolor={dark} image={screenshotFirepointe} />
        <PortfolioItem bgcolor={light} image={screenshotFirepointe} />
        <PortfolioItem bgcolor={dark} image={screenshotFirepointe} />
        <PortfolioItem bgcolor={light} image={screenshotFirepointe} />
        <PortfolioItem bgcolor={dark} image={screenshotFirepointe} />
        <PortfolioItem bgcolor={light} image={screenshotFirepointe} />
      </main>
    </div>
  );
}

export default HomePage;
