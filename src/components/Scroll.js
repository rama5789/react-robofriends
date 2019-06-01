import React from 'react';

const Scroll = (props) => {
    console.log('Scroll - PureFunction');
    // console.log(props);
    // return <h1>My Children</h1>;
    // return props.children;
    return (
        <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px' }}>
            {props.children}
        </div>
    );
}

export default Scroll;