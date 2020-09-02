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
  reduxSVG,
  threejsSVG,
} from "./icons";

import AlgoVis from "../components/portfolioItem/individualContent/algoVis.component";
import PortfolioSite from "../components/portfolioItem/individualContent/portfolioSite.component";
import FirePointe from "../components/portfolioItem/individualContent/firePointe.component";
import Chat from "../components/portfolioItem/individualContent/chatSystem.component";
import CurrencyCalc from "../components/portfolioItem/individualContent/currencyCalc.component";
import SpaceView from "../components/portfolioItem/individualContent/spaceView.component";

function HomePage(props: any) {
  const topBarSize = "125px";

  return (
    <div className="homepageContainer">
      <div className="backgroundGradientContainer" />
      <TopBar size={topBarSize} changeTheme={props.changeTheme} />
      <main style={{ marginTop: topBarSize, flex: 1 }}>
        <PortfolioItem
          title={"Solar System Visualizer"}
          description={
            "A web app for viewing the solar system in 3D. Done with three.js for the purpose of studying web visualization technologies."
          }
          githubLink={"https://github.com/Johnhersh/SpaceView"}
          liveLink={{ link: "https://spaceview.johnher.com", title: "Solar System Visualizer" }}
          icons={[reactSVG, sassSVG, typescriptSVG, threejsSVG]}
        >
          <SpaceView />
        </PortfolioItem>

        <PortfolioItem
          title={"Currency Converter"}
          description={
            "A currency converter app done in React Native. Purpose of this project was to learn Redux, use multiple APIs, and React-Native animations."
          }
          githubLink={"https://github.com/Johnhersh/CurrencyConverter"}
          liveLink={{ link: "exp://exp.host/@johnhersh/currencyconverter", title: "Expo Link" }}
          icons={[reactNativeSVG, typescriptSVG, reduxSVG]}
        >
          <CurrencyCalc />
        </PortfolioItem>

        <PortfolioItem
          title={"Algorithm Visualizer"}
          description={
            "Made this project to learn more about algorithms and how they work. By trying to visualize common algorithms, I set out to understand them better."
          }
          githubLink={"https://github.com/Johnhersh/AlgoVis"}
          liveLink={{ link: "https://algovis.johnher.com", title: "Algorithm Visualizer" }}
          icons={[reactSVG, sassSVG, typescriptSVG]}
        >
          <AlgoVis />
        </PortfolioItem>

        <PortfolioItem
          title={"Portfolio Site"}
          description={"This website. Done as a project to learn React and Sass."}
          githubLink={"https://github.com/Johnhersh/Portfolio"}
          icons={[reactSVG, sassSVG, typescriptSVG]}
        >
          <PortfolioSite />
        </PortfolioItem>

        <PortfolioItem
          title={"Firepointe"}
          description={
            "Firepointe is an app mockup done for a local church. It congregates their posts from various social media outlets like Youtube and Facebook and shows them in a feed. There is also a donation page allowing people to give directly from the app. The app was made in React Native, with the backend done in dotnet for the user management."
          }
          githubLink={"https://github.com/Johnhersh/FirepointE"}
          icons={[reactNativeSVG, dotnetSVG]}
        >
          <FirePointe />
        </PortfolioItem>

        <PortfolioItem
          title={"Chat System"}
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
