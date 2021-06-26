import './Form.css';

const Form = () => {
  return (
    <div className='form-div'>
      <form className='calendar-form'>
        <div className='row'>
          <div className='col-75'>
            <input
              type='text'
              name='event'
              id='event'
              placeholder='Enter event...'
              required
            />
          </div>
        </div>
        <div className='row'>
          
          <div className='col-75'>
            <select className='class' id='class' name='class' required>
              <option value='' disabled selected hidden>
                Select class...
              </option>
              <option value='A1'>A1</option>
              <option value='A2'>A2</option>
              <option value='A3'>A3</option>
              <option value='A4'>A4</option>
              <option value='A5'>A5</option>
            </select>
          </div>
        </div>
        <div className='row'>
          
          <div className='col-75'>
            <input
              type='date'
              name='start-date'
              id='start-date'
              required
              className='date'
            />
            <input
              type='time'
              name='start-time'
              id='start-time'
              required
              className='time'
            />
            <div className='checkbox'>
              <input
                type='checkbox'
                name='all-day'
                id='all-day'
                value='all-day'
              />
              <label htmlFor='all-day'>All day</label>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-75'>
            <input
              type='date'
              name='end-date'
              id='end-date'
              required
              className='date'
            />
            <input
              type='time'
              name='end-time'
              id='end-time'
              required
              className='time'
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
            />
          </div>
        </div>
        <div class='row'>
          <input type='submit' value='SUBMIT' />
        </div>
      </form>
    </div>
  );
};

export default Form;
