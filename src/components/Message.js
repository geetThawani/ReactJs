import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state ={
            message:'WelcomeSubciber !'
        }
    }
    changeMsg(){
        this.setState({
            message:'Thank you for subscribe'
        })
    }
    render(){
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.changeMsg()}>Subscribe</button>
            </>
        )
        
    }
}
export default Message;