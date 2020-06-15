import { takeLatest, put } from 'redux-saga/effects';
import {
  fetchLessonsListSuccess,
  fetchLessonsListFailure
} from './lesson.actions';

import { fetchLessonsList } from '../../api/lessons.api'
import LessonActionTypes from './lesson.types';

export function* fetchLessonsListAsync() {
  try {
    let response = yield fetchLessonsList();
    if (response.status === 200) {
      let result = yield response.json();
      yield put(fetchLessonsListSuccess(result.data));
    } else {
      yield put(fetchLessonsListFailure('Failed to get lessons from remote server'));
    }
  } catch (error) {
    yield put(fetchLessonsListFailure(error.message));
  }
}

export function* onFetchLessonsListStart() {
  yield takeLatest(LessonActionTypes.FETCH_LESSON_LIST_START, fetchLessonsListAsync);
}