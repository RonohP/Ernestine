import React from "react";
import { useState } from "react";
import "../Styles/main.css";
import '../Styles/calendar.css'
import Sidebar from "./Sidebar";
import Form from './Form/Form';
import Calendar from "react-calendar";
import { Switch, Route } from "react-router-dom";

function Main() {
  const [value, onChange] = useState(new Date());
  return (
    <div className='main'>
          <Sidebar />
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
          <div className='calendar-form-div'>
            <div className='calendar-div'>
              <Calendar className='calendar' onChange={onChange} value={value} />
            </div>
            <Form />
          </div>
        </div>
  );
}

export default Main;
