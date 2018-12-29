import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./calcTemp";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
