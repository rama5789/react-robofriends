import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {

    // Use this function with Caution. Overuse may cause Performance Penalty.
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Header - shouldComponentUpdate');
        // return true;    // update/render the component (true by Default)
        return false;   // restrict the Component from getting updated/rendered
    }

    render() {
        console.log('Header - render');
        return (
            <div>
                <h1 className='f1'>RoboFriend</h1>
                <CounterButton btnRed={'red'} btnGreen={'green'} />
            </div>
        );
    }
}

export default Header;