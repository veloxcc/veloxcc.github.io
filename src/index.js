import React from "react";
import ReactDOM from "react-dom";

import 'milligram';

const App = () => (
  <div className="container">
    <header>
      <div className="row">
        <div className="column"><a href="/">velox.cc</a> / road cycling and technology</div>
      </div>
      <main>
        <h2 style={{ marginTop: '4rem' }}>Projects</h2>

        <ul>
          <li><a href="/news">Cycling News</a> - todays most popular cycling news, reviews and more.</li>
          <li><a href="/awesome-road-bike">Awesome Road Bike!</a> - a curated list of road bike related stuff!</li>
          <li><a href="/gear-ratios">Gear Ratios!</a> - a bike calculator that displays gear ratios and speed.</li>
        </ul>

        <p>If you have any feedback or questions please <a href="mailto:hello@velox.cc">contact us</a>.</p>
      </main>
    </header>
  </div>
);

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
