import React from "react";
import FinancialInfoContainer from "./containers/financial-info";
import StatusInfoContainer from "./containers/status-info";

import "./App.css";

function App() {
  const car = {
    name: "Ford Escape Automatic 2004",
    img: "https://i.ebayimg.com/00/s/OTYwWDEyODA=/z/s-QAAOSwjrtcuJqU/$_59.JPG",
    status: {
      phisycalStatus: "At buyer",
      legalStatus: "Buyer",
      sellerStatus: "Sold"
    }
  };

  return (
    <div className="App">
      <header className="App-header" />
      <section className="App-content">
        <div id="car-info">
          <h1>{car.name}</h1>
          <div style={{ display: "flex" }}>
            <img src={car.img} alt={car.name} height={150} />
            <StatusInfoContainer />
            <FinancialInfoContainer />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
