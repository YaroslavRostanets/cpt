import React, { Component } from 'react';
import { ButtonBase, Dialog, DialogTitle, DialogContent, 
	Typography, DialogActions, Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';
import './styles.scss';

class TableControll extends Component {

	constructor(props) {
		super(props);
		this.state = {
      		startDate: new Date(),
      		openDialog: false
    	};
    	this.handleChange = this.handleChange.bind(this);
	}

	handleChange(date) {
		this.setState({
		     startDate: date
		});
  	}




	render() {

		const sortTypes = [
			{ value: '1', label: 'ABC123' },
			{ value: '2', label: 'CBA321' },
			{ value: '3', label: 'CBA123' },
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
							selected={this.state.startDate}
        					onChange={this.handleChange}
						/>
						<ButtonBase className="calendar">
							<FontAwesomeIcon icon={["far", "calendar"]} />
						</ButtonBase>
					</div>
					{/*<Select
					    defaultValue={[sortTypes[2]]}
					    isMulti
					    name="colors"
					    options={sortTypes}
					    className="basic-multi-select"
					    classNamePrefix="select"
  					/>*/}
				</div>
				<div className="right-part">
					<ButtonBase className="btn btn-default">
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
		          onClose={this.handleClose}
		          aria-labelledby="customized-dialog-title"
		          open={this.state.openDialog}
        		>
		          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
		          	<div className="title">
		          		Table settings
		          	</div>
		          	<IconButton aria-label="Close">
          				<CloseIcon />
        			</IconButton>
		          </DialogTitle>
		          <DialogContent>
		            
		          </DialogContent>
        		</Dialog>
			</div>
		)
	}


}

export default TableControll