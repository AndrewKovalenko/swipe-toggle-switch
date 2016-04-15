# swipe-toggle-switch
This is small and simple toggle switch component for [reactjs](https://facebook.github.io/react/) framework.

*NOTE: this library is distributed ONLY as [commonjs](http://wiki.commonjs.org/wiki/Modules/1.1) module. It does not export component in global namespace and never will!*

![Turned on](/example/images/turned-on.png?raw=true)
![Turned off](/example/images/turned-off.png?raw=true)

### Install and use

`npm install swipe-toggle-switch`

than in your react component:

```
import SwipeToggleSwitch from './../build/swipe-toggle-switch.js';
```
and in the render method of your component
```
  <SwipeToggleSwitch value={ this.state.lightIsOn } caption='Light' 
    offStateText='Off' onStateText='On' onToggle={this.onSwitchToggle}/>
```

#### Properties
* *value* - initial value (Boolean) 
* *caption* - text on a switch lever (String)
* *offStateText* - text do display when **state** is **off** (String)
* *onStateText* - text do display when **state** is **on** (String)

#### Methods
* *onToggle* - handler to be called every time, user toggle a switch. It has 2 parameters: **event** and **newValue**
 
### Run example
*NOTE:* To run an example localy you need to have a [webpack](https://webpack.github.io/).

1. `git clone https://github.com/AndrewKovalenko/swipe-toggle-switch.git`
2. `cd swipe-toggle-switch`
3. `npm i`
4. `webpack`
5. `webpack --config ./build.example.js`
6. Open `./example/index.html` in your browser


