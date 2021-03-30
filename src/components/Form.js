import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:'',
            comment:'',
            topic:''
        }

    }
    handleUsername = event =>{
        this.setState({
            username:event.target.value
        })
    }
    handleComment = event =>{
        this.setState({
            comment:event.target.value
        })
    }
    handleTopic = event => {
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
        event.preventDefault();
    }
    render() {
        return (
           <form onSubmit = {this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value = {this.state.username} onChange = {this.handleUsername}/>
                </div>
                <br/>
                <div>
                    <label>Comment:</label>
                    <textarea value = {this.state.comment} onChange = {this.handleComment}/>
                </div>
                <br/>
                <div>
                    <label>Topic:</label>
                    <select value = {this.state.topic} onChange = {this.handleTopic}>
                        <option value = "react">React</option>
                        <option value = "angular">Angular</option>
                        <option value = "typescript">Typescript</option>
                    </select>
                </div>
                <br/>
                <button type = "submit">Submit</button>
            </form>
        );
    }
}


export default Form;