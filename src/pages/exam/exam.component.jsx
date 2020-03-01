import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchExamStart } from '../../redux/exam/exam.actions'

import ExamResultPage from '../exam-result/exam-result.component';
import Exam from '../../component/exam/exam.component';

import './exam.styles.scss';

const ExamPage = ({ match, fetchExamStart }) => {

  useEffect(() => {
    fetchExamStart()
  }, [fetchExamStart]);

  return (
    <div className='exam-page'>
      <h3>ExamPage</h3>
      <Switch>
        <Route exact path={`${match.path}`} component={Exam} />
        <Route exact path={`${match.path}/result`} component={ExamResultPage} />
      </Switch>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchExamStart: () => dispatch(fetchExamStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ExamPage);