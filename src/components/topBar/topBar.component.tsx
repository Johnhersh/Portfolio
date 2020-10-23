import React from "react";
import Switch from "react-switch";

import "./topBar.styles.scss";

function TopBar(props: any) {
  const [bIsChecked, setChecked] = React.useState(false);

  return (
    <div className="topBarContainer" style={{ height: props.size }}>
      <div className="topBarContent">
        <div className="nameContainer">
          <h1>JOHN HERSHBERG</h1>
          <h2>Front End Web Developer</h2>
        </div>
        <div className="topbarLinks">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/john-hershberg/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:johnher@gmail.com">Email</a>
            </li>
            <li>
              <a
                href={process.env.PUBLIC_URL + "/Hershberg_John_resume.pdf"}
                download
                target="_blank"
                rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
          <Switch
            onChange={(checked, event, id) => {
              setChecked(checked);
              props.changeTheme();
            }}
            checked={bIsChecked}
            onColor="#545259"
            offColor="#34393f"
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
