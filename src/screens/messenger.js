import React, { useState, useEffect } from "react";

import Sidebar from "./sidebar";
import Chatbox from "./chatbox";

function Messenger() {
  const [nameProp, setNameProp] = useState("");
  function namePropHandler(name) {
    setNameProp(name);
  }

  return (
    <div className="messenger absFill">
      <div className="ribbon abs"></div>
      <div className="wrapper absFill abs flex">
        <Sidebar namePropHandlerMaster={namePropHandler} />
        <Chatbox name={nameProp} />
      </div>
    </div>
  );
}

export default Messenger;
