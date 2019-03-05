import { API } from '../constants';

export const GET_PLANNING_HOURS_REQUEST = 'GET_PLANNING_HOURS_REQUEST';
export const GET_PLANNING_HOURS_SUCCESS = 'GET_PLANNING_HOURS_SUCCESS';
export const GET_PLANNING_HOURS_FAIL = 'GET_PLANNING_HOURS_FAIL';
export const SAVE_TABLE_CELL = 'SAVE_TABLE_CELL';
export const SAVE_TABLE_FAIL = 'SAVE_TABLE_FAIL';
export const DELETE_TABLE_CELL = 'DELETE_TABLE_CELL';
export const DELETE_TABLE_FAIL = 'DELETE_TABLE_FAIL';
export const RECALCULATION_TABLE = 'RECALCULATION_TABLE';

export const SORT_ROWS = 'SORT_ROWS';
export const SORT_ROWS_INDEX = 'SORT_ROWS_INDEX';


export function saveTableCell (obj, timeline) {

    return dispatch => {

        fetch(API.PLANNING_HOURS_EDIT,{
            method: 'post',
            credentials: 'include',
            body : JSON.stringify(obj)
        })
        .then(res => res.json())
        .then((data) => {
            dispatch({
                type: SAVE_TABLE_CELL
            })
        },
        (error) => {
            console.error(error);
            dispatch({
                type: SAVE_TABLE_FAIL
            })
        }
      )

    }
}

export function deleteTableCell (id) {

    return dispatch => {
        fetch(API.PLANNING_HOURS_DELETE,{
            method: 'post',
            credentials: 'include',
            body : JSON.stringify({
                'id': id
            })
        })
        .then(res => res.json())
        .then((data) => {
            dispatch({
                type: DELETE_TABLE_CELL
            })
        },
        (error) => {
            console.error(error);
            dispatch({
                type: DELETE_TABLE_FAIL
            })
        }
      )
    }
}

export function getPlanningHours (date, selected, timeline) {
    
    const timezoneOffset = (date.getTimezoneOffset() * 60 * 1000 * -1 );

	return dispatch => {
		dispatch({
      		type: GET_PLANNING_HOURS_REQUEST,
            payload: {date, selected} 
    	});

		fetch(API.PLANNING_HOURS, 
			{
				method: 'post',
                credentials: 'include',
				body: JSON.stringify({
		      		cost_centers: selected,
		      		date: Math.round( (date.getTime() + timezoneOffset) / 1000) 
                    //getting timestamp in unix format in seconds UTC
    			})
    		}
    	)
        .then(response => response.json())
        .then(data => {
            const extendetDataArray = addMissingProperties(data.result, timeline, date);

        	dispatch({
          		type: GET_PLANNING_HOURS_SUCCESS,
          		payload: extendetDataArray,
                lastUpdatedAt: data.last_updated_at,
                lastUpdatedBy: data.last_updated_by
        	})

        })
      	.catch(error => {
            console.error(error);
            dispatch({
                type: GET_PLANNING_HOURS_FAIL
            })
        }
            
      	);

	}	
}

export function recalculationTable (rowNumber, planningHoursNumber, hours, timeline) {
    return {
            type: RECALCULATION_TABLE,
            payload: {
                rowNumber: rowNumber,
                planningHoursNumber: planningHoursNumber,
                hours: hours,
                timeline
            }
    }
}


export function sortedByField (fieldName, index) {

    return {
            type: index === undefined ? SORT_ROWS : SORT_ROWS_INDEX,
            payload: {
                'fieldName': fieldName,
                'index': index
            }
    }
}


export function addMissingProperties (rowsArray, timeline, selectedDate) {

    const extendetRowsArray = rowsArray.map((row)=>{

            row.Days_Available = getDaysAvailable(row.Date_Due, row.Date_In);
            row.Allocated_Hours = getAllocatedHours(row.planning_hours);
            row.Required_Days = getRequiredDays(row.Allocated_Hours, timeline);
            row.Hrs_planned = Math.round(row.Hrs_planned * 100) / 100;

            if(selectedDate) {
                    row.planningHours =  getTwoWeeks(selectedDate, row);
                    row.planningHours.forEach( (item, index) => {
                    const findPH = row.planning_hours.find( (ph) => ph.date === item.date );
                    row.planningHours[index] = findPH ? findPH : item;
                });

                row.planning_hours = row.planningHours;
            }
        
        return row;
    });

    function getRequiredDays(allocatedHours, timeline) {
            if (allocatedHours === 0) return 0;
            
            let item = timeline.find((item)=>{
                return (allocatedHours >= item.hours_start && allocatedHours <= item.hours_end)
            });

            return item ? item.days_value : null;
    }

    function getDaysAvailable(dateDue, dateIn) {
            let dayInMiliSec = 24 * 60 * 60 * 1000;
            let dateD = new Date(dateDue);
                dateD.setHours(0,0,0,0);
            let dateI = new Date(dateIn);
                dateI.setHours(0,0,0,0);

            return Math.floor((dateD.getTime() - dateI.getTime()) / dayInMiliSec + 1);
    }

    function getAllocatedHours(planning_hours) {
            var sum = 0;
            
            planning_hours.forEach((item)=>{

                if(item.hours) {
                    sum += Number(item.hours);
                }
            });

            return Math.round(sum * 100) / 100;
    }

    function getTwoWeeks(dateNow, job) {
        const planningHours = [];
        const dayInMiliSec = 86400000;
        const date = new Date(dateNow);
        var currentDate = new Date(dateNow);
        const endOfWeekIt = date.getDay() === 0 ? 1 : 7 - (new Date(dateNow).getDay()) + 1;

        for (let i = 0; i < endOfWeekIt + 7; i++) {
            currentDate = date.getTime() + i * dayInMiliSec;
            planningHours.push({
                date: getUTCDate(currentDate),
                hours: 0,
                internal_task_id: job.id,
                is_weekly: false
            });
        }
        planningHours.push({
            date: getUTCDate(currentDate + dayInMiliSec),
            hours: 0,
            internal_task_id: job.id,
            is_weekly: true
        })
        planningHours.push({
            date: getUTCDate(currentDate + dayInMiliSec * 8),
            hours: 0,
            internal_task_id: job.id,
            is_weekly: true
        })

        return planningHours;
    }

    function getUTCDate(dateJS) {
        const date = new Date(dateJS);
              date.setHours(0,0,0,0);
        const timezoneOffset = (date.getTimezoneOffset() * 60 * 1000 * -1 );
        const unixUTCDate = ( (date.getTime() + timezoneOffset) / 1000);

        return unixUTCDate;
    }




    return extendetRowsArray;

}



