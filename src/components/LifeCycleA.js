import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'Geet'
        }
        console.log('LifecycleA Constructor');
    }

    componentDidMount() {
        console.log('LifecycleA ComponentDidMount');
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate');
    }
    changeState = () =>{
        this.setState({
            name:'Codevolution'
        })
    }
    render() {
        console.log('LifecycleA Render');
        return (
            <>
            <div>
                LifeCycleA
            </div>
            <button onClick = {this.changeState}>Change State</button>
            <LifeCycleB/>
            </>
        );
    }
}

export default LifeCycleA;