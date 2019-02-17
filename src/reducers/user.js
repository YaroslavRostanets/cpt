import { LOGIN_REQUEST,
		 LOGIN_SUCCESS,
		 LOGIN_FAIL,
     GET_CURRENT_USER_SUCCESS,
     USER_LOGOUT
} from '../actions/userActions';

const initialState = {
    user: {
      username: '',
      is_admin: true
    },
    isAuth: true,
  	fetching: false,
    error: ''
}

export function userReducer(state = initialState, action) {
  	switch (action.type) {
    	case LOGIN_REQUEST:
      		return { ...state, fetching: true }
      	case LOGIN_SUCCESS:
      		return { ...state ,fetching: false }
      	case LOGIN_FAIL:
      		return { ...state ,fetching: false, error: action.payload }
        case GET_CURRENT_USER_SUCCESS:
          return { ...state, fetching: false, user: action.payload, isAuth: true}
        case USER_LOGOUT:
          return { ...state, fetching: false, user: {}, isAuth: false}
    default:
      return state
  }
}