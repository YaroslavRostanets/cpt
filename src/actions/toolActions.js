export const GET_PLANNING_HOURS_REQUEST = 'GET_PLANNING_HOURS_REQUEST';
export const GET_PLANNING_HOURS_SUCCESS = 'GET_PLANNING_HOURS_SUCCESS';
export const GET_PLANNING_HOURS_FAIL = 'GET_PLANNING_HOURS_FAIL';

export function getPlanningHours (date, selected) {
	console.log('getting_planning_hours...');
	console.log('date', Math.round(date.getTime() / 1000) );
	console.log('selected', selected);

	return dispatch => {
		dispatch({
      		type: GET_PLANNING_HOURS_REQUEST
    	});
		console.log('cost_centers :', selected);
		console.log('date :', date);

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
        	/*const result = [data.result[10]];*/
        	const { result } = data;
        	console.log(result);

        	const tableRowsArray = result.map((oneJobObject)=>{

        		let oneRowObj = {
        			'costCenter': oneJobObject.Cost_Center,
        			'jobno': oneJobObject.jobno,
        			'customer': oneJobObject.customer,
        			'description': oneJobObject.description,
        			'dateIn': oneJobObject.Date_In,
        			'dateDue': oneJobObject.Date_Due,
        			'partialDue': oneJobObject.Partial_Due,
        			'daysAvailable': function() {
        				let dayInMiliSec = 24 * 60 * 60;
        				let startDateIn = new Date(oneJobObject.Date_In).setHours(0,0,0,0);
        				let startDateDue = new Date(oneJobObject.Date_Due).setHours(0,0,0,0);

        				return Math.round( (startDateDue - startDateIn + dayInMiliSec) / dayInMiliSec );
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
        						date: currentDate.getTime()
        					});
        					if(currentDate.getDay() === 0) {
        						weekCounter = weekCounter + 1;
        						console.log('L: ',currentDate);
        						if(weekCounter == 2) break;
        					}
        					
        					console.log(i);
        					currentDate.setDate(dateStart.getDate()+i);
        					//console.log('Now: ', dateStart);
        					i++;
        				}
        				currentDate.setDate(currentDate.getDate()+1);
        				planningHoursArray.push({
        					date: currentDate.getTime(),
        					weekly: true
        				});
        				currentDate.setDate(currentDate.getDate()+1);
        				planningHoursArray.push({
        					date: currentDate.getTime(),
        					weekly: true
        				});

        				oneJobObject.planning_hours.forEach((item)=>{
        					let setPanningHoursDate = new Date(item.date);
        						setPanningHoursDate.setHours(0,0,0,0);
        						console.log('test: ', setPanningHoursDate.getTime());
        						let index = planningHoursArray.findIndex((el)=>{
        							return el.date === setPanningHoursDate.getTime();
        						});
        						console.log('findIndex: ', index);
        						planningHoursArray.splice(index, 1, item);
        				});


        				console.log(planningHoursArray);

        				return planningHoursArray;
        			}()
        		}
        		return oneRowObj;
        	});
        	console.log('TableRow: ', tableRowsArray);

        	dispatch({
          		type: GET_PLANNING_HOURS_SUCCESS,
          		payload: tableRowsArray
        	})

        })
      	.catch(error => console.error(
      		dispatch({
          		type: GET_PLANNING_HOURS_FAIL,
          		payload: {}
        	})
      	));

	}
	
}