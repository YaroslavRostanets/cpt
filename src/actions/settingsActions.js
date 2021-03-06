import { API } from '../constants';

export const GET_TIMELINE_REQUEST = 'GET_TIMELINE_REQUEST';
export const GET_TIMELINE_SUCCESS = 'GET_TIMELINE_SUCCESS'; 

export const SET_TIMELINE_REQUEST = 'SET_TIMELINE_REQUEST';
export const SET_TIMELINE_SUCCESS = 'SET_TIMELINE_SUCCESS';

export const REMOVE_TIMELINE = 'REMOVE_TIMELINE';

export const GET_CAPACITY_REQUEST = 'GET_CAPACITY_REQUEST';
export const GET_CAPACITY_SUCCESS = 'GET_CAPACITY_SUCCESS';

export const SET_CAPACITY_REQUEST = 'SET_CAPACITY_REQUEST';
export const SET_CAPACITY_SUCCESS = 'SET_CAPACITY_SUCCESS';


export function getTimeline () {

    return dispatch => {
    	dispatch({
            type: GET_TIMELINE_REQUEST
        })

	       	fetch(API.TIMELINE,{
	            method: 'get',
	            credentials: 'include',
	        })
	        .then(result => result.json())
	        .then((data) => {
	            dispatch({
	                type: GET_TIMELINE_SUCCESS,
	                payload: data.result
	            })
	        },
	        (error) => {
	        	console.error(error)
	        }
	      )

    }
    
}

export function setTimeline (timeline, stateTimeline) {
	console.log('timeline: ', timeline);

	return dispatch => {
		dispatch({
            type: SET_TIMELINE_REQUEST,
            payload: timeline
        })
        
	       	fetch(API.TIMELINE,{
	            method: 'post',
	            credentials: 'include',
	            body: JSON.stringify(timeline)
	        })
	        .then(result => result.json())
	        .then((data) => {
	        	console.log('timeline_data:', data);
	            dispatch({
	                type: SET_TIMELINE_SUCCESS,
	                payload: data.result
	            })
	        },
	        (error) => {
	          	console.error(error);
	        }
	      )

    }
}

export function removeTimeline (id) {
		return dispatch => {
        	console.log(id);

	     	fetch(API.TIMELINE_DELETE,{
	            method: 'post',
	            credentials: 'include',
	            body: JSON.stringify(id)
	        })
	        .then(result => result.json())
	        .then((data) => {
	        	console.log(data);
	            dispatch({
	                type: REMOVE_TIMELINE,
	                payload: data.result
	            })
	        },
	        (error) => {
	          	console.error(error);
	        }
	      )

    }
}

export function getCapacity() {

		return dispatch => {
		dispatch({
            type: GET_CAPACITY_REQUEST
        })
        
	       	fetch(API.CAPACITY,{
	            method: 'get',
	            credentials: 'include'
	        })
	        .then(result => result.json())
	        .then((data) => {
	            dispatch({
	                type: GET_CAPACITY_SUCCESS,
	                payload: data.result
	            })
	        },
	        (error) => {
	          	console.error(error);
	        }
	      )

    }
}

export function setCapacity(capacity) {
		console.log('saveCap: ', capacity);
		return dispatch => {
			dispatch({
	            type: SET_CAPACITY_REQUEST
	        })
        
	       	fetch(API.CAPACITY,{
	            method: 'post',
	            credentials: 'include',
	            body: JSON.stringify({
	            	data: capacity
	            })
	        })
	        .then(result => result.json())
	        .then((data) => {
	        	console.log('capacity: ', data);
	            dispatch({
	                type: SET_CAPACITY_SUCCESS,
	                payload: data.result
	            })
	        },
	        (error) => {
	          	console.error(error);
	        }
	      )

    }
}