import React from "react";
import "./App.css";

import HomePage from "./pages/homepage.component";

const lightTheme: any = {
  "--color-bg-dark": "#e9eaef",
  "--color-bg-light": "#fbfcff",
  "--color-txt": "#3f4253",
  "--color-topbar": "#ffffff",
  "--color-link": "#0d66be",
  "--color-link-visited": "#b613ae",
  "--color-neu-shadow-dark": "#d7d7df",
  "--color-neu-shadow-light": "#ffffff",
};
const darkTheme: any = {
  "--color-bg-dark": "#26252a",
  "--color-bg-light": "#545259",
  "--color-txt": "#ffffff",
  "--color-topbar": "#000000",
  "--color-link": "#4ab9f0",
  "--color-link-visited": "#f04fe8",
};

const applyTheme = (nextTheme: string) => {
  const theme = nextTheme === "dark" ? lightTheme : darkTheme;
  Object.keys(theme).forEach((element) => {
    const value = theme[element];
    document.documentElement.style.setProperty(element, value);
  });
};

const App: React.FC = () => {
  const [currentTheme, setTheme] = React.useState("dark");
  const changeTheme = () => {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <div className="App">
      <HomePage changeTheme={changeTheme} />
    </div>
  );
};

export default App;
