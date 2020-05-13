import LessonActionTypes from './lesson.types'

const INITIAL_STATE = {
  lessonsList: [],
  isLessonsListFetching: false,
  errorMessage: null
}

const LessonReducer = (state = INITIAL_STATE, action) => {
  switch (action) {
    case LessonActionTypes.FETCH_LESSON_LIST_START:
      return {
        ...state,
        isLessonsListFetching: true
      }
    case LessonActionTypes.FETCH_LESSON_LIST_SUCCESS:
      return {
        ...state,
        isLessonsListFetching: false,
        errorMessage: null,
        lessonsList: action.payload
      }
    case LessonActionTypes.FETCH_LESSON_LIST_FAILURE:
      return {
        ...state,
        isLessonsListFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}

export default LessonReducer;