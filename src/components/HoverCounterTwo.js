import React, { Component } from 'react';

class HoverCounterTwo extends Component {
    render() {
        const {count,increamentCounter} = this.props;
        return (
            <div>
                <h1 onMouseOver= {increamentCounter}>Click {count} Count </h1>
            </div>
        );
    }
}

export default HoverCounterTwo;