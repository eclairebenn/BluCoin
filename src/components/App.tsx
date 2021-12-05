/* eslint-disable import/no-unresolved */
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import TickerPage from "./tickers/TickerPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/tickers" component={TickerPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
