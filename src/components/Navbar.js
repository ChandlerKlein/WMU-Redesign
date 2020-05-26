import React from 'react';
import logo from '../assets/W-gold-brown.png';
import M from 'materialize-css';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const icon = {
    color: 'black',
    margin: '3px 10px 0px 10px',
  };

  return (
    <div>
      <ul id='dropdown1' className='dropdown-content'>
        <li>
          <span>Chandler Klein</span>
        </li>
        <li>
          <Link to='#'>Log out</Link>
        </li>
      </ul>
      <nav className='brown darken-4 z-depth-3'>
        <div className='nav-wrapper'>
          <div className='row'>
            <div className='col s2 center-align'>
              <Link to='/' className='brand-logo'>
                <img
                  className='responsive-img left'
                  src={logo}
                  alt='logo'
                  style={{ width: '60px' }}
                />
                <span
                  className='white-text hide-on-med-and-down'
                  style={{ paddingLeft: '20px' }}
                >
                  Western Michigan University
                </span>
              </Link>
            </div>
            <Link to='#' data-target='mobile-demo' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </Link>
            <div className='col s10'>
              <ul className='right hide-on-med-and-down'>
                <li>
                  <Link
                    to='/alerts'
                    className='tooltipped'
                    data-tooltip='Alert Settings'
                  >
                    <i className='material-icons'>notification_important</i>
                  </Link>
                </li>
                <li>
                  <Link
                    to='#'
                    className='tooltipped'
                    data-tooltip='Academic Catalog'
                  >
                    <i className='material-icons'>library_books</i>
                  </Link>
                </li>
                <li>
                  <Link to='#' className='tooltipped' data-tooltip='Elearning'>
                    <i className='material-icons'>dashboard</i>
                  </Link>
                </li>
                <li>
                  <Link
                    to='#'
                    className='tooltipped'
                    data-tooltip='Experience WMU'
                  >
                    <i className='material-icons'>explore</i>
                  </Link>
                </li>
                <li>
                  <Link
                    to='#'
                    className='tooltipped'
                    data-tooltip='People Search'
                  >
                    <i className='material-icons'>people</i>
                  </Link>
                </li>
                <li>
                  <Link to='#' className='tooltipped' data-tooltip='W-Exchange'>
                    <i className='material-icons'>email</i>
                  </Link>
                </li>
                <li>
                  <Link to='#' className='tooltipped' data-tooltip='Help'>
                    <i className='material-icons'>help</i>
                  </Link>
                </li>
                <li>
                  <a
                    href='#!'
                    className='dropdown-trigger'
                    data-target='dropdown1'
                  >
                    <i className='material-icons'>arrow_drop_down</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className='row'>
        <div
          className='col s12 hide-on-med-and-up show-on-medium yellow darken-2 center-align'
          style={{ padding: '5px' }}
        >
          <Link
            to='/alerts'
            className='tooltipped'
            data-tooltip='Alert Settings'
          >
            <i className='material-icons' style={icon}>
              notification_important
            </i>
          </Link>

          <Link to='#' className='tooltipped' data-tooltip='Academic Catalog'>
            <i className='material-icons' style={icon}>
              library_books
            </i>
          </Link>

          <Link to='#' className='tooltipped' data-tooltip='Elearning'>
            <i className='material-icons' style={icon}>
              dashboard
            </i>
          </Link>

          <Link to='#' className='tooltipped' data-tooltip='Experience WMU'>
            <i className='material-icons' style={icon}>
              explore
            </i>
          </Link>

          <Link to='#' className='tooltipped' data-tooltip='People Search'>
            <i className='material-icons' style={icon}>
              people
            </i>
          </Link>

          <Link to='#' className='tooltipped' data-tooltip='W-Exchange'>
            <i className='material-icons' style={icon}>
              email
            </i>
          </Link>

          <Link to='#' className='tooltipped' data-tooltip='Help'>
            <i className='material-icons' style={icon}>
              help
            </i>
          </Link>
        </div>
      </div>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/'>Alert Settings</a>
        </li>
        <li>
          <a href='/'>Elearning</a>
        </li>
        <li>
          <a href='/'>Experience WMU</a>
        </li>
        <li>
          <a href='/'>People Search</a>
        </li>
        <li>
          <a href='/'>W-Exchange</a>
        </li>
        <li>
          <a href='/'>Help</a>
        </li>
        <li>
          <a href='/'>Log out</a>
        </li>
      </ul>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', function () {
  var sidenav = document.querySelector('.sidenav');
  var tooltips = document.querySelectorAll('.tooltipped');
  var dropdown = document.querySelectorAll('.dropdown-trigger');

  M.Dropdown.init(dropdown, { coverTrigger: false, hover: true });
  M.Sidenav.init(sidenav);
  M.Tooltip.init(tooltips, { position: 'bottom', outDuration: 100 });
});

export default Navbar;
