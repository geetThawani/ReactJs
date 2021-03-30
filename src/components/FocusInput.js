import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class FocusInput extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }


    clickHandler = () => {
        this.componentRef.current.focusInput();
    }
    render() {
        return (
            <div>
                <Input ref = {this.componentRef}/>
                <button onClick = {this.clickHandler}>Focus Input</button>
            </div>
        );
    }
}

FocusInput.propTypes = {

};

export default FocusInput;