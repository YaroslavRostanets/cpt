import React, { Component } from 'react';
import CheckboxGroup from '../ui/CheckboxGroup';
import { ButtonBase, Dialog, DialogTitle, DialogContent, 
	Typography, DialogActions, Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import enGB from 'date-fns/locale/en-GB';

class TableSettingsDialog extends Component {

	constructor(props){
		super(props);
	}

	render() {
		const { open, closeDialog, hiddenCols } = this.props;
		const { colDisplayChange } = this.props;

		return(
			<Dialog
				id="table-settings-dialog"
		        onClose={closeDialog}
		        aria-labelledby="customized-dialog-title"
		        open={open}
        		>
		        <DialogTitle className="title-wrap">
		          	<div className="title">
		          		Table settings
		          	</div>
		          	<IconButton onClick={closeDialog} aria-label="Close">
          				<CloseIcon />
        			</IconButton>
		        </DialogTitle>
		        <DialogContent className="dialog-content">
		        	<div className="text">
		        		Choose columns you want to hide
		        	</div>
		        	<div className="cols">
		        		<div className="col">
		        			<div className="col-titile">
		        				General
		        			</div>
		        			<div className="list">
		        				<CheckboxGroup 
		        					label="Cost Center"
		        					checked={hiddenCols['cost_center_label']}
		        					prop="cost_center_label"
		        					colDisplayChange={colDisplayChange}
		        					 />
		        				<CheckboxGroup 
		        					label="Job#"
		        					checked={hiddenCols['jobno']}
		        					prop="jobno"
		        					colDisplayChange={colDisplayChange}
		        					 />
		        				<CheckboxGroup 
		        					label="Description" 
		        					checked={hiddenCols['description']}
		        					prop="description"
		        					colDisplayChange={colDisplayChange}
		        					/>
		        				<CheckboxGroup 
		        					label="Date In" 
									checked={hiddenCols['Date_In']}
									prop="Date_In"
									colDisplayChange={colDisplayChange}
		        					/>
		        			</div>
		        		</div>
		        		<div className="col">
		        			<div className="col-titile">
		        				Planned
		        			</div>
		        			<div className="list">
		        				<CheckboxGroup 
		        					label="Date Due" 
		        					checked={hiddenCols['Date_Due']}
		        					prop="Date_Due"
		        					colDisplayChange={colDisplayChange}
		        					/>
		        				<CheckboxGroup 
		        					label="Partial Due" 
		        					checked={hiddenCols['Partial_Due']}
		        					prop="Partial_Due"
		        					colDisplayChange={colDisplayChange}
		        					/>
		        				<CheckboxGroup 
		        					label="Days Available"
		        					checked={hiddenCols['Days_Available']}
		        					prop="Days_Available"
		        					colDisplayChange={colDisplayChange}
		        				 />
		        				<CheckboxGroup 
		        					label="Hrs. Planned"
									checked={hiddenCols['Hrs_planed']}
									prop="Hrs_planed"
									colDisplayChange={colDisplayChange}
		        					 />
		        			</div>
		        		</div>
		        		<div className="col">
		        			<div className="col-titile">
		        				Required
		        			</div>
		        			<div className="list">
		        				<CheckboxGroup 
		        					label="Required Days"
		        					checked={hiddenCols['Required_Days']}
		        					prop="Required_Days"
		        					colDisplayChange={colDisplayChange}
		        				 />
		        				<CheckboxGroup 
		        					label="Allocated Hours" 
									checked={hiddenCols['Allocated_Hours']}
									prop="Allocated_Hours"
									colDisplayChange={colDisplayChange}
		        					/>
		        			</div>
		        		</div>
		        	</div>
		        </DialogContent>
        	</Dialog>
		)
	}
}

export default TableSettingsDialog