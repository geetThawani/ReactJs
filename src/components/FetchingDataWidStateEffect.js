import React,{useState,useEffect} from 'react';
import axios from 'axios'

function FetchingDataWidStateEffect(props) {
    const [loading,setLoading] = useState(true)
    const [posts,setPosts] = useState({})
    const [error,setError] = useState('')

    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setLoading(false)
            setPosts(response.data)
            setError('')
        })
        .catch(error => {
            setLoading(false)
            setPosts({})
            setError('Something went wrong !')
        })
    })

    return (
        
        <div>
            {loading ? 'Loading...' : posts.title}
            {error ? error : null}
        </div>
    );
}

export default FetchingDataWidStateEffect;