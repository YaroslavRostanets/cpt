import { combineReducers } from 'redux';
import { userReducer } from './user';
import { toolReducer } from './tool';
import { uiReducer } from './ui';

export const rootReducer = combineReducers({
	ui: uiReducer,
  	user: userReducer,
  	tool: toolReducer
  
})