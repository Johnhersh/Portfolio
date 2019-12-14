import React from "react";

import "./chatSystem.styles.scss";

import laptopChat from "../../../Assets/Laptop_Chat.png";

function Chat() {
  return (
    <div className="chatSystemContainer">
      <div className="chatImage">
        <img src={laptopChat} className="chatContentImage" alt="screenshot" />
      </div>
    </div>
  );
}

export default Chat;
