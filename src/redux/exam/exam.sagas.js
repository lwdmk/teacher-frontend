import { takeLatest, put } from 'redux-saga/effects';
import {
  fetchExamSuccess,
  fetchExamFailure
} from './exam.actions';

import result from '../../mocks/test.mock.json';

import ExamActionTypes from './exam.types';

export function* fetchExam() {
  try {
    if (result.success) {
      yield put(fetchExamSuccess(result.data));
    } else {
      yield put(fetchExamFailure(result.message));
    }
  } catch (error) {
    yield put(fetchExamFailure(error.message));
  }
}

export function* onFetchExamStart() {
  yield takeLatest(ExamActionTypes.FETCH_EXAM_START, fetchExam);
}