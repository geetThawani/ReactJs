import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassMouse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x:0,
            y:0
        }
    }

   
    logMousePos = (e) => {
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }
    componentDidMount() {
        console.log('log position...');
        window.addEventListener('mousemove',this.logMousePos)
    }
    componentWillUnmount(){
        window.removeEventListener('mousemove',this.logMousePos)
    }

    render() {
        const{x,y} = this.state
        return (
            <div>
                Class x : {x} Y : {y}
            </div>
        );
    }
}

ClassMouse.propTypes = {

};

export default ClassMouse;