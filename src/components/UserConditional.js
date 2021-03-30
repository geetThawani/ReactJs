import React, { Component } from 'react';

class UserConditional extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedIn : true
        }
    }
    render() {

        // ******************Below is first approach but not considerable***********************
        // if(this.state.isLoggedIn === true)
        //     return <div>Welcome Geet !</div>
        //  else
        //     return <div>Welcome Guest !</div> //This is worst approach

        // ******************Below is second approach but not considerable***********************
        // let message;
        // if(this.state.isLoggedIn)
        //     message = <div>Welcome Geet !</div>
        // else
        // message = <div>Welcome Guest !</div>

        // return <div>{message}</div>

        // ******************Below is Third approach and its considerable using ternary operator***********************
        
        // return this.state.isLoggedIn ? (
        //     <div>Welcome Geet !</div>
        // ) : (
        //     <div> Welcome Guest !</div>
        // )

        // ******************Below is Forth approach and its considerable using shortest method***********************

         return  this.state.isLoggedIn && <div>Welcom Geet ! </div> || <div> Welcome Guest !</div>//We don't need to add Or operator if you dn't need to add anything in else condition
    }
}

export default UserConditional;