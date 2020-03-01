import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import examReducer from './exam/exam.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  exam: examReducer
});

export default persistReducer(persistConfig, rootReducer);