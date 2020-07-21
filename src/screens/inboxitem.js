import React, { Component } from "react";

function InboxItem(props) {
  const { Id, name, dp, lastMsg, stamp, status } = props.meta;

  return (
    <div className="item flex rel aic">
      <div className="udp">
        <img src={dp} className="bl"></img>
      </div>
      <div className="meta rel flex flex-col">
        <h2 className="s16 font c333 uname">{name} </h2>
        <h2 className="s14 fontn c777 lastMsg">{lastMsg} </h2>
        <h2 className="s12 fontn c333 abs stamp">{stamp} </h2>
      </div>
    </div>
  );
}

export default InboxItem;
