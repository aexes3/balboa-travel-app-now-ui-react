import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages
import Qualcomm from "views/Qualcomm.js";
import Sections from "views/Sections.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/balboa" render={props => <Sections {...props} />} />
      <Route path="/qualcomm" render={props => <Qualcomm {...props} />} />
      <Redirect to="/balboa" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
