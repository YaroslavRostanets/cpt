import React, {Component} from 'react';

import { IconButton, ButtonBase, CircularProgress } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


class Timeline extends Component {

	constructor(props) {
		super(props);

		this.state = {
			timeline: this.props.timeline
		}

	}

	handlerAddField() {
		const { timeline } = this.state;
		const last = timeline[timeline.length - 1];
		//console.log('last: ', timeline);
		if( timeline.length ){
			this.setState({
				timeline: [...this.state.timeline, 
					{	hours_start: last.hours_end === '' ? '' : last.hours_end + 1, 
						hours_end: '', 
						days_value: ''}]
			});
		} else {
			this.setState({
				timeline: [...this.state.timeline, 
					{	hours_start: 1, 
						hours_end: 2, 
						days_value: 1}]
			});
		}
		
	}

	handlerSave() {
		let savedTimeline = this.state.timeline.filter(
			(item)=>{ return item.hours_start && item.hours_end && item.days_value});
		let data = {
			'data': savedTimeline
		}
		this.props.setTimeline(data);
	}

	handlerChange (index, fieldName, event) {
		console.log('index: ', index);
		console.log('fieldName: ', fieldName);
		console.log('timeline: ', this.state.timeline);
		const value = event.target.value.replace(/\D/,'');
		const newTimeline = [...this.state.timeline];
			newTimeline[index][fieldName] = Number(value);
			if(newTimeline[index+1] && fieldName === 'hours_end'){
				newTimeline[index+1]['hours_start'] = Number(value) + 1;
			}

		this.setState({
			timeline: newTimeline
		})
	}

	handlerRemove (index) {
		console.log('index_remove: ', index);
		if (this.state.timeline[index].id) {
			this.props.removeTimeline({'timeline_id': this.state.timeline[index].id});
		} else {
			let timelineCopy = [...this.state.timeline];
				timelineCopy.splice(index, 1);
			this.setState({
				timeline: timelineCopy
			});
		}
	}

	render () {

		const { timeline } = this.state;
		const { timelineFetching, 
				timelineBtnFetching } = this.props;

		return(
			<div className="required-days std-block">
				<div className="title">
					Required  Days
				</div>
				{ timelineFetching ? <CircularProgress  className="loader" size={40} /> : 

				<div>
					<table>
						<tbody>
							<tr>
								<th>Hrs.</th>
								<th></th>
								<th>Days</th>
								<th></th>
							</tr>
							{ timeline.map((item, index)=>{
								return (
									<tr key={index}>
										<td>
											<input type="text" disabled
												onChange={this.handlerChange.bind(this, index, 'hours_start')}
												value={item.hours_start} />
										</td>
										<td>
											<input type="text"
												onChange={this.handlerChange.bind(this, index, 'hours_end')}
												value={item.hours_end} />
										</td>
										<td>
											<input type="text" 
												onChange={this.handlerChange.bind(this, index, 'days_value')}
												value={item.days_value} />
										</td>
										<td>
											<IconButton onClick={this.handlerRemove.bind(this, index)} 
												className="remove">
												<CloseIcon />
											</IconButton>
										</td>
									</tr>
								)
							}) }
						</tbody>
					</table>
					<div className="btns-wrap">
						<ButtonBase 
							onClick={this.handlerSave.bind(this)} 
							className={timelineBtnFetching ? "btn primary-btn fetching" : "btn primary-btn" }>
							{timelineBtnFetching ? <CircularProgress className="loader" size={20} /> : null}
							Save
						</ButtonBase>
						<ButtonBase 
							onClick={this.handlerAddField.bind(this)} 
							className="btn outlined-primary-btn">
	        				Add fields
	      				</ButtonBase>
					</div>
				</div>
				}
			</div>
		)
	}

	componentDidMount() {
		this.props.getTimeline();
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			timeline: nextProps.timeline
		})
	}

}


export default Timeline