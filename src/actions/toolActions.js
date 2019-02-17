export const GET_PLANNING_HOURS_REQUEST = 'GET_PLANNING_HOURS_REQUEST';
export const GET_PLANNING_HOURS_SUCCESS = 'GET_PLANNING_HOURS_SUCCESS';
export const GET_PLANNING_HOURS_FAIL = 'GET_PLANNING_HOURS_FAIL';
export const SAVE_TABLE_CELL = 'SAVE_TABLE_CELL';

export const SORT_ROWS = 'SORT_ROWS';


export function saveTableCell (obj, timeline) {

    return dispatch => {
        
        console.log('obj: ', obj);

        fetch("http://94.45.133.173:8000/planning-hours/edit/",{
            method: 'post',
            credentials: 'include',
            body : JSON.stringify(obj)
        })
        .then(res => res.json())
        .then((data) => {
            const correct = getOutFromObj([...data.result]);  
            const extendetDataArray = addMissingProperties(correct, timeline);
            
            dispatch({
                type: SAVE_TABLE_CELL,
                payload: extendetDataArray
            })
        },
        (error) => {
          
        }
      )

    }
    
}

export function getPlanningHours (date, selected, timeline) {
	console.log('getting_planning_hours...');
	console.log('date', Math.round(date.getTime() / 1000) );
	console.log('selected', selected);

	return dispatch => {
		dispatch({
      		type: GET_PLANNING_HOURS_REQUEST,
            payload: {date, selected} 
    	});

		fetch(`http://94.45.133.173:8000/planning-hours/`, 
			{
				method: 'post',
                credentials: 'include',
				body: JSON.stringify({
		      		cost_centers: selected,
		      		date: Math.round(date.getTime() / 1000) //getting timestamp in unix format in seconds
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
            dispatch({
                type: GET_PLANNING_HOURS_FAIL,
                payload: {}
            })
        }
            
      	);

	}
	
}


export function sortedByField (fieldName, sortType, index) {

    return {
            type: SORT_ROWS,
            payload: {
                'fieldName': fieldName,
                'sortType': sortType,
                'index': index
            }
    }
}


function addMissingProperties (rowsArray, timeline) {

    const extendetRowsArray = rowsArray.map((row)=>{

            row.Days_Available = getDaysAvailable(row.Date_Due, row.Date_In);
            row.Allocated_Hours = getAllocatedHours(row.planning_hours);
            row.Required_Days = getRequiredDays(row.Allocated_Hours, timeline);
        
        return row;
    });

    function getRequiredDays(allocatedHours, timeline) {
            console.log();
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