import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom';

import { fetchExamsListStart } from './redux/exam/exam.actions'

import Header from './component/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ListPage from './pages/list/list.component';
import './App.scss';

const App = ({ fetchExamsList }) => {

  useEffect(() => {
    fetchExamsList()
  }, [fetchExamsList])

  return (
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
  )
};

const mapDispatchToProps = dispatch => ({
  fetchExamsList: () => dispatch(fetchExamsListStart())
})

export default connect(null, mapDispatchToProps)(App);
