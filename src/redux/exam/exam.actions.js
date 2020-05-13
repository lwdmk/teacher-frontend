import ExamActionTypes from './exam.types';

export const fetchFullExamStart = () => ({
  type: ExamActionTypes.FETCH_FULL_EXAM_START
});

export const fetchExamsListStart = () => ({
  type: ExamActionTypes.FETCH_EXAMS_LIST_START
});

export const fetchExamsListSuccess = exams => ({
  type: ExamActionTypes.FETCH_EXAMS_LIST_SUCCESS,
  payload: exams
});

export const fetchExamsListFailure = errorMessage => ({
  type: ExamActionTypes.FETCH_EXAMS_LIST_FAILURE,
  payload: errorMessage
});