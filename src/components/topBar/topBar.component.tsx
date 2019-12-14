import React from "react";
import { createBrowserHistory } from "history";
import Switch from "react-switch";

import "./topBar.styles.scss";

function TopBar(props: any) {
  const [bIsChecked, setChecked] = React.useState(false);
  const history = createBrowserHistory();
  const location = history.location;

  return (
    <div className="topBarContainer" style={{ height: props.size }}>
      <div className="nameContainer">
        <h1>JOHN HERSHBERG</h1>
        <h2>Front End Web Developer</h2>
      </div>
      <div className="topbarLinks">
        <ul>
          <li>
            <a href="/">Github</a>
          </li>
          <li>
            <a href="/">Email</a>
          </li>
          <li>
            <a
              href={
                process.env.PUBLIC_URL + "/Hershberg_John_resume_webdev.pdf"
              }
              download
              target="_blank"
            >
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
          offColor="#000000"
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </div>
    </div>
  );
}

export default TopBar;
