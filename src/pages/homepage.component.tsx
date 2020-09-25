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
  const topBarSize = "110px";

  return (
    <div className="homepageContainer">
      <div className="backgroundGradientContainer" />
      <TopBar size={topBarSize} changeTheme={props.changeTheme} />
      <main id="portfolioItemsContainer" style={{ marginTop: topBarSize }}>
        <PortfolioItem
          title={"Solar System Visualizer"}
          description={
            "A web app for viewing the solar system in 3D. Done with three.js for the purpose of studying web visualization technologies."
          }
          githubLink={{ url: "https://github.com/Johnhersh/SpaceView", title: "Github Link" }}
          liveLink={{ link: "https://spaceview.johnher.com", title: "Solar System Visualizer" }}
          icons={[reactSVG, sassSVG, typescriptSVG, threejsSVG]}
        >
          <SpaceView />
        </PortfolioItem>

        <PortfolioItem
          title={"Chat System"}
          description={
            "A chat system done to study Node.js. Backend done with node and express, frontend with React. Using socket.io for the websocket chat, and Postgres for database."
          }
          liveLink={{ link: "https://chatapp.johnher.com", title: "Chat App" }}
          githubLink={{ url: "https://github.com/Johnhersh/chat_server", title: "Github backend" }}
          githubLinkExtra={{
            url: "https://github.com/Johnhersh/chat_client",
            title: "Github frontend",
          }}
          icons={[reactSVG, postgresSVG, bootStrapSVG, sassSVG]}
        >
          <Chat />
        </PortfolioItem>

        <PortfolioItem
          title={"Currency Converter"}
          description={
            "A currency converter app done in React Native. Purpose of this project was to learn Redux, use multiple APIs, and React-Native animations."
          }
          githubLink={{
            url: "https://github.com/Johnhersh/CurrencyConverter",
            title: "Github Link",
          }}
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
          githubLink={{ url: "https://github.com/Johnhersh/AlgoVis", title: "Github Link" }}
          liveLink={{ link: "https://algovis.johnher.com", title: "Algorithm Visualizer" }}
          icons={[reactSVG, sassSVG, typescriptSVG]}
        >
          <AlgoVis />
        </PortfolioItem>

        <PortfolioItem
          title={"Portfolio Site"}
          description={"This website. Done as a project to learn React and Sass."}
          githubLink={{ url: "https://github.com/Johnhersh/Portfolio", title: "Github Link" }}
          icons={[reactSVG, sassSVG, typescriptSVG]}
        >
          <PortfolioSite />
        </PortfolioItem>

        <PortfolioItem
          title={"Firepointe"}
          description={
            "Firepointe is an app mockup done for a local church. It congregates their posts from various social media outlets like Youtube and Facebook and shows them in a feed. There is also a donation page allowing people to give directly from the app. The app was made in React Native, with the backend done in dotnet for the user management."
          }
          githubLink={{ url: "https://github.com/Johnhersh/FirepointE", title: "Github Link" }}
          icons={[reactNativeSVG, dotnetSVG]}
        >
          <FirePointe />
        </PortfolioItem>
      </main>
    </div>
  );
}

export default HomePage;
