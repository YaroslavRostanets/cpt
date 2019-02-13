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
		const { filterOptions, data } = this.props;
		//console.log('value: ', e.currentTarget.value.replace(/[^.\d]+/g,''));
		console.log('DATA:___', data);
		this.setState({
			value: e.currentTarget.value.replace(/[^.\d]+/g,'').replace( /^([^\.]*\.)|\./g, '$1' )
		}, ()=>{
			console.log(filterOptions);
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
			console.log(sendObj);
			this.timerId = setTimeout(()=>{
				console.log('___SAVED___');
				this.save(sendObj);
			}, 5000);
		});
	}

	render(){

		const { value } = this.props; 

		return (
			<input type="text" 
				pattern="[0-9]*" 
				value={ this.state.value }
				onChange={this.handleChange}
			/>
		)
	}

	save(sendObj) {
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
	}
}

export default CustomInput