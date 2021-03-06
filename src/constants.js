
export const availableColors = ['-', '#FDC996', '#A1DBA7', '#EB9FA5'];
	   const ORIGIN = window.location.origin === 'http://localhost:3000' ? 'http://94.45.133.173:8000' : 'http://94.45.133.173:8000';
export const API = {
	COST_CENTERS: ORIGIN + '/cost-centers/',
	TIMELINE: ORIGIN + '/timeline/',
	TIMELINE_DELETE: ORIGIN +'/timeline/delete/',
	CAPACITY: ORIGIN + '/capacity/',
	PLANNING_HOURS: ORIGIN + '/planning-hours/',
	PLANNING_HOURS_EDIT: ORIGIN + '/planning-hours/edit/',
	PLANNING_HOURS_DELETE: ORIGIN + '/planning-hours/delete/',
	LOGIN: ORIGIN + '/login/',
	GET_CURRENT_USER: ORIGIN + '/get-current-user',
	LOGOUT: ORIGIN + '/logout/',
	CHECK_USER: ORIGIN + '/check-user/'
}