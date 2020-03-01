import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './component/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ListPage from './pages/list/list.component';
import './App.scss';

const App = () => (
  <React.Fragment>
    <Header />
    <div className='container'>
      <div className='content'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/:listType' component={ListPage} />
        </Switch>
      </div>
    </div>
  </React.Fragment>
);

export default App;
