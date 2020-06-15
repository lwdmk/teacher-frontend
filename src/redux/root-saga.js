import { all, call } from 'redux-saga/effects';

import { onFetchExamsListStart } from './exam/exam.sagas';
import { onFetchLessonsListStart } from './lesson/lesson.sagas';

export default function* rootSaga() {
  yield all([
    call(onFetchExamsListStart),
    call(onFetchLessonsListStart)
  ]);
}