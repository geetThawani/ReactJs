import React, { Component } from "react";

// class ClasComp extends Component{
//     render(){
//         return <h1>Class Compnent {this.props.name} ***** {this.props.emailId}!</h1>;
//     }
// }

//Destructuring our code using props and state

class ClasComp extends Component{
    render(){
        const {name,emailId} = this.props
        // const {state1,state2} = this.state
        return <h1>Class Compnent {name} ***** {emailId}!</h1>;
    }
}

export default ClasComp;