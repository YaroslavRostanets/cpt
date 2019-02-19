import { GET_PLANNING_HOURS_REQUEST, 
		 GET_PLANNING_HOURS_SUCCESS,
		 GET_PLANNING_HOURS_FAIL,
     SAVE_TABLE_CELL,
     RECALCULATION_TABLE,
     SORT_ROWS,
     SORT_ROWS_INDEX
		  } from '../actions/toolActions';

const initialState = {
    tableRows: [],
    fetching: false,
    sortedByField: '',
    sortedByIndex: '',
    sortAscending: false
};

export function toolReducer(state = initialState, action) {
    switch (action.type) {
    	case GET_PLANNING_HOURS_REQUEST:
      	 return { ...state, fetching: true, filter: action.payload }
      	case GET_PLANNING_HOURS_SUCCESS:
      		return { ...state, tableRows: action.payload, fetching: false, sortedByField: '', sortedByIndex: '' }
      	case GET_PLANNING_HOURS_FAIL:
      		return { ...state,fetching: false }
        case SAVE_TABLE_CELL:
          return { ...state }

        case RECALCULATION_TABLE:
          const tableRows = state.tableRows.slice();
          const {rowNumber, planningHoursNumber, hours, timeline} = action.payload;
                tableRows[rowNumber]['planning_hours'][planningHoursNumber]['hours'] = hours;
          return { ...state, tableRows: addMissingProperties(tableRows, timeline) }

        case SORT_ROWS:
          if(action.payload.fieldName === state.sortedByField && state.sortAscending) {
            var assignState = {
              tableRows: sort( state.tableRows, action.payload.fieldName, action.payload.index).reverse(),
              sortAscending: false,
              sortedByIndex: '' 
            }
          } else {
            var assignState = {
              tableRows: sort( state.tableRows, action.payload.fieldName, action.payload.index),
              sortAscending: true,
              sortedByIndex: ''
            }
          }
          return {...state, ...assignState, sortedByField: action.payload.fieldName }

          case SORT_ROWS_INDEX:
            if(action.payload.index === state.sortedByIndex && state.sortAscending) {
              var assignState = {
                tableRows: sort( state.tableRows, action.payload.fieldName, action.payload.index).reverse(),
                sortAscending: false
              }
            } else {
              var assignState = {
                tableRows: sort( state.tableRows, action.payload.fieldName, action.payload.index),
                sortAscending: true
              }
            }
            return {...state, ...assignState, sortedByIndex: action.payload.index }
    default:
      	return state
  }
}

function sort(array, fieldName, index) {
  console.log('index: ', index);
  const sortedArray = array.slice().sort((a, b) => {
    const m = String(index !== undefined ? nullToEmptyStr(a[fieldName][index]['hours']) : nullToEmptyStr(a[fieldName]) );
    const n = String(index !== undefined ? nullToEmptyStr(b[fieldName][index]['hours']) : nullToEmptyStr(b[fieldName]));

    return n.localeCompare(m, undefined,{ numeric: true });
  });

  function nullToEmptyStr(value) {
    return (value === null || value === undefined) ? '' : value;
  }

  return sortedArray;
}

function addMissingProperties (rowsArray, timeline) {

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