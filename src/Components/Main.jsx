import React, {useState}from "react";
import "../Styles/main.css";
import Sidebar from "./layout/Sidebar";
import { Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import Schools from "./Schools";
import Class from "./Class/Class";

=======
import Schools from "./school/Schools";
import Schedule from "./schedule/Schedule";
import Calendar from "react-calendar";
import Form from "./Form/Form";
import Class from './Class';
import "../Styles/calendar.css";
>>>>>>> 972a3fa21562ec522a25e41c93b2508e91a6777d

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
              <h2 style={{ color: 'white' }}>This is the dashboard content</h2>
            </div>
          </Route>
          <Route exact path='/schools'>
            <Schools />
          </Route>
          <Route exact path='/classes'>
            <Class />
          </Route>
          <Route exact path='/schedule'>
            <Schedule />
          </Route>
        </Switch>
      </div>
      <Switch>
        <Route path='/dashboard'>
          <div className='calendar-form-div'>
            <div className='calendar-div'>
              <Calendar
                className='calendar'
                onChange={onChange}
                value={value}
              />
            </div>
            <Form />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
