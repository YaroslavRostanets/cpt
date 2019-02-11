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
		const { open, closeDialog } = this.props;

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
		        					checked={true}
		        					 />
		        				<CheckboxGroup 
		        					label="Job#"
		        					checked={true}
		        					 />
		        				<CheckboxGroup label="Description" />
		        				<CheckboxGroup 
		        					label="Date In" 
									checked={true}
		        					/>
		        			</div>
		        		</div>
		        		<div className="col">
		        			<div className="col-titile">
		        				Planned
		        			</div>
		        			<div className="list">
		        				<CheckboxGroup label="Date Due" />
		        				<CheckboxGroup label="Partial Due" />
		        				<CheckboxGroup label="Days Available" />
		        				<CheckboxGroup label="Hrs. Planned" />
		        			</div>
		        		</div>
		        		<div className="col">
		        			<div className="col-titile">
		        				Required
		        			</div>
		        			<div className="list">
		        				<CheckboxGroup label="Date Due" />
		        				<CheckboxGroup label="Partial Due" />
		        			</div>
		        		</div>
		        	</div>
		        </DialogContent>
        	</Dialog>
		)
	}
}

export default TableSettingsDialog