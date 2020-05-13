import { all, call } from 'redux-saga/effects';

import { onFetchExamsListStart } from './exam/exam.sagas';

export default function* rootSaga() {
  yield all([
    call(onFetchExamsListStart)
  ]);
}