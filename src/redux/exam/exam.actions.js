import ExamActionTypes from './exam.types';

export const fetchExamStart = () => ({
  type: ExamActionTypes.FETCH_EXAM_START
});

export const fetchExamSuccess = collectionsMap => ({
  type: ExamActionTypes.FETCH_EXAM_SUCCESS,
  payload: collectionsMap
});

export const fetchExamFailure = errorMessage => ({
  type: ExamActionTypes.FETCH_EXAM_FAILURE,
  payload: errorMessage
});