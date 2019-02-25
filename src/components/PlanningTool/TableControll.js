import React, { Component } from 'react';
import { API } from '../../constants';
import TableSettingsDialog from './TableSettingsDialog';
import { ButtonBase } from '@material-ui/core';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import enGB from 'date-fns/locale/en-GB';
import MultiSelect from '@khanacademy/react-multi-select';
import { tableToExcel, printTable, excelExport } from '../../functions';

registerLocale('en-GB', enGB);

class TableControll extends Component {

	constructor(props) {
		super(props);
		this.state = {
      		date: new Date(),
      		openDialog: false,
      		selected: [],
      		coastCenters: []
    	};
    	this.handleDateChange = this.handleDateChange.bind(this);
    	this.handleCoastCentersChange = this.handleCoastCentersChange.bind(this);

    	this.handleDialogOpen = this.handleDialogOpen.bind(this);
    	this.handleDialogClose = this.handleDialogClose.bind(this);
    	this.handlePrint = this.handlePrint.bind(this);
    	this.handleExel = this.handleExel.bind(this);
	}

	handleDateChange(date) {
		console.log('dateC: ', date.setHours(0,0,0,0));
		const { timeline } = this.props;
		this.setState({
		    date: date
		}, ()=>{
			if(this.state.selected.length){
				let { date, selected } = this.state;
				this.props.getPlanningHoursAction(date, selected, timeline);
			}
		});
  	}

  	handleCoastCentersChange(selected) {
  		const { timeline } = this.props;
  		this.setState({selected: selected},()=>{
  			if(this.state.selected.length) {
				let { date, selected } = this.state;
  				this.props.getPlanningHoursAction(date, selected, timeline);
  			}
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

	handlePrint() {
		if (!this.props.tableRows.length) return false;
		printTable();
	}

	handleExel() {
		if (!this.props.tableRows.length) return false;
		//tableToExcel('#print-container .printable-table','Capacity Planning Tool', 'cpt.xls');
		excelExport();
	}

	getCoastCenters(resolve) {
		fetch(API.COST_CENTERS, {
			method: 'get',
			credentials: 'include'
		})
      .then(response => response.json())
      .then(data => {
      	const multiSelectOptions = data.result.map(option => {
      		option.value = Number(option['cost_center_id']);
      		return option;
      	})
      	resolve({
      		coastCenters: multiSelectOptions
      	})
      })
      .catch(error => console.error(error));

	}

	render() {

		const { openDialog, coastCenters } = this.state;
		const { hiddenCols } = this.props;
		const { colDisplayChange } = this.props;

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
							selected={this.state.date}
        					onChange={this.handleDateChange}
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
		                options={coastCenters}
		                selected={this.state.selected}
		                onSelectedChanged={this.handleCoastCentersChange}
            		/>
				</div>
				<div className="right-part">
					<ButtonBase onClick={this.handleDialogOpen} className="btn btn-default">
						<i className="fa fa-table" aria-hidden="true"></i>
							Table settings
					</ButtonBase>
					<ButtonBase 
						onClick={this.handleExel} 
						className="download">
						<i className="fa fa-download" aria-hidden="true"></i>
					</ButtonBase>
					<ButtonBase onClick={this.handlePrint} className="print">
						<i className="fa fa-print" aria-hidden="true"></i>
					</ButtonBase>
				</div>
				<TableSettingsDialog 
					open={openDialog} 
					closeDialog={this.handleDialogClose} 
					hiddenCols={hiddenCols}
					colDisplayChange={colDisplayChange}
					/>
			</div>
		)
	}

	componentDidMount() {
		this.getCoastCenters(this.setState.bind(this));
	}


}

export default TableControll