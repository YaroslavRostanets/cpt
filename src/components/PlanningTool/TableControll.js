import React, { Component } from 'react';
import { ButtonBase, Dialog, DialogTitle, DialogContent, 
	Typography, DialogActions, Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import enGB from 'date-fns/locale/en-GB';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';
import CheckboxGroup from '../ui/CheckboxGroup';
import MultiSelect from '@khanacademy/react-multi-select';

import './styles.scss';

registerLocale('en-GB', enGB);

class TableControll extends Component {

	constructor(props) {
		super(props);
		this.state = {
      		startDate: new Date(),
      		openDialog: false,
      		selected: []
    	};
    	this.handleChange = this.handleChange.bind(this);
    	this.handleDialogOpen = this.handleDialogOpen.bind(this);
    	this.handleDialogClose = this.handleDialogClose.bind(this);
	}

	handleChange(date) {
		this.setState({
		    startDate: date
		});
  	}

	handleDialogOpen() {
		this.setState({
	    	openDialog: true
	    });
	};

	handleDialogClose() {
		this.setState({
	    	openDialog: false
	    });
	};


	render() {

		const sortTypes = [
			{label: "ABC123", value: 1},
    		{label: "CBA321", value: 2},
    		{label: "TATA2323", value: 3},
		]

		return(
			<div className="top">
				<div className="left-part">
					<div className="updated">
						Updated Last: 
						<b>25/08/2018 by John Smith</b>
					</div>
					<div className="date-picker-wrap">
						<DatePicker
							locale="en-GB"
							selected={this.state.startDate}
        					onChange={this.handleChange}
        					dateFormat="dd/MM/YY"
        					ref={(r) => {
    							this.component = r;
  							}}
						/>
						<ButtonBase className="calendar" 
							onClick={() => this.component.setOpen(true)}>
							<i className="fa fa-calendar" aria-hidden="true"></i>
						</ButtonBase>
					</div>
					<MultiSelect
		                options={sortTypes}
		                selected={this.state.selected}
		                onSelectedChanged={(selected) => {
		                	console.log(selected);
		                	this.setState({selected: selected})
		                } }
            		/>
				</div>
				<div className="right-part">
					<ButtonBase onClick={this.handleDialogOpen} className="btn btn-default">
						<i className="fa fa-table" aria-hidden="true"></i>
							Table settings
					</ButtonBase>
					<ButtonBase className="download">
						<i className="fa fa-download" aria-hidden="true"></i>
					</ButtonBase>
					<ButtonBase className="print">
						<i className="fa fa-print" aria-hidden="true"></i>
					</ButtonBase>
				</div>
				<Dialog
					id="table-settings-dialog"
		          	onClose={this.handleDialogClose}
		          	aria-labelledby="customized-dialog-title"
		          	open={this.state.openDialog}
        		>
		          <DialogTitle className="title-wrap">
		          	<div className="title">
		          		Table settings
		          	</div>
		          	<IconButton onClick={this.handleDialogClose} aria-label="Close">
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
			</div>
		)
	}


}

export default TableControll