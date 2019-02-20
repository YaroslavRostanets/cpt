import { API } from '../constants';

export const GET_PLANNING_HOURS_REQUEST = 'GET_PLANNING_HOURS_REQUEST';
export const GET_PLANNING_HOURS_SUCCESS = 'GET_PLANNING_HOURS_SUCCESS';
export const GET_PLANNING_HOURS_FAIL = 'GET_PLANNING_HOURS_FAIL';
export const SAVE_TABLE_CELL = 'SAVE_TABLE_CELL';
export const SAVE_TABLE_FAIL = 'SAVE_TABLE_FAIL';
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

export function getPlanningHours (date, selected, timeline) {
	console.log('getting_planning_hours...');
	console.log('date ', date.getTimezoneOffset() );
	console.log('selected', selected);
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
            
            const correct = getOutFromObj([...data.result]);  
            const extendetDataArray = addMissingProperties(correct, timeline);

        	dispatch({
          		type: GET_PLANNING_HOURS_SUCCESS,
          		payload: extendetDataArray
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


export function addMissingProperties (rowsArray, timeline) {

    const extendetRowsArray = rowsArray.map((row)=>{

            row.Days_Available = getDaysAvailable(row.Date_Due, row.Date_In);
            row.Allocated_Hours = getAllocatedHours(row.planning_hours);
            row.Required_Days = getRequiredDays(row.Allocated_Hours, timeline);
        
        return row;
    });

    function getRequiredDays(allocatedHours, timeline) {
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




    return extendetRowsArray;

}

function getOutFromObj(rowsArray) {

    const correct = rowsArray.map((item)=>{
            //console.log('getOut: ', item);
            item.planning_hours.forEach((ph, index)=>{
                let propName = Object.keys(ph).pop();
                    item.planning_hours[index] = ph[propName];
            });

            return item;
    });

    return correct;
}