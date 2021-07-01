import React from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import './login.css';

const Login = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (userData) => {
    toast.success('login successful');
    history.push('/dashboard');
  };
  return (
    <div className='login-container'>
      <div className='grid-container'>
        <div className='grid-item item1'>
          <i className='fas fa-user-plus fa-5x'></i>
          {/* <p style={{ fontSize: "52px" }}>LECTURER HUB</p> */}
        </div>
        <div className='grid-item'>
          <div className='block'>
            <a type='button' href='/register' className='btn btn-dark dark1'>
              Sign Up
            </a>
          </div>
          <div className='block1'>
            <p style={{ fontSize: '16px' }}>Welcome</p>
            <p>Log in to access university class booking services </p>
          </div>
          <div className='block2'>Social Networks</div>
        </div>
        <div className='grid-item'>
          <div className='block3'>
            <a type='button' href='/login' className='btn btn1'>
              Sign In
            </a>
          </div>
          <div className='block4'>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className='input-container'>
                <input
                  className='input-field'
                  type='email'
                  placeholder='email'
                  name='email'
                  {...register('email', {
                    required: 'Enter your Email Address',
                    pattern: {
                      value: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'Enter a valid e-mail address',
                    },
                  })}
                />
                <i className='fa fa-envelope icon'></i>
              </div>
              {errors.email && (
                <p className='errorMessage'>{errors.email.message}</p>
              )}
              <div className='input-container'>
                <input
                  type='password'
                  name='password'
                  className='input-field'
                  placeholder='Password'
                  {...register('password', {
                    required: 'You must specify a password',
                    minLength: {
                      value: 8,
                      message: 'Password must have at least 8 characters',
                    },
                  })}
                />
                <i className='fa fa-key icon'></i>
              </div>
              {errors.password && (
                <p className='errorMessage'>{errors.password.message}</p>
              )}
              <div className='input-container' style={{ marginLeft: '310px' }}>
                <button
                  type='submit'
                  className='btn btn1'
                  onClick={handleSubmit(handleLogin)}
                >
                  Log in<i className='fa fa-arrow-right icon1'></i>
                </button>
              </div>
            </form>
          </div>
          <div className='block5'>
            <ul>
              <li>
                <i className='fab fa-facebook-f fa-x'></i>
              </li>
              <li>
                <i className='fab fa-twitter fa-x'></i>
              </li>
              <li>
                <i className='fab fa-github fa-x'></i>
              </li>
              <li>
                <i className='fab fa-linkedin-in fa-x'></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
