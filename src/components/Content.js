import React from 'react';

import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <div className='col s12 m12 l10'>
      <div className='row'>
        <div className='col s12 m6 l4'>
          <div className='card small'>
            <div className='card-content black-text'>
              <span className='card-title'>Academic Services</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className='card-action'>
              <Link to='#'>This is a link</Link>
            </div>
          </div>
        </div>
        <div className='col s12 m6 l4'>
          <div className='card small'>
            <div className='card-content black-text'>
              <span className='card-title'>Financial Aid</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className='card-action'>
              <Link to='#'>This is a link</Link>
            </div>
          </div>
        </div>
        <div className='col s12 m6 l4'>
          <div className='card small'>
            <div className='card-content black-text'>
              <span className='card-title'>Registration</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className='card-action'>
              <Link to='#'>This is a link</Link>
            </div>
          </div>
        </div>
        <div className='col s12 m6 l4'>
          <div className='card small'>
            <div className='card-content black-text'>
              <span className='card-title'>My Account</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className='card-action'>
              <Link to='#'>This is a link</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
