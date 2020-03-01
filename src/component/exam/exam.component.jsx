import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectFullTest } from '../../redux/exam/exam.selectors';

import './exam.styles.scss';

const Exam = ({ fullTest }) => {
  console.log(fullTest);
  return (
    <div className="exam-content">

    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  fullTest: selectFullTest
});

export default connect(mapStateToProps)(Exam);