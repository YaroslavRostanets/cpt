import { combineReducers } from 'redux';
import { userReducer } from './user';
import { toolReducer } from './tool';
import { uiReducer } from './ui';
import { settingsReducer } from './settings';

export const rootReducer = combineReducers({
	ui: uiReducer,
  	user: userReducer,
  	tool: toolReducer,
  	settings: settingsReducer
  
})