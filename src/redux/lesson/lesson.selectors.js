import { createSelector } from 'reselect';

const selectLesson = state => state.lesson;

const selectLessonsList = createSelector(
  [selectLesson],
  lesson => lesson.lessonsList
);

export const selectLessonsRange = (offset, limit)  => createSelector(
  [selectLessonsList],
  lessonsList => lessonsList.slice(offset, limit)
);

export const selectIsLessonsRangeNotEmpty = (offset, limit)  => createSelector(
  [selectLessonsList],
  lessonsList => lessonsList.isArray() ? lessonsList.slice(offset, limit).length > 0 : false
);