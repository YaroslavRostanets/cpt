import { LOGIN_REQUEST,
		 LOGIN_SUCCESS,
		 LOGIN_FAIL
} from '../actions/userActions';

const initialState = {
  	userData: JSON.parse(localStorage.getItem('user')) || null,
  	fetching: false
}

export function userReducer(state = initialState, action) {
  console.log('action:__', action.type);
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