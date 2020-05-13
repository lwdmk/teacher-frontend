import { combineReducers } from 'redux';

import examReducer from './exam/exam.reducer'
import lessonReducer from './lesson/lesson.reducer'



const rootReducer = combineReducers({
  exam: examReducer,
  lesson: lessonReducer
});

export default rootReducer;