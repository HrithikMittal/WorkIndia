import React, { useState, useEffect } from "react";

import Sidebar from "./sidebar";
import Chatbox from "./chatbox";

function Messenger() {
  return (
    <div className="messenger absFill">
      <div className="ribbon abs"></div>
      <div className="wrapper absFill abs flex">
        <Sidebar />
        <Chatbox />
      </div>
    </div>
  );
}

export default Messenger;
