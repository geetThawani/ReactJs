import React,{useState} from 'react';
import useCounter from './useCounter';

function CounterOne(props) {
    // const[count,setCount] = useState(0)

    // const increament = () => {
    //     setCount(prevCount => prevCount + 1)
    // }
    // const decreament = () => {
    //     setCount(prevCount => prevCount - 1)
    // }
    // const reset = () => {
    //     setCount(0)
    // }
    const [count,increament,decreament,reset] = useCounter(0,1)
    return (
        <div>
            <h2>Count - {count}</h2>
            <button onClick = {increament}>Increament</button>&nbsp;&nbsp;
            <button onClick = {decreament}>Decreament</button>&nbsp;&nbsp;
            <button onClick = {reset}>Reset</button>&nbsp;&nbsp;
        </div>
    );
}

export default CounterOne;