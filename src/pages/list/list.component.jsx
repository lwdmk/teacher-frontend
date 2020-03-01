import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';

import ListItemPage from '../list-item/list-item.component';
import ListOverview from '../../component/list-overview/list-overview.component'
import ExamPage from '../exam/exam.component'

import LIST_TYPES from './list.types'

import './list.styles.scss';

const ListPage = ({ match }) => {
  let { listType } = useParams();
  return (
    <div className='list-page'>
      <h3>ListPage {listType}</h3>
      <Switch>
        <Route exact path={`${match.path}`} component={ListOverview} />
        <Route path={`${match.path}/:itemId`} component={
          listType === LIST_TYPES.EXAMS ? ExamPage : ListItemPage
        } />
      </Switch>
    </div>
  )
}

export default ListPage;