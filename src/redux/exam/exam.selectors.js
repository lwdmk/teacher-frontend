import { createSelector } from 'reselect';

const selectExam = state => state.exam;

export const selectFullTest = createSelector(
  [selectExam],
  exam => exam.fullTest
);

export const selectIsExamFetching = createSelector(
  [selectExam],
  exam => exam.isFetching
);

export const selectIsExamLoaded = createSelector(
  [selectExam],
  exam => !!exam.fullTest
);
