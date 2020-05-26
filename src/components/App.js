import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../css/App.css';

import Navbar from './Navbar';
import Alerts from './Alerts';
import Page from './Page';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Page} />
          <Route exact path='/alerts' component={Alerts} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
