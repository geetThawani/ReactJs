import React, { Component } from 'react';

class ClickCounterTwo extends Component {
    
    render() {
        const {count,increamentCounter} = this.props;
        return (
            <div>
                <button onClick = {increamentCounter}>Click {count} Count </button>
            </div>
        );
    }
}

export default ClickCounterTwo;