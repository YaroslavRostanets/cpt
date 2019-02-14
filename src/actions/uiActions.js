export const COL_CHANGE = 'COL_CHANGE';

export function colDisplayChange(changedColName) {
	return {
    		type: COL_CHANGE,
    		payload: changedColName
	}


}

