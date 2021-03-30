import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EventBind extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message:'Hello'
        }

        //this.clickHandler = this.clickHandler.bind(this);//3rd Approach maily used this way for event bind
    }

   
    // clickHandler(){
    //     this.setState({
    //         message:'Good bye...'
    //     })
    //     console.log('Good bye...');
    // } //We need to use this fn for 1st and second approach

    clickHandler = () => {
        this.setState({
            message:'Good bye...'
        })
        console.log('Good bye...');
    } //Used this fn for 4th approach
    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                {/* <button onClick = {this.clickHandler.bind(this)}>Click</button> */}{/* 1st Approach */}
                {/* <button onClick = {() =>  this.clickHandler()}>Click</button> */}{/* 2nd Approach */}
                {/* <button onClick = {this.clickHandler}>Click</button> */}{/* 3rd Approach */}
                <button onClick = {this.clickHandler}>Click</button>{/* th Approach */}
            </div>
        );
    }
}

export default EventBind;