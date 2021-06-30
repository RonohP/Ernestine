import React, { useState } from "react";
import "../Styles/main.css";
import Sidebar from "./layout/Sidebar";
import { Switch, Route } from "react-router-dom";
import Class from "./Class/Class";
import Schools from "./school/Schools";
import Schedule from "./schedule/Schedule";
import Calendar from "react-calendar";
import Form from "./Form/Form";
import "../Styles/calendar.css";
import SimpleCard from '../UI/Card';

const schedules = [
    {
      Event: "CAT",
      class: "Med Hall 1",
      school: "School of Medicine",
      date: "Mon 3/06/2021 ",
      time: " 8.00am -11.00am",
      EventDesc: 'Carry your Laptops',
    },
    {
      Event: "Main Exam",
      class: "Agric Hall 3",
      school: "School of Agriculture",
      date: "Mon 3/06/2021 ",
      time: " 7gi.00am -11.00am",
    },
  ];


function Main(props) {
  const [value, onChange] = useState(new Date());
  const [event, setEvent] = useState(schedules);

  console.log(value);

  const schedule = schedules.map((schedule) => 
  <SimpleCard data={schedule} />
  );

  const addEvent = (event, eventDesc) =>{
   const newEvent = {Event: event, EventDesc: eventDesc};
   setEvent([...schedules, newEvent]);
   }

  return (
    <div className='main'>
      <Sidebar />
      <div className='content'>
        {' '}
        <Switch>
          <Route path='/dashboard'>
            <div>
              <h2 style={{ color: 'white' }}>This is the dashboard content</h2>
              <div className='cards'>{schedule}</div>
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
                onClickDay={() => alert('Clicked day: ', value.toLocaleString())}
              />
            </div>
            <Form submit={addEvent}/>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
