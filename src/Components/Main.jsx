import React from "react";
import "../Styles/main.css";
import Sidebar from "./Sidebar";
import Form from './Form/Form';
import { Switch, Route } from "react-router-dom";

function Main() {
  return (
    <div className='main'>
      <div className='row'>
        <div className='column sidebar'>
          <Sidebar />
        </div>
        <div className='column content'>
          <div className='content'>
            {' '}
            <Switch>
              <Route path='/dashboard'>
                <div>
                  <h2 style={{ color: 'white' }}>
                    This is the dashboard content
                  </h2>
                </div>
              </Route>
              <Route exact path='/schools'>
                <div>
                  <h2 style={{ color: 'white' }}>
                    This is the schools content
                  </h2>
                </div>
              </Route>
              <Route exact path='/classes'>
                <div>
                  <h2 style={{ color: 'white' }}>
                    This is the classes content
                  </h2>
                </div>
              </Route>
            </Switch>
          </div>
        </div>
        <div className='column calender'>
          <div className='calendar'>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
