import React, { Component, Fragment } from "react";
import "./App.css";

class ReturnTypes extends Component {
  render() {
    return "hello";
  }
}

function App() {
  return (
    <Fragment>
      <ReturnTypes />
    </Fragment>
  );
}

export default App;
