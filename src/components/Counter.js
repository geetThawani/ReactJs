import React, { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0,
            counterVal:0
        }
    }
    increament(){
        //this.state.count = this.state.count + 1;
        this.setState({
            count : this.state.count + 1
        },
        () => {
            console.log('callback function...',this.state.count);//calling callback fn to get exact value
        }
        )
        console.log(this.state.count);//this will start frm 0
       
    }
    increamentNext(){
        this.setState((prevState,props)  => ({
            counterVal : prevState.counterVal + 1
        }))
        console.log(this.state.counterVal);
    }
    increamentFive(){
        this.increamentNext();
        this.increamentNext();
        this.increamentNext();
        this.increamentNext();
        this.increamentNext();
    }
    render(){
        return (
            <>
                <h1>Count - {this.state.count}</h1>
                <button onClick = {() => this.increament()}>Increament</button>&nbsp;
                <h1>Count Next - {this.state.counterVal}</h1>
                <button onClick = {() => this.increamentFive()}>IncreamentNext</button>
            </>
        )
        
    }
}
export default Counter;