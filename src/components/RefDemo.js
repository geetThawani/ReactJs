import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RefDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();//when we willopen form and focus at least one field i.e. need focus cursor 
        //console.log(this.inputRef);
    }

    clickhandler = () => {
        alert(this.inputRef.current.value);
    }
    render() {
        return (
            <div>
                <input type="text" ref = {this.inputRef}/>&nbsp;
                <button onClick = {this.clickhandler}>Click</button>
            </div>
        );
    }
}

export default RefDemo;