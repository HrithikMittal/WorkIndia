import React, { Component } from "react";
import AppContext from "./AppContext";

import { Route, NavLink, HashRouter } from "react-router-dom";

import "./css/props.css";
import "./css/app.css";

import logo from "./ui/whatsapp.png";
import Messenger from "./screens/messenger";

global.fire = {
  me: {
    Id: 1,
  },
};

function AppLoader(props) {
  const splash = () => {
    return (
      <div className="splash abc abs">
        <img src={logo} className="logo" />
      </div>
    );
  };

  const loadApp = async (context) => {
    setTimeout(() => {
      context.setAppLoaded(true);
    }, 1000);
  };

  return (
    <AppContext.Consumer>
      {(context) => {
        return context.appLoaded() ? (
          <div className="App">
            <HashRouter>
              <div className="app-content">
                <Route path="/" component={Messenger}></Route>
              </div>
            </HashRouter>
          </div>
        ) : (
          <AppContext.Consumer>
            {(context) => {
              loadApp(context);
              return splash(context);
            }}
          </AppContext.Consumer>
        );
      }}
    </AppContext.Consumer>
  );
}
export default AppLoader;
