import React, { Component } from 'react';

class CounterTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }

    increamentCounter = () => {
        this.setState(prevState => {
            return {count:prevState.count + 1}
        })
    }
    
    render() {
        return (
            <div>
                {this.props.children(this.state.count,this.increamentCounter)}
            </div>
        );
    }
}

export default CounterTwo;