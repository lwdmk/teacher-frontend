import LessonActionTypes from './lesson.types'

export const fetchLessonsListStart = () => ({
  type: LessonActionTypes.FETCH_LESSON_LIST_START
});

export const fetchLessonsListSuccess = lessons => ({
  type: LessonActionTypes.FETCH_LESSON_LIST_SUCCESS,
  payload: lessons
})

export const fetchLessonsListFailure = (errorMessage) => ({
  type: LessonActionTypes.FETCH_LESSON_LIST_FAILURE,
  payload: errorMessage
})