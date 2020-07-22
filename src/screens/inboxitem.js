import React, { Component } from "react";

function getSameCount(str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] == str2[0]) {
      let j = 0;
      while (str1[i] == str2[j]) {
        i++;
        j++;
        count++;
      }
      return count;
    }
  }
  return 0;
}

function InboxItem(props) {
  const { Id, name, dp, lastMsg, stamp, status } = props.meta;
  const searchParam = props.query;
  if (searchParam != undefined) {
    var ind = name.indexOf(searchParam);

    let lenInd = getSameCount(name.toLowerCase(), searchParam.toLowerCase());
    return (
      <div
        className="item flex rel aic"
        onClick={() => props.namePropHandler(name)}
      >
        <div className="udp">
          <img src={dp} className="bl"></img>
        </div>
        <div className="meta rel flex flex-col">
          <h2 className="s16 font c333 uname">
            <span>{name.substr(0, ind)}</span>
            <span style={{ color: "lightblue" }}>
              {name.substr(ind, ind + lenInd)}
            </span>
            <span>{name.substr(ind + lenInd)}</span>
          </h2>
          <h2 className="s14 fontn c777 lastMsg">{lastMsg} </h2>
          <h2 className="s12 fontn c333 abs stamp">{stamp} </h2>
        </div>
      </div>
    );
  }
  return (
    <div
      className="item flex rel aic"
      onClick={() => props.namePropHandler(name)}
    >
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
