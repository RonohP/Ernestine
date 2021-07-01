import React, { useState } from 'react';
import {nanoid} from 'nanoid';
import '../Styles/main.css';
import Sidebar from './layout/Sidebar';
import { Switch, Route } from 'react-router-dom';
import Class from './Class/Class';
import Schools from './school/Schools';
import Schedule from './schedule/Schedule';
import Calendar from 'react-calendar';
import Form from './Form/Form';
import '../Styles/calendar.css';
import SimpleCard from '../UI/Card';

const schedules = [
  {
    id: 'event-1',
    Event: 'CAT',
    class: 'Med Hall 1',
    school: 'School of Medicine',
    date: 'Mon 3/06/2021 ',
    time: ' 8.00am -11.00am',
    EventDesc: 'Carry your Laptops',
  },
  {
    id: 'event-2',
    Event: 'Main Exam',
    class: 'Agric Hall 3',
    school: 'School of Agriculture',
    date: 'Mon 3/06/2021 ',
    time: ' 7.00am -11.00am',
  },
];

function Main() {
  const [value, onChange] = useState(new Date());
  const [eventt, setEvent] = useState(schedules);

  const schedule = eventt.map((schedule) => (
    <SimpleCard data={schedule} key={schedule.id} />
  ));

  const addEvent = (event, school, room,eventDesc) => {
    const newEvent = {
      id: 'event-' + nanoid(),
      Event: event,
      class: room,
      school: school,
      EventDesc: eventDesc,
      // date: startDate[0],
      // time: startDate[1],
    };
    setEvent([...eventt, newEvent]);
    console.log([...eventt, newEvent]);
  };

  return (
    <div className='main'>
      <Sidebar />
      <div className='content'>
        {' '}
        <Switch>
          <Route path='/dashboard'>
            <div>
              {/* <h2 style={{ color: 'white' }}>This is the dashboard content</h2> */}
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
                minDate={new Date()}
              />
            </div>
            <Form submit={addEvent} />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
