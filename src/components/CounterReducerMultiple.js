import React,{useReducer} from 'react';

const initialState = 0;//abv comp define both parameters values
const reducer = (state,action) => {//reducer fn aways return one value adn we need to pass 2 paramater first is current state adn second is action
    switch(action.type){
        case 'increament' : 
            return state + action.value
        case 'decreament' : 
            return state - action.value
        case 'reset' : 
            return initialState
        default :
            return state
    }
}

function CounterReducerMultiple(props) {
   const[count,dispatch] =  useReducer(reducer,initialState)
   const[countTwo,dispatchTwo] =  useReducer(reducer,initialState)//Use numitiple useReducer rather than use object adn initiliazetwoparameterin it and merge state using spread fn so try to use multiple reduce than single n complex

   return (
        <div>
            <h3>Count : {count}</h3>
            <h3>Count Two: {countTwo}</h3>
            <button onClick = {() => dispatch({type:'increament',value:1})}>Increament</button>&nbsp;
            <button onClick = {() => dispatch({type:'decreament',value:1})}>Decreament</button>&nbsp;
            <button onClick = {() => dispatchTwo({type:'increament',value:2})}>IncreamentTwo</button>&nbsp;
            <button onClick = {() => dispatchTwo({type:'decreament',value:2})}>DecreamentTwo</button>&nbsp;
            <button onClick = {() => dispatch({type:'reset'})}>Reset</button>&nbsp;
            <button onClick = {() => dispatchTwo({type:'reset'})}>ResetTwo</button>
        </div>
    );
}

export default CounterReducerMultiple;