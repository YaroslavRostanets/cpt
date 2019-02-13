import { GET_PLANNING_HOURS_REQUEST, 
		 GET_PLANNING_HOURS_SUCCESS,
		 GET_PLANNING_HOURS_FAIL
		  } from '../actions/toolActions';

const initialState = {
    tableRows: [],
    fetching: false
};

export function toolReducer(state = initialState, action) {
  console.log('action:__', action.type);
    switch (action.type) {
    	case GET_PLANNING_HOURS_REQUEST:
      		return { ...state, fetching: true, filter: action.payload }
      	case GET_PLANNING_HOURS_SUCCESS:
      		return { ...state, tableRows: action.payload, fetching: false }
      	case GET_PLANNING_HOURS_FAIL:
      		return { ...state ,fetching: false }
    default:
      	return state
  }
}