import { LOGIN_REQUEST,
		 LOGIN_SUCCESS,
		 LOGIN_FAIL,
     GET_CURRENT_USER_SUCCESS,
     USER_LOGOUT,
     USER_IS_LOGGED,
    USER_IS_NOT_LOGGED
} from '../actions/userActions';

const initialState = {
    user: {},
    isAuth: false,
  	fetching: false,
    error: '',
    pageReady: false
}

export function userReducer(state = initialState, action) {
  	switch (action.type) {
    	case LOGIN_REQUEST:
      		return { ...state, fetching: true }
      	case LOGIN_SUCCESS:
      		return { ...state, fetching: false, isAuth: true }
      	case LOGIN_FAIL:
      		return { ...state ,fetching: false, error: action.payload }
        case GET_CURRENT_USER_SUCCESS:
            return { ...state, fetching: false, user: action.payload }
        case USER_LOGOUT:
            return { ...state, fetching: false, user: {}, isAuth: false, error: ''}
        case USER_IS_LOGGED:
            return { ...state, isAuth: true, pageReady: true }
        case USER_IS_NOT_LOGGED:
            return { ...state, isAuth: false, pageReady: true }
    default:
      return state
  }
}