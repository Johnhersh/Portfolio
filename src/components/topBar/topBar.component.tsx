import React from "react";

import NameTitle from "../../Assets/Name.png";

import "./topBar.styles.scss";

function TopBar(props: any) {
  return (
    <div className="topBarContainer" style={{ height: props.size }}>
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
}

export default TopBar;
