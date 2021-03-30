import React, { Component } from 'react';
import withCounter from './WithCounter'

class ClickCounter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count:0
    //     }
    // }

    // increamentCounter = () => {
    //     this.setState(prevState => {
    //         return {count:prevState.count + 1}
    //     })
    // }
    
    render() {
        //const {count} = this.state;
        const {count,increaCount} = this.props;
        return (
            <div>
                <button onClick = {increaCount}>{this.props.name}  Click Count {count}</button>
            </div>
        );
    }
}

export default withCounter(ClickCounter,10);