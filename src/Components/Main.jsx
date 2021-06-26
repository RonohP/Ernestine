import React from "react";
import "../Styles/main.css";
import Sidebar from "./Sidebar";
import { Switch, Route } from "react-router-dom";
import Schools from "./Schools";
import Class from "./Class/Class";


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
            <Schools />
          </Route>
          <Route exact path="/classes">
            <Class />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Main;
