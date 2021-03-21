import React from "react";

import {
  reactSVG,
  sassSVG,
  typescriptSVG,
  dotnetSVG,
  reactNativeSVG,
  postgresSVG,
  reduxSVG,
  threejsSVG,
  GraphQL_SVG,
} from "./icons";

import AlgoVis from "./components/portfolioItem/individualContent/algoVis.component";
import PortfolioSite from "./components/portfolioItem/individualContent/portfolioSite.component";
import FirePointe from "./components/portfolioItem/individualContent/firePointe.component";
import Chat from "./components/portfolioItem/individualContent/chatSystem.component";
import CurrencyCalc from "./components/portfolioItem/individualContent/currencyCalc.component";
import SpaceView from "./components/portfolioItem/individualContent/spaceView.component";

type externalLink = {
  url: string;
  title: string;
};

interface portfolioItem {
  title: string;
  description: string;
  livelink?: externalLink;
  githubLink: externalLink;
  githubLinkExtra?: externalLink;
  icons: JSX.Element[];
  child: JSX.Element;
}

export const portfolioItems: portfolioItem[] = [
  {
    title: "Chat System",
    description:
      "A chat system done to study Node.js. Backend done with node and express, frontend with React. Using socket.io for the websocket chat, and GraphQL with Postgres for database.",
    livelink: { url: "https://chatapp.johnher.com", title: "Chat App" },
    githubLink: { url: "https://github.com/Johnhersh/chat_server", title: "Github backend" },
    githubLinkExtra: { url: "https://github.com/Johnhersh/chat_client", title: "Github frontend" },
    icons: [reactSVG, typescriptSVG, postgresSVG, sassSVG, GraphQL_SVG],
    child: <Chat />,
  },
  {
    title: "Solar System Visualizer",
    description:
      "A web app for viewing the solar system in 3D. Done with three.js for the purpose of studying web visualization technologies.",
    livelink: { url: "https://space-view.johnher.com", title: "Solar System Visualizer" },
    githubLink: { url: "https://github.com/Johnhersh/SpaceView", title: "Github Link" },
    icons: [reactSVG, typescriptSVG, sassSVG, threejsSVG],
    child: <SpaceView />,
  },
  {
    title: "Currency Converter",
    description:
      "A currency converter app done in React Native. Purpose of this project was to learn Redux, use multiple APIs, and React-Native animations.",
    livelink: { url: "exp://exp.host/@johnhersh/currencyconverter", title: "Expo Link" },
    githubLink: { url: "https://github.com/Johnhersh/CurrencyConverter", title: "Github Link" },
    icons: [reactNativeSVG, typescriptSVG, reduxSVG],
    child: <CurrencyCalc />,
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Made this project to learn more about algorithms and how they work. By trying to visualize common algorithms, I set out to understand them better.",
    livelink: { url: "https://algovis.johnher.com", title: "Algorithm Visualizer" },
    githubLink: { url: "https://github.com/Johnhersh/AlgoVis", title: "Github Link" },
    icons: [reactSVG, sassSVG, typescriptSVG],
    child: <AlgoVis />,
  },
  {
    title: "Portfolio Site",
    description: "This website. Done as a project to learn React and Sass.",
    githubLink: { url: "https://github.com/Johnhersh/AlgoVis", title: "Github Link" },
    icons: [reactSVG, sassSVG, typescriptSVG],
    child: <PortfolioSite />,
  },
  {
    title: "Firepointe",
    description:
      "Firepointe is an app mockup done for a local church. It congregates their posts from various social media outlets like Youtube and Facebook and shows them in a feed. There is also a donation page allowing people to give directly from the app. The app was made in React Native, with the backend done in dotnet for the user management.",
    githubLink: { url: "https://github.com/Johnhersh/FirepointE", title: "Github Link" },
    icons: [reactNativeSVG, dotnetSVG],
    child: <FirePointe />,
  },
];
