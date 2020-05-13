import React from 'react'
import SubHeader from '../../component/sub-header/sub-header.component'
import BlockList from '../../component/block-list/block-list.component'
import { selectLessonsRange } from '../../redux/lesson/lesson.selectors'
import { selectExamsRange } from '../../redux/exam/exam.selectors'

import { connect } from 'react-redux';

import './homepage.styles.scss';

const HomePage = ({ lastLessons, lastExams }) => {
  console.log(lastLessons, lastExams);
  return (
    <React.Fragment>
      <SubHeader />
      <div className='homepage-blocks'>
        <BlockList title="Последние добавленные материалы" limit={3} blocks={lastLessons} />
        <BlockList title="Последние добавленные материалы" limit={3} blocks={lastExams} />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    lastLessons: selectLessonsRange(0, 3)(state),
    lastExams: selectExamsRange(0, 3)(state)
  }
}

export default connect(mapStateToProps)(HomePage);