import React, { Component } from "react";

function ChatItem(props) {
  const { Id, user, meta, stamp, status } = props.meta;
  const isMe = user.Id == global.fire.me.Id;
  return (
    <div className={"item flex rel aic" + (isMe ? " me" : "")}>
      <div className="bubble rel">
        <p className="meta s15 fontn">{meta.text}</p>
        <p className="s12 fontn c777 stamp abs flex">
          {stamp}
          {isMe && <div className="tick icon-done_all s18"></div>}
        </p>
      </div>
    </div>
  );
}

export default ChatItem;
