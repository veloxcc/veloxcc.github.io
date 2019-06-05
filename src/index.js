import React from "react";
import ReactDOM from "react-dom";

import 'milligram';

const App = () => (
  <div className="container">
    <header>
      <div className="row">
        <div className="column"><a href="/">velox.cc</a> / road cycling and technology</div>
      </div>
    </header>
  </div>
);

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
