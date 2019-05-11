import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

class ReturnTypes extends Component {
  render() {
    return "hello";
  }
}

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
  }
}

const Message = () => "Just touched it!";

function App() {
  return (
    <Fragment>
      <ReturnTypes />
      <Portals />
    </Fragment>
  );
}

export default App;
