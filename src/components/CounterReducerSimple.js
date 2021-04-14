import React,{useReducer} from 'react';

const initialState = 0;//abv comp define both parameters values
const reducer = (state,action) => {//reducer fn aways return one value adn we need to pass 2 paramater first is current state adn second is action
    switch(action){
        case 'increament' : 
            return state + 1
        case 'decreament' : 
            return state - 1
        case 'reset' : 
            return initialState
        default :
            return state
    }
}

function CounterReducerSimple(props) {
   const[count,dispatch] =  useReducer(reducer,initialState)//pass two parameter first is action and second we need to initialize number value
   //as per abv using desctructing we hv store state vallue in count variable and action fn in dispatch variable  
   return (
        <div>
            <h3>Count : {count}</h3>
            <button onClick = {() => dispatch('increament')}>Increament</button>&nbsp;
            <button onClick = {() => dispatch('decreament')}>Decreament</button>&nbsp;
            <button onClick = {() => dispatch('reset')}>Reset</button>
        </div>
    );
}

export default CounterReducerSimple;