import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClickCounterOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            name:''
        }

    }

    componentDidMount() {
        document.title = `Clicked count ${this.state.count}`;
    }

    componentDidUpdate(prevProps,prevState) {
        //alert(prevState.count +'___'+this.state.count);
        if(prevState.count !== this.state.count)
            console.log('update count numer...');
        document.title = `Clicked count ${this.state.count}`;
    }

  

    render() {
        const {count,name} = this.state
        return (
            <div>
                <input type = 'text' value = {name} onChange = {(e) => this.setState({name:e.target.value})}/>
                <button onClick = {() => this.setState({count:this.state.count + 1})}>Click Count {count}</button>
            </div>
        );
    }
}

export default ClickCounterOne;