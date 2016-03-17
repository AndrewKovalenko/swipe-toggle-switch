'use strict';

import React from 'react';
import Hammer from 'hammerjs';
import reactDOM from 'react-dom';

import './../less/swipe-toggle-switch.less';

const TWENTY_PERSENT = 0.2, LEFT_SWIPE = 2, RIGHT_SWIPE = 4;
let swipeDistanceToSwitch;

function toggleOnSwipe(event) {
  if(event.direction !== this.motionToIgnore() && event.distance > swipeDistanceToSwitch){
    this.setState({ value: !this.state.value });
  }
  event.srcEvent.stopPropagation();
}

function stopPropagation(event){
  event.srcEvent.stopPropagation();
}

export default class ToggleSwitch extends React.Component {
  constructor(){
    super();
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }

  componentWillMount() {
    this.setState({ value: this.props.value || false });
  }

  motionToIgnore() {
    return this.state.value ? LEFT_SWIPE : RIGHT_SWIPE;
  }

  componentDidMount() {
    let thisElement = reactDOM.findDOMNode(this);
    let switchLever = this.refs.lever;
    let leverHammer = new Hammer(switchLever);
    let switchHammer = new Hammer(thisElement);

    swipeDistanceToSwitch = (this.props.swipeDistanceToSwitch || TWENTY_PERSENT) * switchLever.offsetWidth;

    leverHammer.on('panleft', toggleOnSwipe.bind(this));
    leverHammer.on('panright', toggleOnSwipe.bind(this));

    switchHammer.on('panleft', stopPropagation.bind(this));
    switchHammer.on('panright', stopPropagation.bind(this));
  }

  render() {
    let uniqStepId = this.props.id || this.props.caption;
    return (
      <div className='toggle-switch-item'>
        <div className='switch'>
          <input type='checkbox' id={`switch-engine-${ uniqStepId }`}
            className='switch-core' readOnly checked={ this.state.value }/>
          <label htmlFor={`switch-engine-${ uniqStepId }`}  className='switch-item'>
            <div className='status unchecked'>
              <span className='status-text'>{ this.props.status }</span>
            </div>
            <div className='status checked'>
              <span className='status-text'>{ this.props.status }</span>
            </div>
            <div className='lever' ref='lever' onClick={ this.toggleSwitch }>
              <span className='lever-text'>{ this.props.caption }</span>
            </div>
          </label>
        </div>
      </div>
    );
  }

  toggleSwitch(event) {
    this.setState({ value: !this.state.value });
    event.preventDefault();
  }
}


