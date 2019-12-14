import React from "react";
import "./App.css";

import HomePage from "./pages/homepage.component";

const lightTheme: any = {
  "--color-bg-dark": "#b3b3b3",
  "--color-bg-light": "#e5e5e5",
  "--color-txt": "#000000",
  "--color-topbar": "#ffffff"
};
const darkTheme: any = {
  "--color-bg-dark": "#26252a",
  "--color-bg-light": "#545259",
  "--color-txt": "#ffffff",
  "--color-topbar": "#000000"
};

const applyTheme = (nextTheme: string) => {
  const theme = nextTheme === "dark" ? lightTheme : darkTheme;
  Object.keys(theme).forEach(element => {
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
      {/* <h1>{currentTheme === "light" ? "Light theme" : "Dark theme"}</h1> */}
      <HomePage changeTheme={changeTheme} />
    </div>
  );
};

export default App;
