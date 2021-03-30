import React, { Component } from 'react';
import axios from 'axios'

class GetMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[],
            errormsg:''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data);
            this.setState({
                posts:response.data
            })
        })
        .catch(error => {
            console.log(error);
            this.setState({
                errormsg:'Error retrieving data'
            })
        })
    }
    render() {
        const {posts,error} = this.state
        return (
            <>
                <div>
                   <h2> List of Posts</h2><hr/>
                    <ol>
                    {posts.length ?
                        posts.map(post => <li style = {{textAlign:'left'}} key = {post.id}>{post.title}</li>)
                    : null}
                    </ol>
                </div>
                {error ? <div>{error}</div> : null}
            </>
        );
    }
}

export default GetMethod;