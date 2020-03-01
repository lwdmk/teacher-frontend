import ExamActionTypes from './exam.types';

const INITIAL_STATE = {
  fullTest: null,
  isFetching: false,
  errorMessage: null
}

const examReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ExamActionTypes.FETCH_EXAM_START:
      return {
        ...state,
        isFetching: true
      };
    case ExamActionTypes.FETCH_EXAM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fullTest: action.payload,
        errorMessage: null
      };
    case ExamActionTypes.FETCH_EXAM_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}

export default examReducer;