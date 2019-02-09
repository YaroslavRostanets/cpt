import { LOGIN_REQUEST,
		 LOGIN_SUCCESS,
		 LOGIN_FAIL
} from '../actions/userActions';

const initialState = {
  	userData: null,
  	fetching: false
}

export function userReducer(state = initialState, action) {
  	switch (action.type) {
    	case LOGIN_REQUEST:
      		return { ...state, fetching: true }
      	case LOGIN_SUCCESS:
      		return { ...state, userData: action.payload ,fetching: false }
      	case LOGIN_FAIL:
      		return { ...state ,fetching: false }
    default:
      return state
  }
}