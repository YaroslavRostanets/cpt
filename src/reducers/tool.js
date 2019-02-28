import { addMissingProperties } from '../actions/toolActions';
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
    sortAscending: false,
    filter: {
      date: new Date(),
      selected: ''
    }
};

export function toolReducer(state = initialState, action) {
    var assignState;

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
            assignState = {
              tableRows: sort( state.tableRows, action.payload.fieldName, action.payload.index).reverse(),
              sortAscending: false,
              sortedByIndex: '' 
            }
          } else {
            assignState = {
              tableRows: sort( state.tableRows, action.payload.fieldName, action.payload.index),
              sortAscending: true,
              sortedByIndex: ''
            }
          }
          return {...state, ...assignState, sortedByField: action.payload.fieldName }

        case SORT_ROWS_INDEX:
            if(action.payload.index === state.sortedByIndex && state.sortAscending) {
              assignState = {
                tableRows: sort( state.tableRows, action.payload.fieldName, action.payload.index).reverse(),
                sortAscending: false
              }
            } else {
              assignState = {
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
  const sortedArray = array.slice().sort((a, b) => {
    const m = String(index !== undefined ? nullToEmptyStr(a[fieldName][index]['hours']) : nullToEmptyStr(a[fieldName]) );
    const n = String(index !== undefined ? nullToEmptyStr(b[fieldName][index]['hours']) : nullToEmptyStr(b[fieldName]));

    const compare = n.localeCompare(m, undefined,{ numeric: true });
    if (compare === 0) {
      return a['id'].localeCompare(b['id'], undefined,{ numeric: true });
      //if the values ​​match, compare id
    } else {
      return compare;
    }
    
  });

  function nullToEmptyStr(value) {
    return (value === null || value === undefined) ? '' : value;
  }

  return sortedArray;
}

