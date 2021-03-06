import { COL_CHANGE } from '../actions/uiActions';

const initialState = {
    hiddenCols: {
    	'cost_center_label': false,
    	'jobno': false,
    	'customer': false,
    	'description': false,
    	'Date_In': false,
    	'Date_Due': false,
    	'Partial_Due': false,
    	'Days_Available': false,
    	'Hrs_planned': false,
    	'Required_Days': false,
    	'Allocated_Hours': false
    }
};

export function uiReducer(state = initialState, action) {
  	switch (action.type) {
    	case COL_CHANGE:
      		return { ...state, hiddenCols: {...state.hiddenCols, ...action.payload} }
    default:
      return state
  }
}