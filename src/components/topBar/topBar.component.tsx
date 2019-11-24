import React from "react";

import NameTitle from "../../Assets/Name.jpg";

import "./topBar.styles.scss";

const TopBar = () => (
  <div className="topBarContainer">
    <div className="nameContainer">
      <img src={NameTitle} className="NameImage" alt="nameTitle" />
    </div>
    <div className="topSpacer" />
    <div className="topbarLinks">
      <ul>
        <li>
          <a href="/">Github</a>
        </li>
        <li>
          <a href="/">Email</a>
        </li>
        <li>
          <a href="/">Resume</a>
        </li>
      </ul>
    </div>
  </div>
);

export default TopBar;
