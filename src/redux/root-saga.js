import { all, call } from 'redux-saga/effects';

import {onFetchExamStart} from './exam/exam.sagas';

export default function* rootSaga() {
  yield all([
    call(onFetchExamStart)
  ]);
}