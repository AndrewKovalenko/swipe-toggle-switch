'use strict';

import { render } from 'react-dom';
import React from 'react';
import SwipeToggleSwitch from './../build/swipe-toggle-switch.js';

class Example extends React.Component {
  constructor(){
    super();
    this.onSwitchToggle = this.onSwitchToggle.bind(this);

    this.state = {
      lightIsOn: true
    };
  }

  render(){
    return (
      <div className='room'>
        <section style={{ width: 200, float: 'left' }}>
          <SwipeToggleSwitch value={ this.state.lightIsOn } caption='Light' 
            offStateText='Off' onStateText='On' onToggle={this.onSwitchToggle}/>
        </section>

        <section style={{ paddingLeft: 20, overflow: 'hidden' }}>
          { this.state.lightIsOn ? <img style={{ width: 50, height:50 }} src='./images/bulb.png' alt='Bulb'/> : null }
        </section>
      </div>
    );
  }

  onSwitchToggle(event, value){
    this.setState({ lightIsOn: value });
  }
}

render(<Example />, document.getElementById('application'));
