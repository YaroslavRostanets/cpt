import { COL_CHANGE } from '../actions/uiActions';

const initialState = {
    hiddenCols: {
    	'costCenter': false,
    	'jobno': false,
    	'costorem': false,
    	'description': false,
    	'dateIn': false,
    	'dateDue': false,
    	'partialDue': false,
    	'daysAvailable': false,
    	'hrsPlaned': false,
    	'requiredDays': false,
    	'allocatedHours': false
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