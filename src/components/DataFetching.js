import React,{useState,useEffect} from 'react';
import axios from 'axios'
function DataFetching(props) {
    // const [posts,setPosts] = useState([])
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idFromBtnClk,setIdFromBtnClk] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClk}`)
        .then(res => {
            console.log(res);
            // setPosts(res.data)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    },[idFromBtnClk])//pass blank paramaeter so it will call only once a time or else pass dependency parameter like id
    return (
        <div>
            {/* <ul>
                {
                    posts.map(post => <li key = {post.id}>{post.title}</li>)
                }
            </ul> */}
            <input type = 'text' value = {id} onChange = {(e) => setId(e.target.value)} />
            <button onClick  = {() => setIdFromBtnClk(id)}>Fetch post</button>
            <h3>{post.title}</h3>
        </div>
    );
}

export default DataFetching;