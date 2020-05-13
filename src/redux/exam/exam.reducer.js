import ExamActionTypes from './exam.types';

const INITIAL_STATE = {
  examsList: [], 
  isExamsListFetching: false,
  errorMessage: null
}

const examReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ExamActionTypes.FETCH_EXAMS_LIST_START:
      return {
        ...state,
        isExamsListFetching: true
      };
    case ExamActionTypes.FETCH_EXAMS_LIST_SUCCESS:
      return {
        ...state,
        isExamsListFetching: false,
        examsList: action.payload ,
        errorMessage: null
      };
    case ExamActionTypes.FETCH_EXAMS_LIST_FAILURE:
      return {
        ...state,
        isExamsListFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}

export default examReducer;