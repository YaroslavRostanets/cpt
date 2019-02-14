import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonBase, IconButton, Button, Input, MenuItem } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Timeline from './Timeline';
import Capacity from './Capacity';
import './styles.scss';
import Select from '@material-ui/core/Select';
import { getTimeline, 
		 setTimeline, 
		 removeTimeline,
		 getCapacity } from '../../actions/settingsActions';

class Settings extends Component {
	constructor(props) {
		super(props);

	}

	render() {

		const { getTimelineAction, 
				setTimelineAction, 
				removeTimelineAction, 
				getCapacityAction } = this.props;
		const { timeline, 
				timelineFetching, 
				timelineBtnFetching,
				capacity
				 } = this.props;

		return (
			<div id="settings-ctrl">
				<div className="flex">
					<Timeline 
						timeline={timeline}
						timelineFetching={timelineFetching}
						timelineBtnFetching={timelineBtnFetching}
						getTimeline={getTimelineAction} 
						setTimeline={setTimelineAction}
						removeTimeline={removeTimelineAction}
						/>
					<Capacity 
						capacity={capacity} 
						getCapacity={getCapacityAction} />
						</div>
					</div>
		)
	}
}

const mapStateToProps = store => {
  return {
    timeline: store.settings.timeline,
    timelineFetching: store.settings.timelineFetching,
    timelineBtnFetching: store.settings.timelineBtnFetching,
    capacity: store.settings.capacity
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTimelineAction: () => dispatch(getTimeline()),
    setTimelineAction: (timeline, stateTimeline) => dispatch(setTimeline(timeline, stateTimeline)),
    removeTimelineAction: id => dispatch(removeTimeline(id)) ,
    getCapacityAction: () => dispatch(getCapacity()) 
  }
}

export default connect(mapStateToProps,  mapDispatchToProps)(Settings)