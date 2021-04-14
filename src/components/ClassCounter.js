import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }

    // increamentCounter = () =>{
    //     this.setState(prevState => {
    //         return {count:prevState.count + 1} 
    //     })
    // }
    
    increamentCounter = () =>{
        this.setState({ 
            count: this.state.count + 1 
        })
    }
    

    render() {
        const {count} = this.state
        return (
            <div>
                <button onClick = {this.increamentCounter}>Click {count}</button>
            </div>
        );
    }
}


export default ClassCounter;