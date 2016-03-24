'use strict';

import { render } from 'react-dom';
import React from 'react';
import SwipeToggleSwitch from './../build/swipe-toggle-switch.js';

class Example extends React.Component {
  render(){
    return (
      <section>
        <SwipeToggleSwitch caption='Example 1' status='checked' />
      </section>
    );

  }
}

render(<Example />, document.getElementById('application'));
