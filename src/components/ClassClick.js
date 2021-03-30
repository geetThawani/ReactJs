import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassClick extends Component {
    constructor(props) {
        super(props);

    }

    ClickHandler(){
        console.log('clicked on class button !');
    }
    render() {
        return (
            <div>
                <button onClick = {this.ClickHandler} >Click Button</button>
            </div>
        );
    }
}

export default ClassClick;