import React from "react";
import PortfolioItem from "../components/portfolioItem/portfolioItem.component";
import TopBar from "../components/topBar/topBar.component";

import "./homepage.styles.scss";

import PortfolioSite from "../components/portfolioItem/individualContent/portfolioSite.component";
import FirePointe from "../components/portfolioItem/individualContent/firePointe.component";

import rnLogo from "../Assets/Logos/reactnative.png";
import reactjsLogo from "../Assets/Logos/reactjs.png";
import sassLogo from "../Assets/Logos/sass.png";
import typescriptLogo from "../Assets/Logos/typescript.png";
import dotnetLogo from "../Assets/Logos/dotnet.png";

function HomePage() {
  const topBarSize = "125px";

  const light = "#e5e5e5";
  const dark = "#cccccc";

  return (
    <div className="homepageContainer">
      <TopBar size={topBarSize} />
      <main
        style={{ marginTop: topBarSize, flex: 1, backgroundColor: "black" }}
      >
        <PortfolioItem
          bgcolor={light}
          description={
            "This website. Done as a project to learn React and Sass."
          }
          githubLink={"https://github.com/Johnhersh/Portfolio"}
          icons={[reactjsLogo, sassLogo, typescriptLogo]}
        >
          <PortfolioSite />
        </PortfolioItem>

        <PortfolioItem
          bgcolor={dark}
          description={
            "Firepointe is an app mockup done for a local church. It congregates their posts from various social media outlets like Youtube and Facebook and shows them in a feed. There is also a donation page allowing people to give directly from the app. The app was made in React Native, with the backend done in dotnet for the user management."
          }
          githubLink={"https://github.com/Johnhersh/FirepointE"}
          icons={[rnLogo, dotnetLogo]}
        >
          <FirePointe />
        </PortfolioItem>

        <PortfolioItem bgcolor={light} image={""} icons={[]} />

        <PortfolioItem bgcolor={dark} image={""} icons={[]} />
      </main>
    </div>
  );
}

export default HomePage;
