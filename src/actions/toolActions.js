export const GET_PLANNING_HOURS_REQUEST = 'GET_PLANNING_HOURS_REQUEST';
export const GET_PLANNING_HOURS_SUCCESS = 'GET_PLANNING_HOURS_SUCCESS';
export const GET_PLANNING_HOURS_FAIL = 'GET_PLANNING_HOURS_FAIL';
export const SAVE_TABLE_CELL = 'SAVE_TABLE_CELL';

export function saveTableCell (obj) {

    return dispatch => {
        
        console.log('obj: ', obj);

        fetch("http://94.45.133.173:8000/planning-hours/edit/",{
            method: 'post',
            body : JSON.stringify(obj)
        })
        .then(res => res.json())
        .then((data) => {
            console.log('save: ', data.result);
            dispatch({
                type: SAVE_TABLE_CELL,
                payload: data.result
            })
        },
        (error) => {
          
        }
      )

    }
    
}

export function getPlanningHours (date, selected) {
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
				body: JSON.stringify({
		      		cost_centers: selected,
		      		date: Math.round(date.getTime() / 1000) //getting timestamp in unix format in seconds
    			})
    		}
    	)
        .then(response => response.json())
        .then(data => {

        	dispatch({
          		type: GET_PLANNING_HOURS_SUCCESS,
          		payload: data.result
        	})

        })
      	.catch(error => {
            throw error;
            dispatch({
                type: GET_PLANNING_HOURS_FAIL,
                payload: {}
            })
        }
            
      	);

	}
	
}


function convertToReact (fromApiArr, date) {

    const tableRowsArray = fromApiArr.map((oneJobObject)=>{

                let oneRowObj = {
                    'costCenter': oneJobObject.Cost_Center,
                    'jobno': oneJobObject.jobno,
                    'customer': oneJobObject.customer,
                    'description': oneJobObject.description,
                    'dateIn': oneJobObject.Date_In,
                    'dateDue': oneJobObject.Date_Due,
                    'partialDue': oneJobObject.Partial_Due,
                    'daysAvailable': function() {
                        let dayInMiliSec = 24 * 60 * 60 * 1000;
                        let startDateIn = new Date(oneJobObject.Date_In);
                            startDateIn.setHours(0,0,0,0);
                        let startDateDue = new Date(oneJobObject.Date_Due);
                            startDateDue.setHours(0,0,0,0);

                        return Math.round( (startDateDue.getTime() - startDateIn.getTime() + dayInMiliSec) / dayInMiliSec );
                    }(),
                    'hoursPlanned': oneJobObject.Hrs_planned.toFixed(2),
                    'planning_hours': function() {
                        var planningHoursArray = [];
                        var weekCounter = 0;
                        var dateStart = new Date(date);
                            dateStart.setHours(0,0,0,0);
                        var i = 1;
                        var currentDate = new Date(date);
                            currentDate.setHours(0,0,0,0);

                        while(i < 20) {
                            planningHoursArray.push({
                                date: currentDate.getTime(),
                                internal_task_id: oneJobObject.id,
                                is_weekly: false,

                            });
                            if(currentDate.getDay() === 0) {
                                weekCounter = weekCounter + 1;
                                if(weekCounter == 2) break;
                            }
                            
                            currentDate.setDate(dateStart.getDate()+i);
                            //console.log('Now: ', dateStart);
                            i++;
                        }
                        currentDate.setDate(currentDate.getDate()+1);
                        planningHoursArray.push({
                            date: currentDate.getTime(),
                            internal_task_id: oneJobObject.id,
                            is_weekly: true
                        });
                        currentDate.setDate(currentDate.getDate()+1);
                        planningHoursArray.push({
                            date: currentDate.getTime(),
                            internal_task_id: oneJobObject.id,
                            is_weekly: true
                        });

                        oneJobObject.planning_hours.forEach((item)=>{
                            let setPanningHoursDate = new Date(item.date);
                                setPanningHoursDate.setHours(0,0,0,0);
                                let index = planningHoursArray.findIndex((el)=>{
                                    let d = new Date(el.date);
                                    d.setHours(0,0,0,0);

                                    return d.getTime() === setPanningHoursDate.getTime();
                                });
                                planningHoursArray.splice(index, 1, item);
                        });

                        return planningHoursArray;
                    }()
                }
                return oneRowObj;
            });

    return tableRowsArray;

}


/*const tableRowsArray = result.map((oneJobObject)=>{

                let oneRowObj = {
                    'costCenter': oneJobObject.Cost_Center,
                    'jobno': oneJobObject.jobno,
                    'customer': oneJobObject.customer,
                    'description': oneJobObject.description,
                    'dateIn': oneJobObject.Date_In,
                    'dateDue': oneJobObject.Date_Due,
                    'partialDue': oneJobObject.Partial_Due,
                    'daysAvailable': function() {
                        let dayInMiliSec = 24 * 60 * 60 * 1000;
                        let startDateIn = new Date(oneJobObject.Date_In);
                            startDateIn.setHours(0,0,0,0);
                        let startDateDue = new Date(oneJobObject.Date_Due);
                            startDateDue.setHours(0,0,0,0);

                        return Math.round( (startDateDue.getTime() - startDateIn.getTime() + dayInMiliSec) / dayInMiliSec );
                    }(),
                    'hoursPlanned': oneJobObject.Hrs_planned.toFixed(2),
                    'planning_hours': function() {
                        var planningHoursArray = [];
                        var weekCounter = 0;
                        var dateStart = new Date(date);
                            dateStart.setHours(0,0,0,0);
                        var i = 1;
                        var currentDate = new Date(date);
                            currentDate.setHours(0,0,0,0);

                        while(i < 20) {
                            planningHoursArray.push({
                                date: currentDate.getTime(),
                                internal_task_id: oneJobObject.id,
                                is_weekly: false,

                            });
                            if(currentDate.getDay() === 0) {
                                weekCounter = weekCounter + 1;
                                if(weekCounter == 2) break;
                            }
                            
                            currentDate.setDate(dateStart.getDate()+i);
                            //console.log('Now: ', dateStart);
                            i++;
                        }
                        currentDate.setDate(currentDate.getDate()+1);
                        planningHoursArray.push({
                            date: currentDate.getTime(),
                            internal_task_id: oneJobObject.id,
                            is_weekly: true
                        });
                        currentDate.setDate(currentDate.getDate()+1);
                        planningHoursArray.push({
                            date: currentDate.getTime(),
                            internal_task_id: oneJobObject.id,
                            is_weekly: true
                        });

                        oneJobObject.planning_hours.forEach((item)=>{
                            let setPanningHoursDate = new Date(item.date);
                                setPanningHoursDate.setHours(0,0,0,0);
                                let index = planningHoursArray.findIndex((el)=>{
                                    let d = new Date(el.date);
                                    d.setHours(0,0,0,0);

                                    return d.getTime() === setPanningHoursDate.getTime();
                                });
                                planningHoursArray.splice(index, 1, item);
                        });

                        return planningHoursArray;
                    }()
                }
                return oneRowObj;
            });*/