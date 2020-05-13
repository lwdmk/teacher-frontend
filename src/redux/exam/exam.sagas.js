import { takeLatest, put } from 'redux-saga/effects';
import {
  fetchExamsListSuccess,
  fetchExamsListFailure
} from './exam.actions';

import { fetchExamsList } from '../../api/exams.api'
import ExamActionTypes from './exam.types';

export function* fetchExamsListAsync() {
  try {
    let response = yield fetchExamsList();
    if (response.status === 200) {
      let result = yield response.json();
      yield put(fetchExamsListSuccess(result.data));
    } else {
      yield put(fetchExamsListFailure('Failed to get exams from remote server'));
    }
  } catch (error) {
    yield put(fetchExamsListFailure(error.message));
  }
}

export function* onFetchExamsListStart() {
  yield takeLatest(ExamActionTypes.FETCH_EXAMS_LIST_START, fetchExamsListAsync);
}