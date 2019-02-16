import React, { Component } from 'react';

class CustomInput extends Component {

	constructor(props){
		super(props);
		this.state = {
			data: this.props.data
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		clearTimeout(this.timerId);
		const { filterOptions } = this.props;
		const value = e.currentTarget.value.replace(/[^.\d]+/g,'').replace( /^([^\.]*\.)|\./g, '$1' );

		this.setState({
			data: {...this.state.data, hours: Number( value )}
		}, () => {
			this.timerId = setTimeout(() => {
				let dataCopy = {...this.state.data};
					if (dataCopy.id === 0) {
						delete dataCopy.id
					}

				let saveCell = {
					'cost_centers': filterOptions.selected,
					'date': Math.round(new Date(filterOptions.date).getTime() / 1000),
					'data': dataCopy
				}

				this.props.saveTableCellAction(saveCell);

			}, 1000);

		});

	}

	render(){

		const { value, row } = this.props;

		return (
			<input type="text" 
				value={ this.state.data.hours ? this.state.data.hours : '' }
				onChange={this.handleChange}
			/>
		)
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			value: nextProps.value
		})
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