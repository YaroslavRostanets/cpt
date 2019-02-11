import { combineReducers } from 'redux';
import { userReducer } from './user';
import { toolReducer } from './tool';

export const rootReducer = combineReducers({
  user: userReducer,
  tool: toolReducer
})