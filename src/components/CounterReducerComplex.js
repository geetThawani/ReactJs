import React,{useReducer} from 'react';

const initialState = {
    firstCounter:0,
    secondCounter:10
};//Add object insteed of numeric
//As we hv 2 diff propertyin state obect so we ned to mergeit for expected output so we cn use spread operator for this like ...state as below
const reducer = (state,action) => {
    switch(action.type){
        case 'increament' : 
            return {...state,firstCounter:state.firstCounter + action.value}
        case 'decreament' : 
            return {...state,firstCounter:state.firstCounter - action.value}
        case 'increament2' : 
            return {...state,secondCounter:state.secondCounter + action.value}
        case 'decreament2' : 
            return {...state,secondCounter:state.secondCounter - action.value}
        case 'reset' : 
            return initialState
        default :
            return state
    }
}

function CounterReducerComplex(props) {
   const[count,dispatch] =  useReducer(reducer,initialState)//pass two parameter first is action and second we need to initialize number value
   //as per abv using desctructing we hv store state vallue in count variable and action fn in dispatch variable  
   return (
        <div>
            <h3>Count 1: {count.firstCounter}</h3>
            <h3>Count 2 : {count.secondCounter}</h3>
            <button onClick = {() => dispatch({type:'increament',value:1})}>Increament</button>&nbsp;
            <button onClick = {() => dispatch({type:'decreament',value:1})}>Decreament</button>&nbsp;
            <button onClick = {() => dispatch({type:'increament',value:5})}>IncreamentBy5</button>&nbsp;
            <button onClick = {() => dispatch({type:'decreament',value:5})}>DecreamentBy5</button>&nbsp;
            <button onClick = {() => dispatch({type:'increament2',value:2})}>IncreamentSec2</button>&nbsp;
            <button onClick = {() => dispatch({type:'decreament2',value:2})}>DecreamentSec2</button>&nbsp;
            <button onClick = {() => dispatch({type:'reset'})}>Reset</button>
        </div>
    );
}

export default CounterReducerComplex;