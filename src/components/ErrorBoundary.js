import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        console.log('ErrorBoundary - constructor');
        super(props);
        this.state = {
            hasError: false
        };
    }

    // catch Errors
    componentDidCatch(error, info) {
        console.log('ErrorBoundary - componentDidCatch');
        // console.log(error);
        // console.log(info);
        this.setState({ hasError: true });
    }

    render() {
        console.log('ErrorBoundary - render');
        if (this.state.hasError) {
            return <h1>OOPs! Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;