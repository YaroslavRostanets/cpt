export const GET_TIMELINE_REQUEST = 'GET_TIMELINE_REQUEST';
export const GET_TIMELINE_SUCCESS = 'GET_TIMELINE_SUCCESS'; 

export const SET_TIMELINE_REQUEST = 'SET_TIMELINE_REQUEST';
export const SET_TIMELINE_SUCCESS = 'SET_TIMELINE_SUCCESS';

export const REMOVE_TIMELINE = 'REMOVE_TIMELINE';

export const GET_CAPACITY_REQUEST = 'GET_CAPACITY_REQUEST';
export const GET_CAPACITY_SUCCESS = 'GET_CAPACITY_SUCCESS';


export function getTimeline () {

    return dispatch => {
    	dispatch({
            type: GET_TIMELINE_REQUEST
        })

        setTimeout(()=>{
	       	fetch("http://94.45.133.173:8000/timeline/",{
	            method: 'get'
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
        }, 300);

    }
    
}

export function setTimeline (timeline, stateTimeline) {

	return dispatch => {
		dispatch({
            type: SET_TIMELINE_REQUEST,
            payload: timeline
        })
        
        setTimeout(()=>{
	       	fetch("http://94.45.133.173:8000/timeline/",{
	            method: 'post',
	            body: JSON.stringify(timeline)
	        })
	        .then(result => result.json())
	        .then((data) => {
	            dispatch({
	                type: SET_TIMELINE_SUCCESS,
	                payload: data.result
	            })
	        },
	        (error) => {
	          	console.error(error);
	        }
	      )
        }, 1000);
    }
}

export function removeTimeline (id) {
		return dispatch => {
        	console.log(id);

	     	fetch("http://94.45.133.173:8000/timeline/delete/",{
	            method: 'post',
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
        
        setTimeout(()=>{
	       	fetch("http://94.45.133.173:8000/capacity/",{
	            method: 'get'
	        })
	        .then(result => result.json())
	        .then((data) => {
	        	console.log('capacity: ', data);
	            dispatch({
	                type: GET_CAPACITY_SUCCESS,
	                payload: data.result
	            })
	        },
	        (error) => {
	          	console.error(error);
	        }
	      )
        }, 0);
    }
}