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
import NucleoIcons from "views/NucleoIcons.js";
import Presentation from "views/Presentation.js";
import Sections from "views/Sections.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/nucleo-icons" render={props => <NucleoIcons {...props} />} />
      <Route path="/presentation" render={props => <Presentation {...props} />} />
      <Route path="/sections" render={props => <Sections {...props} />} />
      <Redirect to="/sections" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
