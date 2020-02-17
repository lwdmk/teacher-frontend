import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './component/header/header.component';
import SubHeader from './component/sub-header/sub-header.component';
import HomePage from './pages/homepage/homepage.component';

import './App.scss';

const App = () => (
  <React.Fragment>
    <Header />
    <SubHeader />
    <div className='container'>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  </React.Fragment>
);

export default App;
