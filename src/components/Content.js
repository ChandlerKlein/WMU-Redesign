/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Content = () => {
  const style = {
    margin: '10px',
    height: '225px',
  };

  return (
    <div className='col s12 m12 l10'>
      <div className='row'>
        <div className='col s12 m6 l4 xl3'>
          <div className='card hoverable' style={style}>
            <div className='card-content black-text'>
              <i className='material-icons'>school</i>
              <span className='card-title'>Academic Services</span>
              <ul>
                <li>
                  <a href='#'>My Grades</a>
                </li>
                <li>
                  <a href='#'>My Transcript</a>
                </li>
                <li>
                  <a href='#'>Degree Works</a>
                </li>
                <li>
                  <a href='#'>Graduation Application</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col s12 m6 l4 xl3'>
          <div className='card hoverable' style={style}>
            <div className='card-content black-text'>
              <i className='material-icons'>account_balance</i>
              <span className='card-title'>Financial Aid</span>
              <ul>
                <li>
                  <a href='#'>Self-Service</a>
                </li>
                <li>
                  <a href='#'>Requirements</a>
                </li>
                <li>
                  <a href='#'>Award Amounts</a>
                </li>
                <li>
                  <a href='#'>Award Payment Schedule</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col s12 m6 l4 xl3'>
          <div className='card hoverable' style={style}>
            <div className='card-content black-text'>
              <i className='material-icons'>assignment</i>
              <span className='card-title'>Registration</span>
              <ul>
                <li>
                  <a href='#'>Course Offerings</a>
                </li>
                <li>
                  <a href='#'>Add/Drop Classes</a>
                </li>
                <li>
                  <a href='#'>My Schedule</a>
                </li>
                <li>
                  <a href='#'>Academic Calendars</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='col s12 m6 l4 xl3'>
          <div className='card hoverable' style={style}>
            <div className='card-content black-text'>
              <i className='material-icons'>house</i>
              <span className='card-title'>Residence Life</span>
              <ul>
                <li>
                  <a href='#'>Update Info</a>
                </li>
                <li>
                  <a href='#'>Change My Password</a>
                </li>
                <li>
                  <a href='#'>My Lab Printing</a>
                </li>
                <li>
                  <a href='#'>Award Payment Schedule</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col s12 m6 l4 xl3'>
          <div className='card hoverable' style={style}>
            <div className='card-content black-text'>
              <i className='material-icons'>account_circle</i>
              <span className='card-title'>My Account</span>
              <ul>
                <li>
                  <a href='#'>Update Info</a>
                </li>
                <li>
                  <a href='#'>Change My Password</a>
                </li>
                <li>
                  <a href='#'>My Lab Printing</a>
                </li>
                <li>
                  <a href='#'>Award Payment Schedule</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
