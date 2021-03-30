import React, { Component } from 'react';

const withCounter = (WrappedComponent,increamentNum )=> {//naming convection
    class WithCounter extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                count:0
            }
        }
    
        increamentCounter = () => {
            this.setState(prevState => {
                return {count:prevState.count + increamentNum}
            })
        }

        render (){
            const {count} = this.state
            return <WrappedComponent count = {count} increaCount = {this.increamentCounter} {...this.props}/>
        }
    }
    return WithCounter
}
export default withCounter