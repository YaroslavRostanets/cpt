export const COL_CHANGE = 'COL_CHANGE';

export function colDisplayChange(changedColName) {
	console.log('WORK');
	return {
    		type: COL_CHANGE,
    		payload: changedColName
	}


}

