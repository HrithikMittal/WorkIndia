import React, { useState, useEffect } from "react";
import ChatItem from "./chatitem";

function Chatbox() {
  const [chat, setChat] = useState([
    {
      Id: 1,
      user: {
        Id: 123,
        name: "Kaushal",
      },
      meta: {
        type: "text",
        text: "Hi I am Adhikansh",
      },
      stamp: "1:21 PM",
      status: "sent",
    },
    {
      Id: 2,
      user: {
        Id: 123,
        name: "Kaushal",
      },
      meta: {
        type: "text",
        text: "Adhikansh Mittal",
      },
      stamp: "1:21 PM",
      status: "sent",
    },
    {
      Id: 3,
      user: {
        Id: 123,
        name: "Kaushal",
      },
      meta: {
        type: "text",
        text: "my reg no:",
      },
      stamp: "1:21 PM",
      status: "sent",
    },
    {
      Id: 4,
      user: {
        Id: global.fire.me.Id,
        name: "Adhikansh Mittal",
      },
      meta: {
        type: "text",
        text: "17BCE2026",
      },
      stamp: "1:21 PM",
      status: "sent",
    },
  ]);

  let chatList = [];
  for (let i = 0; i < chat.length; i++) {
    chatList.push(<ChatItem meta={chat[i]} />);
  }

  return (
    <div className="chatbox rel">
      <div className="head rel flex flex-row aic">
        <div className="meta flex aic">
          <button className="udp">
            <img src="http://placeimg.com/100/100/people?id=admin"></img>
          </button>
          <div className="usr flex flex-col">
            <h2 className="s15 fontb name c333">Adhikansh Mittal</h2>
            <h2 className="s12 fontn lo c777">Last Online 3 Mins ago</h2>
          </div>
        </div>
        <div className="actions">
          <button className="btn s24 icon-attachment"></button>
          <button className="btn icon-more_vert"></button>
        </div>
      </div>
      <div className="chat abs">{chatList}</div>

      <div className="sendbox abs flex flex-row aic">
        <button className="btn s24 c777 icon-insert_emoticon" />
        <input
          type="text"
          placeholder="Type your message..."
          className="footn send-txt s15"
        />
        <button className="btn s20 icon-mic c777" />
      </div>

      {/* <div className="abc abs">Select Conversation</div> */}
    </div>
  );
}

export default Chatbox;
