import React, { Component } from 'react';
import ComponentF from './ComponentF';
import { UserContext } from './UserContext';

class ComponentE extends Component {
    constructor(props) {
        super(props);

    }
    static contextType= UserContext
    render() {
       
        return (
            <div>
                Componet E {this.context}
                <ComponentF/>
            </div>
        );
    }
}


export default ComponentE;