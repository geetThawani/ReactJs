import React, { Component } from 'react';
import withCounter from './WithCounter'

class HoverCounter extends Component {
    render() {
        const {count,increaCount} = this.props;
        return (
            <h2 onMouseOver = {increaCount} style = {{cursor:'pointer',backgroundColor : 'royalblue'}}>
                Counter {count}
            </h2>
        );
    }
}

export default withCounter(HoverCounter,5);