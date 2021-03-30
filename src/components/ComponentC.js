import React, { Component } from 'react';
import ComponentE from './ComponentE';

class ComponentC extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <ComponentE/>
        );
    }
}

ComponentC.propTypes = {

};

export default ComponentC;