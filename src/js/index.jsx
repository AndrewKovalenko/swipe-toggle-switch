'use strict';

import React from 'react';
import Hammer from 'hammerjs';
import reactDOM from 'react-dom';

import './../less/swipe-toggle-switch.less';

const TWENTY_PERSENT = 0.2, LEFT_SWIPE = 2, RIGHT_SWIPE = 4;

function toggleOnSwipe(event) {
  if(event.direction !== this.motionToIgnore() && event.distance > this.props.swipeDistanceToSwitch){
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
    const thisElement = reactDOM.findDOMNode(this);
    const switchLever = this.refs.lever;
    const leverHammer = new Hammer(switchLever);
    const switchHammer = new Hammer(thisElement);

    this.props.swipeDistanceToSwitch = (this.props.swipeDistanceToSwitch || TWENTY_PERSENT) * switchLever.offsetWidth;

    leverHammer.on('panleft', toggleOnSwipe.bind(this));
    leverHammer.on('panright', toggleOnSwipe.bind(this));

    switchHammer.on('panleft', stopPropagation.bind(this));
    switchHammer.on('panright', stopPropagation.bind(this));
  }

  toggleSwitch(event) {
    const newValue = !this.state.value;
    this.setState({ value: newValue });
    this.props.onToggle && typeof this.props.onToggle === 'function' && this.props.onToggle({
      target: this
    }, newValue);

    event.preventDefault();
  }

  render() {
    const uniqStepId = this.props.id || this.props.caption;

    return (
      <div className='toggle-switch-item'>
        <div className='switch'>
          <input type='checkbox' id={`switch-engine-${ uniqStepId }`}
            className='switch-core' readOnly checked={ this.state.value }/>
          <label htmlFor={`switch-engine-${ uniqStepId }`}  className='switch-item'>
            <div className='status unchecked'>
              <span className='status-text'>{ this.props.offStateText }</span>
            </div>
            <div className='status checked'>
              <span className='status-text'>{ this.props.onStateText }</span>
            </div>
            <div className='lever' ref='lever' onClick={ this.toggleSwitch }>
              <span className='lever-text'>{ this.props.caption }</span>
            </div>
          </label>
        </div>
      </div>
    );
  }
}

