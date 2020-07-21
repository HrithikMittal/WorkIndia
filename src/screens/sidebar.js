import React, { useState, useEffect } from "react";
import InboxItem from "./inboxitem";
import data from "../raw/data.json";

function Sidebar() {
  const [list, setList] = useState(data);

  let inboxList = [];
  for (let i = 0; i < list.length; i++) {
    inboxList.push(<InboxItem meta={list[i]} />);
  }

  return (
    <div className="sidebar rel" style={{ overflow: "scroll" }}>
      <div className="head rel flex flex-row aic">
        <button className="udp">
          <img src="http://placeimg.com/100/100/people?id=admin"></img>
        </button>
        <div className="actions">
          <button className="btn s24 icon-chat"></button>
          <button className="btn icon-more_vert"></button>
        </div>
      </div>

      <div className="search rel flex flex-row aic">
        <div className="search-box flex">
          <button className="btn s20 icon-search c777"></button>
          <input
            type="text"
            placeholder="Search or Start new Chat"
            className="fontn query s15"
          ></input>
        </div>
      </div>

      <div className="inbox rel flex flex-col">{inboxList}</div>
    </div>
  );
}

export default Sidebar;
