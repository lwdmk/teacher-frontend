import { createSelector } from 'reselect';

const selectExam = state => state.exam;

export const selectFullTest = createSelector(
  [selectExam],
  exam => exam.fullTest
);

export const selectExamList = createSelector(
  [selectExam],
  exam => exam.examsList
)

export const selectIsExamFetching = createSelector(
  [selectExam],
  exam => exam.isFetching
);

export const selectIsExamLoaded = createSelector(
  [selectExam],
  exam => !!exam.fullTest
);

export const selectExamsRange = (offset, limit)  => createSelector(
  [selectExamList],
  examsList => examsList.slice(offset, limit)
);

export const selectIsExamsRangeNotEmpty = (offset, limit)  => createSelector(
  [selectExamList],
  examsList => examsList.isArray() ? examsList.slice(offset, limit).length > 0 : false
);
