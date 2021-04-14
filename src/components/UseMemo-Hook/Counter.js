import React,{useState,useMemo} from 'react';

function Counter(props) {
    const[counterOne,setCounterOne] = useState(0)
    const[counterTwo,setCounterTwo] = useState(0)

    const increamentCountOne = () =>{
        setCounterOne(counterOne + 1)
    }

    const increamentCountTwo = () =>{
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() =>{
        let i=0
        while(i<200000000) i++
        return counterOne % 2 === 0
    },[counterOne])//while use useMemo it will ignore cache value
    
    return (
        <div>
            <button onClick = {increamentCountOne}> Count - {counterOne}</button>
            &nbsp;
            <span>{isEven  ? 'Even' : 'Odd'}</span><br/><br/>
            <button onClick = {increamentCountTwo}> Count - {counterTwo}</button>
        </div>
    );
}

export default Counter;