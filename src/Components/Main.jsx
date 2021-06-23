import React from "react";
import "../Styles/main.css";
import Sidebar from "./Sidebar";
import { Switch, Route } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <Sidebar />
      <div className="content">
        {" "}
        <Switch>
          <Route path="/dashboard">
            <div>
              <h2 style={{ color: "white" }}>This is the dashboard content</h2>
            </div>
          </Route>
          <Route exact path="/schools">
            <div>
              <h2 style={{ color: "white" }}>This is the schools content</h2>
            </div>
          </Route>
          <Route exact path="/classes">
            <div>
              <h2 style={{ color: "white" }}>This is the classes content</h2>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Main;
