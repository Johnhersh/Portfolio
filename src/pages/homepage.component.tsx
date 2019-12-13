import React from "react";
import PortfolioItem from "../components/portfolioItem/portfolioItem.component";
import TopBar from "../components/topBar/topBar.component";

import "./homepage.styles.scss";
import {
  reactSVG,
  sassSVG,
  typescriptSVG,
  dotnetSVG,
  reactNativeSVG
} from "./icons";

import PortfolioSite from "../components/portfolioItem/individualContent/portfolioSite.component";
import FirePointe from "../components/portfolioItem/individualContent/firePointe.component";

function HomePage(props: any) {
  const topBarSize = "125px";

  return (
    <div className="homepageContainer">
      <TopBar size={topBarSize} changeTheme={props.changeTheme} />
      <main
        style={{ marginTop: topBarSize, flex: 1, backgroundColor: "black" }}
      >
        <PortfolioItem
          bgcolor={"itemLight"}
          description={
            "This website. Done as a project to learn React and Sass."
          }
          githubLink={"https://github.com/Johnhersh/Portfolio"}
          icons={[reactSVG, sassSVG, typescriptSVG]}
        >
          <PortfolioSite />
        </PortfolioItem>

        <PortfolioItem
          bgcolor={"itemDark"}
          description={
            "Firepointe is an app mockup done for a local church. It congregates their posts from various social media outlets like Youtube and Facebook and shows them in a feed. There is also a donation page allowing people to give directly from the app. The app was made in React Native, with the backend done in dotnet for the user management."
          }
          githubLink={"https://github.com/Johnhersh/FirepointE"}
          icons={[reactNativeSVG, dotnetSVG]}
        >
          <FirePointe />
        </PortfolioItem>
        <PortfolioItem bgcolor={"itemLight"} image={""} icons={[]} />
        <PortfolioItem bgcolor={"itemDark"} image={""} icons={[]} />
      </main>
    </div>
  );
}

export default HomePage;
