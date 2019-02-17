import { GET_PLANNING_HOURS_REQUEST, 
		 GET_PLANNING_HOURS_SUCCESS,
		 GET_PLANNING_HOURS_FAIL,
     SAVE_TABLE_CELL,
     SORT_ROWS
		  } from '../actions/toolActions';

const initialState = {
    tableRows: [],
    fetching: false,
    sortedByField: '',
    sortedByIndex: '',
    notSortedArray: []
};

export function toolReducer(state = initialState, action) {
    switch (action.type) {
    	case GET_PLANNING_HOURS_REQUEST:
      	 return { ...state, fetching: true, filter: action.payload }
      	case GET_PLANNING_HOURS_SUCCESS:
      		return { ...state, tableRows: action.payload, fetching: false, notSortedArray: action.payload, sortedByField: '', sortedByIndex: '' }
      	case GET_PLANNING_HOURS_FAIL:
      		return { ...state ,fetching: false }
        case SAVE_TABLE_CELL:
          return { ...state, tableRows: [...action.payload], notSortedArray: [...action.payload], sortedByField: '', sortedByIndex: ''}
        case SORT_ROWS:
          console.log('INDEX: ', action.payload.index);
          if(action.payload.index !== null) {
            if(action.payload.index === state.sortedByIndex) {
              
              const sortedField = '';
              const tableRows = [...state.notSortedArray];

              return { ...state, sortedByField: '', sortedByIndex: action.payload.index, tableRows: tableRows }
            } else {

              const fieldName = action.payload.fieldName;
              const sortedIndex = action.payload.index;
              const tableRows = [...state.tableRows];
                    tableRows.sort(function(a,b){
                      return a[fieldName][sortedIndex].hours - b[fieldName][sortedIndex].hours;
                    });

              return { ...state, sortedByField: '', sortedByIndex: action.payload.index, tableRows: tableRows }
            }

          } else {
            if (action.payload.fieldName === state.sortedByField) {
              const sortedField = '';
              const tableRows = [...state.notSortedArray];

              return { ...state, sortedByField: sortedField, sortedByIndex: '', tableRows: tableRows }

            } else {
              const sortedField = action.payload.fieldName;
              const tableRows = [...state.tableRows];
                  /*------------------------*/
                  tableRows.sort(function(a,b){
                    let m = a[action.payload.fieldName];
                    let n = b[action.payload.fieldName];
                    if (action.payload.sortType === "numeric") {
                      return Number(m) - Number(n);
                    } else {
                      a = a[action.payload.fieldName] ? a[action.payload.fieldName] : '';
                      b = b[action.payload.fieldName] ? b[action.payload.fieldName] : '';
                      return a.localeCompare(b, {
                        numeric: true
                      });
                    }
                  });
                  /*----------------------*/

                return { ...state, sortedByField: sortedField, sortedByIndex: '', tableRows: tableRows }
            }
            
          }
          
    default:
      	return state
  }
}