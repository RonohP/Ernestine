import './Form.css';
import { useState, useMemo } from 'react';
import { Datepicker } from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

const Form = (props) => {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [allDay, setAllDay] = useState(false);
  const [event, setEvent] = useState('');
  const [eventDesc, setEventDesc] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const controls = useMemo(() => (allDay ? ['date'] : ['datetime-local']));

  const controlChange = (e) => {
    setAllDay(e.target.checked);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    props.submit(event,eventDesc);
    setEventDesc('');
    setEvent('');

  }
  return (
    <div className='form-div'>
      <form className='calendar-form' onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-75'>
            <input
              type='text'
              name='event'
              id='event'
              placeholder='Enter event...'
              required
              value={event}
              onChange={(e) => {
                setEvent(e.target.value);
              }}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-75'>
            <select
              className='class'
              id='class'
              name='class'
              required
              defaultValue={'Select class...'}
            >
              <option defaultValue='' disabled hidden>
                Select class...
              </option>
              <option defaultValue='Medical Labs'>Medical Labs</option>
              <option defaultValue='Agriculture Labs'>Agriculture Labs</option>
              <option defaultValue='Main Labs'>Main Labs</option>
              <option defaultValue='Hall A'>Hall A</option>
              <option defaultValue='Hall B'>Hall B</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='col-75'>
            <select
              className='faculty'
              id='faculty'
              name='faculty'
              required
              defaultValue={'Select Faculty...'}
            >
              <option disabled hidden>
                Select Faculty...
              </option>
              <option defaultValue='Medicine'>School of Medicine</option>
              <option defaultValue='Agriculture'>School of Agriculture</option>
              <option defaultValue='Computing'>School of Computing</option>
              <option defaultValue='Engineering'>School of Engineering</option>
              <option defaultValue='Business'>School of Business</option>
              <option defaultValue='Nursing'>School of Nursing</option>
              <option defaultValue='Archturial Sciences'>
                School of Archturial Sciences
              </option>
              <option defaultValue='Sciences'>School of Sciences</option>
              <option defaultValue='Arts'>School of Arts</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='col-75'>
            <div className='checkbox'>
              <input
                type='checkbox'
                name='all-day'
                id='all-day'
                defaultValue={allDay}
                onChange={controlChange}
              />
              <label htmlFor='all-day'>All day</label>
            </div>
          </div>
        </div>
        <div className='row'>
          <Datepicker
            controls={controls}
            select='range'
            startInput={start}
            endInput={end}
          />
          <div className='col-75'>
            <input
              ref={setStart}
              name='start-date'
              id='start-date'
              required
              className='date'
              placeholder='Event start'
            />
            <input
              ref={setEnd}
              name='end-date'
              id='end-date'
              required
              className='date'
              placeholder='Event end'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-75'>
            <input
              type='text'
              name='event-desc'
              id='event-desc'
              placeholder='Event description...'
              value={eventDesc}
              onChange={(e) => {
                setEventDesc(e.target.value);
              }}
            />
          </div>
        </div>
        <div className='row'>
          <input type='submit' defaultValue='SUBMIT' />
        </div>
      </form>
    </div>
  );
};

export default Form;
