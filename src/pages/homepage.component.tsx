import React from "react";
import PortfolioItem from "../components/portfolioItem/portfolioItem.component";
import TopBar from "../components/topBar/topBar.component";

import "./homepage.styles.scss";
import {
  reactSVG,
  sassSVG,
  typescriptSVG,
  dotnetSVG,
  reactNativeSVG,
  bootStrapSVG,
  postgresSVG,
} from "./icons";

import AlgoVis from "../components/portfolioItem/individualContent/algoVis.component";
import PortfolioSite from "../components/portfolioItem/individualContent/portfolioSite.component";
import FirePointe from "../components/portfolioItem/individualContent/firePointe.component";
import Chat from "../components/portfolioItem/individualContent/chatSystem.component";

function HomePage(props: any) {
  const topBarSize = "125px";

  return (
    <div className="homepageContainer">
      <TopBar size={topBarSize} changeTheme={props.changeTheme} />
      <main style={{ marginTop: topBarSize, flex: 1, backgroundColor: "black" }}>
        <PortfolioItem
          bgcolor={"itemDark"}
          description={
            "Made this project to learn more about algorithms and how they work. By trying to visualize common algorithms, I set out to understand them better."
          }
          githubLink={"https://github.com/Johnhersh/AlgoVis"}
          icons={[reactSVG, sassSVG, typescriptSVG]}
        >
          <AlgoVis />
        </PortfolioItem>

        <PortfolioItem
          bgcolor={"itemLight"}
          description={"This website. Done as a project to learn React and Sass."}
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

        <PortfolioItem
          bgcolor={"itemLight"}
          description={
            "A chat system done to study dotnet core. Backend done with dotnet, frontend with bootstrap. Using SignalR for the websocket chat, and Postgres for database. There is a companion phone app done with React Native that uses the same API."
          }
          githubLink={"https://github.com/Johnhersh/ChatApp"}
          icons={[reactNativeSVG, dotnetSVG, postgresSVG, bootStrapSVG]}
        >
          <Chat />
        </PortfolioItem>
      </main>
    </div>
  );
}

export default HomePage;
