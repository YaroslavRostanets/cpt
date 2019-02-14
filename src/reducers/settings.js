import { 
  GET_TIMELINE_REQUEST,
  GET_TIMELINE_SUCCESS,
  SET_TIMELINE_REQUEST,
  SET_TIMELINE_SUCCESS,
  GET_CAPACITY_REQUEST,
  GET_CAPACITY_SUCCESS,
  REMOVE_TIMELINE
   } from '../actions/settingsActions';

const initialState = {
    timeline: [],
    timelineFetching: false,
    timelineBtnFetching: false,
    capacity: []

};

export function settingsReducer(state = initialState, action) {
  	switch (action.type) {
      case GET_TIMELINE_REQUEST:
          return { ...state, timelineFetching: true }
    	case GET_TIMELINE_SUCCESS:
      		return { ...state, timeline: action.payload, timelineFetching: false }
      case SET_TIMELINE_REQUEST:
          return { ...state, timeline: action.payload.data, timelineBtnFetching: true }
      case SET_TIMELINE_SUCCESS:
          return { ...state, timeline: action.payload, timelineBtnFetching: false }
      case REMOVE_TIMELINE:
          return { ...state, timeline: action.payload }
      case GET_CAPACITY_REQUEST:
          return { ...state }
      case GET_CAPACITY_SUCCESS:
          return { ...state, capacity: action.payload }
    default:
      return state
  }
}