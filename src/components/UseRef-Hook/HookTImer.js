import React,{useEffect, useState,useRef} from 'react';

function HookTImer(props) {
    const [timer,setTimer] = useState(0)
    const inervalRef = useRef()
    useEffect(() => {
        inervalRef.current = setInterval(()=> {
            setTimer(prevTimer => prevTimer+1)
        },1000)
        return () => {
            clearInterval(inervalRef.current)
        }
    },[])

    return (
        <div>
            Hook Timer : {timer}
            <button onClick = {() => clearInterval(inervalRef.current)}>Clear Hook Timer Interval</button>
            {/* abv fn we can't use clearinterval using interval variable because it's scope ony inside useeffect hook so her we should use useRef for getting clearinterval*/}
        </div>
    );
}

export default HookTImer;