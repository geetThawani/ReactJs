import React,{useContext} from 'react';
import { CountContext } from '../App';
import ComponentUseReducerContextB from './ComponentUseReducerContextB';

function ComponentUseReducerContextA() {
    const countContext = useContext(CountContext)
    return (
        <div>
            <div>
                <h5>Component A - Count : {countContext.countState}</h5>
                <button onClick = {() => countContext.countDispatch('increament')}>Increament</button>&nbsp;
                <button onClick = {() => countContext.countDispatch('decreament')}>Decreament</button>&nbsp;
                <button onClick = {() => countContext.countDispatch('reset')}>Reset</button>
            </div>
            <ComponentUseReducerContextB />
        </div>
    );
}

export default ComponentUseReducerContextA;