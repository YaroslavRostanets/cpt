import React, { Component } from 'react';

class CustomInput extends Component {

	constructor(props){
		super(props);
		this.state = {
			value: this.props.value
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		clearTimeout(this.timerId);
		const { filterOptions, data } = this.props;

		this.setState({
			value: e.currentTarget.value.replace(/[^.\d]+/g,'').replace( /^([^\.]*\.)|\./g, '$1' )
		}, ()=>{
			let sendObj = {
				"cost_centers": filterOptions.selected.map( item => String(item) ),
				"date": new Date(filterOptions.date).getTime() / 1000,
				"data": {
					"date": ( new Date(data.date).getTime() / 1000 ),
					"internal_task_id": data.internal_task_id,
					"is_weekly": data.is_weekly,
					"hours": ( Math.round(this.state.value * 100) / 100 )
				}
			}
			if (data.id) {
				sendObj.data.id = Number( data.id );
			}
			//console.log('savedData: ', sendObj);
			this.timerId = setTimeout(()=>{
				this.props.saveTableCellAction(sendObj, filterOptions.date);
			}, 2000);
		});
	}

	render(){

		const { value, row } = this.props;

		return (
			<input type="text" 
				defaultValue={ this.state.value }
				onChange={this.handleChange}
			/>
		)
	}

	componentWillReceiveProps(nextProps) {
/*		console.log("NEXT_PROPS", nextProps);
		this.setState({
			value: nextProps.value
		})*/
	}

/*	save(sendObj) {
		fetch("http://94.45.133.173:8000/planning-hours/edit/",{
			method: 'post',
			body : JSON.stringify(sendObj)
		})
       .then(res => res.json())
       .then((result) => {
          console.log(result);
        },
        (error) => {
          
        }
      )
	}*/

}

export default CustomInput