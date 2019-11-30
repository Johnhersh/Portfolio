import React from "react";
import PortfolioItem from "../components/portfolioItem/portfolioItem.component";
import TopBar from "../components/topBar/topBar.component";

import "./homepage.styles.scss";

import PortfolioSite from "../components/portfolioItem/individualContent/portfolioSite.component";

import laptopPortfolio from "../Assets/Laptop_Portfolio.png";

import rnLogo from "../Assets/Logos/reactnative.png";
import dotnetLogo from "../Assets/Logos/dotnet.png";

function HomePage() {
  const topBarSize = "150px";

  const light = "#e5e5e5";
  const dark = "#cccccc";

  return (
    <div className="homepageContainer">
      <TopBar size={topBarSize} />
      <main style={{ marginTop: topBarSize }}>
        <PortfolioItem
          bgcolor={light}
          description={
            "Firepointe is an app mockup done for a local church. It congregates their posts from various social media outlets like Youtube and Facebook and shows them in a feed. There is also a donation page allowing people to give directly from the app. The app was made in React Native, with the backend done in dotnet for the user management."
          }
          githubLink={"https://github.com/Johnhersh/FirepointE"}
          icons={[rnLogo, dotnetLogo]}
        >
          <PortfolioSite />
        </PortfolioItem>
        <PortfolioItem bgcolor={dark} image={laptopPortfolio} icons={[]} />
        <PortfolioItem bgcolor={light} image={""} icons={[]} />
        <PortfolioItem bgcolor={dark} image={""} icons={[]} />
      </main>
    </div>
  );
}

export default HomePage;
