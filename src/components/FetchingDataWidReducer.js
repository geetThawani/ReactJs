import React,{useEffect,useReducer} from 'react';
import axios from 'axios'

const initialState = {
    loading:true,
    posts:{},
    error:''
}

const reducer = (state,action) => {
    switch(action.type){
        case 'FETCH_SUCESS' :
            return {
                loading:false,
                posts:action.payload,
                error:''
            }
        case 'FETCH_ERROR' :
            return {
                loading:false,
                posts:{},
                error:'Something went wrong !'
            }
        default :
        return state
    }
    
}

function FetchingDataWidReducer(props) {
    const [state,dispatch] = useReducer(reducer,initialState)
    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
             console.log(response.data.title);
            dispatch({type:'FETCH_SUCESS',payload:response.data})
        })
        .catch(error => {
            dispatch({type:'FETCH_ERROR'})
        })
    },[])
    return (
        <div>
            {state.loading ? 'Loading...': state.posts.title}
            {state.error ? state.error : null}
        </div>
    );
}

export default FetchingDataWidReducer;