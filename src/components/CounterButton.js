import React, { Component } from 'react';

class CounterButton extends Component {
    constructor() {
        console.log('CounterButton - constructor');
        super();
        this.state = {
            count: 0
        }
    }

    // Use this function with Caution. Overuse may cause Performance Penalty.
    shouldComponentUpdate(nextProps, nextState) {
        console.log('CounterButton - shouldComponentUpdate');
        // console.log(nextProps, nextState);
        if (this.state.count !== nextState.count) { // conditional restrict the Component from getting updated/rendered
            return true;
        }
        return false;
    }

    incrementCount = () => {
        console.log('CounterButton - incrementCount');
        // this.setState({ count: this.state.count + 1 });  // sync state update
        this.setState(state => {                            // async state update
            return { count: state.count + 1 };
        });
    }

    decrementCount = () => {
        console.log('CounterButton - decrementCount');
        this.setState(state => {
            if (state.count === 0) {
                return { count: 0 };
            }
            return { count: state.count - 1 };
        });
    }

    render() {
        console.log('CounterButton - render');
        return (
            <div>
                <button style={{ color: this.props.btnGreen }} onClick={this.incrementCount}>
                    Count++
                </button>
                <button style={{ color: this.props.btnRed }} onClick={this.decrementCount}>
                    Count--
                </button>
                <button>{this.state.count}</button>
            </div>
        );
    }
}

export default CounterButton;