import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parentName : 'Parent'
        }
        this.greetParent = this.greetParent.bind(this);

    }
    greetParent(childName){
      alert(`hello ${this.state.parentName} from ${childName}`);//backticks and dollar curly brackets feature in ES6
    }
    render() {
        return (
            <div>
                <ChildComponent greethandler =  {this.greetParent}/>
            </div>
        );
    }
}

export default ParentComponent;