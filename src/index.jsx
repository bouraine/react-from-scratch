import * as ReactDOM from "react-dom";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Hello from "to/hello";
import Session from "src/session";

const Index = () => {
  return (
    <div style={{ width: "100px" }}>
      <Session />
      <Hello />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("app"));
