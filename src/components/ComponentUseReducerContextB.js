import React,{useContext} from 'react';
import { CountContext } from '../App';

function ComponentUseReducerContextB(props) {
    const countContext = useContext(CountContext)
    return (
        <div>
           <h5>Component B - Count : {countContext.countState}</h5>
                <button onClick = {() => countContext.countDispatch('increament')}>Increament</button>&nbsp;
                <button onClick = {() => countContext.countDispatch('decreament')}>Decreament</button>&nbsp;
                <button onClick = {() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    );
}

export default ComponentUseReducerContextB;