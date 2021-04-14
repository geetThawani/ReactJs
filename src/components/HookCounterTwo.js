import React,{useState} from 'react';

function HookCounterTwo(props) {
    const initialCount = 0;
    const [count,setCount] = useState(0)

    const increamentFive = () => {
        for(let i=0;i<5;i++){
           // setCount(count + 1)//while using this to increament count by 5 so it will increame wid one only so we need to use prevCOunt here this is correct approach to use
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
           <h1> Count Value - {count}</h1><hr/>
            <button className = "btn" onClick = {() => setCount(prevCount => prevCount + 1)}>Increament Count</button>&nbsp;
            <button onClick = {() => setCount(prevCount => prevCount - 1)}>Decreament Count</button>&nbsp;
            <button onClick = {() => setCount(initialCount)}>Reset Count</button>&nbsp;
            <button onClick = {increamentFive}>Increament by Five</button>
        </div>
    );
}

export default HookCounterTwo;